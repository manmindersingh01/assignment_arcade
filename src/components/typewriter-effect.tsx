import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [show, setShow] = useState(true);

  const currentWord = words[currentWordIndex];
  const chars = currentWord.text.split("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (show) {
      // Start erasing after typing completes and a pause
      timeout = setTimeout(() => setShow(false), chars.length * 100 + 1000);
    } else {
      // Start typing next word after erasing completes and a pause
      timeout = setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setShow(true);
      }, chars.length * 50 + 500);
    }

    return () => clearTimeout(timeout);
  }, [show, currentWordIndex]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-6xl font-bold text-center flex items-center justify-center",
        className
      )}
    >
      <div className="inline-block">
        {chars.map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: show ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
              delay: show ? idx * 0.1 : (chars.length - idx) * 0.05,
            }}
            className={cn(
              "inline-block dark:text-white text-black",
              currentWord.className
            )}
          >

            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "ml-1 inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
