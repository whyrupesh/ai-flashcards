import { getFlashcards } from '@/lib/gemini';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { topic, difficulty, cardCount } = await req.json();
  const cards = await getFlashcards(topic, difficulty, cardCount);
  return NextResponse.json({ flashcards: cards });
}
