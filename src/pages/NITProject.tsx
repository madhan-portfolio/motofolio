import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brain, Cpu, Database, Zap } from "lucide-react";
import PageShell from "@/components/PageShell";
import NextDestination from "@/components/NextDestination";
import BikeTransition from "@/components/BikeTransition";

const techStack = [
  {
    icon: Brain,
    label: "AI / ML",
    description: "Learned basics of machine learning concepts and how models process data.",
  },
  {
    icon: Cpu,
    label: "Digital Processing",
    description: "Worked on signal/data processing techniques and understood real-world applications.",
  },
  {
    icon: Database,
    label: "Data Analysis",
    description: "Gained experience in analyzing datasets and extracting useful insights.",
  },
  {
    icon: Zap,
    label: "Signal Processing",
    description: "Explored how signals are captured, filtered, and transformed for practical engineering use.",
  },
];

const NITProject = () => {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <>
      <BikeTransition isActive={transitioning} onComplete={() => navigate("/internship")} />
      <PageShell>
        <section className="min-h-screen flex flex-col justify-center py-24 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              className="flex items-center gap-4 mb-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                <Brain className="w-7 h-7 text-secondary" />
              </div>
              <span className="font-display text-xs tracking-[0.3em] text-secondary uppercase">January 2026</span>
            </motion.div>

            <motion.h1
              className="font-display text-3xl sm:text-5xl font-bold text-foreground text-glow-red mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              AI Digital Processing Project
            </motion.h1>

            <motion.p
              className="font-body text-lg text-muted-foreground max-w-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              NIT Karaikal — a high-speed detour into the world of artificial intelligence and signal processing. Click each topic to learn more.
            </motion.p>

            <motion.div
              className="glass-card rounded-lg p-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="font-display text-sm tracking-wider text-secondary mb-6 uppercase">Tech Explored</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {techStack.map((t, i) => {
                  const Icon = t.icon;
                  const isActive = activeTopic === t.label;
                  return (
                    <motion.button
                      key={t.label}
                      className={`flex flex-col items-center gap-3 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-secondary bg-secondary/10 shadow-[0_0_20px_hsl(var(--secondary)/0.3)]"
                          : "border-border/50 hover:border-secondary/40 hover:bg-secondary/5"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTopic(isActive ? null : t.label)}
                    >
                      <Icon className="w-8 h-8 text-secondary" />
                      <span className="font-display text-xs text-foreground">{t.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Animated info panel */}
              <AnimatePresence mode="wait">
                {activeTopic && (
                  <motion.div
                    key={activeTopic}
                    className="mt-6 p-5 rounded-lg border border-secondary/30 bg-secondary/5"
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p className="font-display text-sm text-secondary mb-1">{activeTopic}</p>
                    <p className="font-body text-sm text-muted-foreground">
                      {techStack.find((t) => t.label === activeTopic)?.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <NextDestination label="Next Destination → Internship" onClick={() => setTransitioning(true)} />
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default NITProject;
