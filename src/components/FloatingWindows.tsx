// components/FloatingWindows.tsx
import { motion } from "framer-motion";

const windowColors = [
  "from-primary/50 to-accent/50",
  "from-secondary/50 to-primary/50",
  "from-accent/40 to-secondary/40",
];

export default function FloatingWindows() {
  const windows = Array.from({ length: 6 }); // יותר חלונות כדי שיהיו מופעים קצרים

  return (
    <>
      {windows.map((_, i) => {
        const size = 100 + Math.random() * 120;
        const top = Math.random() * 70;
        const left = Math.random() * 70;
        const color =
          windowColors[Math.floor(Math.random() * windowColors.length)];

        return (
          <motion.div
            key={i}
            className={`absolute rounded-lg bg-gradient-to-br ${color} border border-white/20 shadow-lg blur-md`}
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
            }}
            animate={{
              scale: [0, 1, 1.05, 0], // הופעה מהירה ואז נעלם
              opacity: [0, 0.8, 0.6, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3, // הופעה קצרה: 5–8 שניות
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5, // הפעלה רנדומלית
            }}
          />
        );
      })}
    </>
  );
}
