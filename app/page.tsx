// app/page.tsx
'use client';

import { useState } from 'react';
import Flashcard from '@/components/Flashcard';
import { BackgroundLines } from '@/components/ui/background-lines';
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Home() {
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState('Medium');
  const [cardCount, setCardCount] = useState(10);
  const [flipped, setFlipped] = useState(false); 

  const handleLeftClick = () => {
    if (flipped === true) {
      setFlipped(false);
    }
    if (index === 0) {
      setIndex(flashcards.length - 1);
    } else {
      setIndex(i => Math.max(i - 1, 0));
    }
  };
  const handleRightClick = () => {
    if (flipped === true) {
      setFlipped(false);
    }
    if (index === flashcards.length - 1) {
      setIndex(0);
    } else {
      setIndex(i => Math.min(i + 1, flashcards.length - 1));
    }
  };


  const fetchFlashcards = async () => {
    if (!topic) return;
    setLoading(true);
    const res = await fetch('/api/flashcards', {
      method: 'POST',
      body: JSON.stringify({ topic, difficulty, cardCount }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    setFlashcards(data.flashcards);
    setIndex(0);
    setLoading(false);
  };

  return (
    
      <main className="min-h-screen text-white flex flex-col items-center p-8 gap-6 font-sans">
        <BackgroundLines className="absolute inset-0 -z-10 pointer-events-none" children={undefined} />
        <h1 className="text-4xl font-bold font-sans text-center">AI Flashcards Generator</h1>
        <p className="text-lg text-zinc-400 mb-8 text-center max-w-2xl">
          Generate flashcards on any topic using AI.
        </p>

        <div className="w-full max-w-md bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-800 space-y-4">
          <input
            value={topic}
            onChange={e => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g. DBMS, AI, OS)..."
            className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1 text-sm text-zinc-400">Difficulty</label>
          <select
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 text-white rounded"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1 text-sm text-zinc-400">Cards</label>
          <select
            value={cardCount}
            onChange={e => setCardCount(Number(e.target.value))}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 text-white rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      <button
        onClick={fetchFlashcards}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded shadow-md transition-all duration-300"
      >
        {loading ? 'Generating...' : 'Generate Flashcards'}
      </button>
    </div>
     

      {flashcards.length > 0 && (
        <div className="mt-10 flex flex-col items-center gap-6">
          <Flashcard
            question={flashcards[index].question}
            answer={flashcards[index].answer}
            flipped={flipped}
            setFlipped={setFlipped}
          />

          <div className="flex gap-4">
            <button
              onClick={() => handleLeftClick()}
              className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-6 rounded shadow-md"
            >
              Left
            </button>
            <button
              onClick={() => handleRightClick()}
              className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-6 rounded shadow-md"
            >
              Right
            </button>
          </div>

          <p className="text-zinc-500 text-sm">{index + 1} / {flashcards.length}</p>
        </div>
      )}

    <footer className="mt-10 text-zinc-500 text-sm text-center space-y-2">
      <p className="flex items-center justify-center gap-1">
        Made with <span className="text-red-500">❤️</span> by
        <a
          href="https://rupeshsingh.com/"
          className="text-white flex items-center gap-1 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rupesh Singh <FaExternalLinkAlt size={12} />
        </a>
      </p>
      <p className="flex items-center justify-center gap-1">
        Star ⭐ this repo
        <a
          href="https://github.com/whyrupesh/ai-flashcards"
          className="text-white flex items-center gap-1 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          on GitHub <FaExternalLinkAlt size={12} />
        </a>
      </p>
    </footer>

    </main>

  );
}
