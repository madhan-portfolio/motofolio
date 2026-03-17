import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SpeedLine = ({ delay, left }: { delay: number; left: string }) => (
  <motion.div
    className="absolute w-[2px] h-20 bg-gradient-to-b from-primary/80 to-transparent"
    style={{ left }}
    initial={{ y: "-20vh", opacity: 0 }}
    animate={{ y: "100vh", opacity: [0, 1, 0] }}
    transition={{ duration: 1.2, delay, repeat: Infinity, ease: "linear" }}
  />
);

const HeroSection = () => {
  const speedLines = Array.from({ length: 15 }, (_, i) => ({
    delay: Math.random() * 2,
    left: `${5 + Math.random() * 90}%`,
  }));

  return (
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
      {speedLines.map((line, i) => (
        <SpeedLine key={i} delay={line.delay} left={line.left} />
      ))}

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          className="font-body text-sm text-muted-foreground/60 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          St. Joseph's College of Engineering, Chennai
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="#journey"
            className="font-display text-sm px-8 py-3 rounded-full bg-primary text-primary-foreground box-glow-primary hover:box-glow-primary-intense transition-shadow duration-300"
          >
            Start the Ride
          </a>
          <a
            href="#contact"
            className="font-display text-sm px-8 py-3 rounded-full border border-primary/30 text-primary hover:border-primary/60 transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-body text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
