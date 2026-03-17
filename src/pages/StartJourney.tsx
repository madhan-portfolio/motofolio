import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";
import BikeTransition from "@/components/BikeTransition";

const SpeedLine = ({ delay, left }: { delay: number; left: string }) => (
  <motion.div
    className="absolute w-[2px] h-20 bg-gradient-to-b from-primary/80 to-transparent"
    style={{ left }}
    initial={{ y: "-20vh", opacity: 0 }}
    animate={{ y: "100vh", opacity: [0, 1, 0] }}
    transition={{ duration: 1.2, delay, repeat: Infinity, ease: "linear" }}
  />
);

const StartJourney = () => {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const [ignited, setIgnited] = useState(false);

  const speedLines = Array.from({ length: 15 }, () => ({
    delay: Math.random() * 2,
    left: `${5 + Math.random() * 90}%`,
  }));

  const handleIgnite = useCallback(() => {
    setIgnited(true);
    setTimeout(() => setTransitioning(true), 800);
  }, []);

  return (
    <>
      <BikeTransition isActive={transitioning} onComplete={() => navigate("/college")} />
      <PageShell>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

          {/* Perspective road */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div
              className="w-full h-[70%]"
              style={{
                background: `
                  linear-gradient(180deg, transparent 0%, hsl(18 100% 50% / 0.03) 50%, hsl(18 100% 50% / 0.08) 100%),
                  repeating-linear-gradient(0deg, transparent, transparent 40px, hsl(18 100% 50% / 0.1) 40px, hsl(18 100% 50% / 0.1) 42px)
                `,
                maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
                perspective: "500px",
                transform: "perspective(500px) rotateX(40deg)",
                transformOrigin: "bottom center",
              }}
            />
          </div>

          {/* Speed lines */}
          {ignited && speedLines.map((line, i) => (
            <SpeedLine key={i} delay={line.delay} left={line.left} />
          ))}

          {/* Central glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
            animate={ignited ? { scale: [1, 1.5], opacity: [0.3, 0.6] } : {}}
            transition={{ duration: 0.8 }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 glass-card"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
                  Portfolio 2026
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-glow-primary leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-foreground">Riding Through</span>
              <br />
              <span className="text-primary">My Tech Journey</span>
            </motion.h1>

            <motion.p
              className="font-body text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Madhan M &bull; ECE Student &bull; Developer
            </motion.p>

            <motion.p
              className="font-body text-sm text-muted-foreground/60 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              St. Joseph's College of Engineering, Chennai
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {!ignited ? (
                <button
                  onClick={handleIgnite}
                  className="group font-display text-sm px-10 py-4 rounded-full bg-primary text-primary-foreground box-glow-primary hover:box-glow-primary-intense transition-all duration-300 relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center gap-3">
                    🏍️ Start the Ride
                  </span>
                </button>
              ) : (
                <motion.div
                  className="font-display text-lg text-primary text-glow-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    Engine Started...
                  </motion.span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default StartJourney;
