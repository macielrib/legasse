"use client"; // Certifica que o componente é um Client Component

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const start = Date.now();

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (to - from) + from);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [from, to, duration]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white text-3xl font-baijam font-semibold"
    >
      {`${count.toLocaleString()}${suffix}`}
    </motion.p>
  );
};

export default Counter;
