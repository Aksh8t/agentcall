"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-white z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
