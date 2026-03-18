import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface BikeDriftTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

const BikeDriftTransition = ({ isActive, onComplete }: BikeDriftTransitionProps) => {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(onComplete, 2200);
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
          <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-muted/40 to-transparent" />

          {/* Tire marks that appear during drift */}
          <motion.div
            className="absolute bottom-[28%] left-[30%] w-[40%] h-[4px] rounded-full origin-left"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--muted-foreground) / 0.4), hsl(var(--muted-foreground) / 0.6))" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 0, 0.8, 0.6] }}
            transition={{ duration: 2.2, times: [0, 0.4, 0.7, 1], ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-[26%] left-[35%] w-[35%] h-[3px] rounded-full origin-left"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--muted-foreground) / 0.3), hsl(var(--muted-foreground) / 0.5))" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 0, 0.6, 0.4] }}
            transition={{ duration: 2.2, times: [0, 0.45, 0.75, 1], ease: "easeOut" }}
          />

          {/* Speed streaks - phase 1: riding in */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`streak-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              style={{
                top: `${10 + Math.random() * 80}%`,
                width: `${100 + Math.random() * 200}px`,
              }}
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: "-300px", opacity: [0, 0.8, 0] }}
              transition={{
                duration: 0.4 + Math.random() * 0.3,
                delay: i * 0.05,
                ease: "linear",
              }}
            />
          ))}

          {/* Spark particles during drift */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`spark-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary"
              style={{ filter: "blur(0.5px)" }}
              initial={{ 
                x: "50vw", 
                y: "60%",
                opacity: 0,
                scale: 0 
              }}
              animate={{ 
                x: `${45 + Math.random() * 20}vw`,
                y: `${55 + Math.random() * 15}%`,
                opacity: [0, 0, 1, 0],
                scale: [0, 0, 1.5, 0],
              }}
              transition={{ 
                duration: 2.2, 
                times: [0, 0.5, 0.65 + i * 0.02, 0.85 + i * 0.01],
                ease: "easeOut" 
              }}
            />
          ))}

          {/* Smoke cloud during drift */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`smoke-${i}`}
              className="absolute rounded-full bg-muted-foreground/15 blur-[12px]"
              style={{
                width: `${30 + Math.random() * 40}px`,
                height: `${30 + Math.random() * 40}px`,
              }}
              initial={{ 
                x: "50vw", 
                y: "58%", 
                opacity: 0, 
                scale: 0.3 
              }}
              animate={{ 
                x: `${40 + Math.random() * 25}vw`,
                y: `${50 + Math.random() * 20}%`,
                opacity: [0, 0, 0.6, 0],
                scale: [0.3, 0.3, 2, 3],
              }}
              transition={{ 
                duration: 2.2, 
                times: [0, 0.45, 0.65 + i * 0.03, 1],
                ease: "easeOut" 
              }}
            />
          ))}

          {/* Motorbike - rides in then drifts to a stop */}
          <motion.div
            className="relative z-10"
            style={{ bottom: "-5%" }}
            initial={{ x: "-50vw", rotate: 0 }}
            animate={{ 
              x: ["−50vw", "0vw", "10vw", "5vw"],
              rotate: [0, 0, -25, -8],
            }}
            transition={{ 
              duration: 2.0, 
              times: [0, 0.4, 0.7, 1],
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Bike wobble during drift */}
            <motion.div
              animate={{ 
                rotate: [0, 0, 3, -2, 1, 0],
                y: [0, 0, -3, 2, -1, 0],
              }}
              transition={{ 
                duration: 2.0, 
                times: [0, 0.5, 0.6, 0.7, 0.85, 1] 
              }}
            >
              <svg width="120" height="70" viewBox="0 0 120 70" className="drop-shadow-[0_0_20px_hsl(var(--primary)/0.8)]">
                {/* Rear wheel */}
                <motion.g
                  animate={{ rotate: [0, 1800, 2200, 2300] }}
                  transition={{ duration: 2.0, times: [0, 0.5, 0.8, 1], ease: "easeOut" }}
                  style={{ transformOrigin: "25px 55px" }}
                >
                  <circle cx="25" cy="55" r="14" fill="none" stroke="hsl(var(--foreground))" strokeWidth="3" />
                  <line x1="25" y1="41" x2="25" y2="69" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.3" />
                  <line x1="11" y1="55" x2="39" y2="55" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.3" />
                </motion.g>
                <circle cx="25" cy="55" r="4" fill="hsl(var(--primary))" />
                
                {/* Front wheel */}
                <motion.g
                  animate={{ rotate: [0, 1800, 2000, 2050] }}
                  transition={{ duration: 2.0, times: [0, 0.5, 0.8, 1], ease: "easeOut" }}
                  style={{ transformOrigin: "95px 55px" }}
                >
                  <circle cx="95" cy="55" r="14" fill="none" stroke="hsl(var(--foreground))" strokeWidth="3" />
                  <line x1="95" y1="41" x2="95" y2="69" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.3" />
                  <line x1="81" y1="55" x2="109" y2="55" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.3" />
                </motion.g>
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
                {/* Headlight */}
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
            </motion.div>
          </motion.div>

          {/* "Final Destination" text with dramatic reveal */}
          <motion.div
            className="absolute bottom-[12%] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0, 1, 1], y: [20, 20, 0, 0] }}
            transition={{ duration: 2.2, times: [0, 0.6, 0.8, 1] }}
          >
            <p className="font-display text-lg tracking-[0.5em] text-primary uppercase text-glow-primary">
              🏁 Final Destination
            </p>
            <motion.p
              className="font-display text-xs tracking-[0.3em] text-muted-foreground mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 1] }}
              transition={{ duration: 2.2, times: [0, 0.7, 0.85, 1] }}
            >
              Ride Complete
            </motion.p>
          </motion.div>

          {/* Screen shake effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ 
              x: [0, 0, 0, 4, -3, 2, -1, 0],
              y: [0, 0, 0, 2, -2, 1, 0, 0],
            }}
            transition={{ duration: 2.2, times: [0, 0.5, 0.58, 0.62, 0.66, 0.72, 0.8, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BikeDriftTransition;
