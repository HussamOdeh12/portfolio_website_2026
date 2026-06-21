"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  className?: string;
}

export function TypingEffect({ words, className = "" }: TypingEffectProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const timeout = setTimeout(() => {
        setPause(false);
        setDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < words[index].length) {
          setSubIndex((prev) => prev + 1);
        } else if (deleting && subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else if (!deleting && subIndex === words[index].length) {
          setPause(true);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      },
      deleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, pause, words]);

  return (
    <span className={className}>
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}
