export async function getFlashcards(topic: string, difficulty: string, cardCount: number) {
  const prompt = `
Generate ${cardCount} flashcards on the topic "${topic}" with ${difficulty.toLowerCase()} difficulty. Answer should be short max 5-7 words.
Each flashcard must follow this format exactly:
Q1: <question>
A1: <short answer>
Q2: ...
...
Q${cardCount}: ...
A${cardCount}: ...
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

  return text
    .split(/\n(?=Q\d+:)/)
    .map((entry: { match: (arg0: RegExp) => string[]; }) => {
      const question = entry.match(/Q\d+:\s*(.+)/)?.[1]?.trim() ?? '';
      const answer = entry.match(/A\d+:\s*(.+)/)?.[1]?.trim() ?? '';
      return { question, answer };
    })
    .filter((c: { question: any; answer: any; }) => c.question && c.answer);
}
