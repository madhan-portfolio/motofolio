import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface BikeTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

const BikeTransition = ({ isActive, onComplete }: BikeTransitionProps) => {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(onComplete, 1400);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Road surface */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-muted/30 to-transparent" />

          {/* Animated road lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[3px] rounded-full bg-primary/40"
              style={{
                bottom: `${18 + Math.random() * 10}%`,
                width: `${60 + Math.random() * 100}px`,
              }}
              initial={{ x: "100vw" }}
              animate={{ x: "-200px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "linear",
                repeat: 2,
              }}
            />
          ))}

          {/* Speed streaks */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`streak-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                top: `${10 + Math.random() * 80}%`,
                width: `${100 + Math.random() * 200}px`,
              }}
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: "-300px", opacity: [0, 0.8, 0] }}
              transition={{
                duration: 0.5 + Math.random() * 0.3,
                delay: i * 0.06,
                ease: "linear",
              }}
            />
          ))}

          {/* Motorbike SVG */}
          <motion.div
            className="relative z-10"
            style={{ bottom: "-5%" }}
            initial={{ x: "-50vw", scale: 0.9 }}
            animate={{ x: "60vw", scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Bike body */}
              <svg width="120" height="70" viewBox="0 0 120 70" className="drop-shadow-[0_0_15px_hsl(var(--primary)/0.6)]">
                {/* Rear wheel */}
                <circle cx="25" cy="55" r="14" fill="none" stroke="hsl(var(--foreground))" strokeWidth="3" />
                <circle cx="25" cy="55" r="4" fill="hsl(var(--primary))" />
                {/* Front wheel */}
                <circle cx="95" cy="55" r="14" fill="none" stroke="hsl(var(--foreground))" strokeWidth="3" />
                <circle cx="95" cy="55" r="4" fill="hsl(var(--primary))" />
                {/* Frame */}
                <path d="M25 55 L50 25 L80 30 L95 55" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinejoin="round" />
                {/* Body/tank */}
                <path d="M45 28 Q60 18 78 30" fill="hsl(var(--secondary))" stroke="hsl(var(--secondary))" strokeWidth="2" />
                {/* Seat */}
                <path d="M42 28 L55 24 L48 28" fill="hsl(var(--muted))" />
                {/* Handlebar */}
                <line x1="80" y1="30" x2="88" y2="18" stroke="hsl(var(--foreground))" strokeWidth="2" />
                <line x1="84" y1="16" x2="92" y2="20" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round" />
                {/* Headlight glow */}
                <circle cx="95" cy="35" r="3" fill="hsl(var(--primary))" opacity="0.9" />
                {/* Exhaust */}
                <path d="M25 48 L15 46 L12 48" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {/* Headlight beam */}
              <motion.div
                className="absolute right-[-40px] top-[40%] w-[60px] h-[6px] rounded-full bg-gradient-to-r from-primary/60 to-transparent blur-[2px]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              />

              {/* Exhaust smoke */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={`smoke-${i}`}
                  className="absolute left-[-10px] top-[55%] w-3 h-3 rounded-full bg-muted-foreground/20 blur-[3px]"
                  animate={{
                    x: [-10 - i * 15, -40 - i * 20],
                    opacity: [0.4, 0],
                    scale: [1, 2],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Destination text */}
          <motion.p
            className="absolute bottom-[15%] font-display text-sm tracking-[0.4em] text-primary/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.4, times: [0, 0.3, 0.7, 1] }}
          >
            Next Destination
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BikeTransition;
