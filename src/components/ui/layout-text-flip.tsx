"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  className,
  textClassName,
  isAnimating = true,
}: {
  text: string;
  words: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
  isAnimating?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isAnimating) {
      setCurrentIndex(0); // Reset to first word when animation stops
      return;
    }
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [isAnimating, duration, words.length]);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className={cn("text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl", textClassName)}
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className={cn("relative w-fit overflow-hidden rounded-md border border-transparent bg-white px-4 py-2 font-sans text-2xl font-bold tracking-tight shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-4xl dark:bg-neutral-900 dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10", className)}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
