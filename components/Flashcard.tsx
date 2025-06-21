'use client';
import clsx from 'clsx';

export default function Flashcard({
  question,
  answer,
  flipped,
  setFlipped,
}: {
  question: string;
  answer: string;
  flipped: boolean;
  setFlipped: (value: boolean) => void;
}) {
  return (
    <div
      className="w-[320px] h-[200px] sm:w-[480px] sm:h-[220px] perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-700 transform-style",
          flipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 shadow-xl border border-white/20 backface-hidden flex items-center justify-center text-center text-white overflow-y-auto">
          <p className="text-base sm:text-lg font-semibold leading-relaxed break-words">
            {question}
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 shadow-xl border border-white/20 rotate-y-180 backface-hidden flex items-center justify-center text-center text-cyan-200 overflow-y-auto">
          <p className="text-base sm:text-lg leading-relaxed break-words">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
