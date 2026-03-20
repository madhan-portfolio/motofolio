import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";
import PageShell from "@/components/PageShell";
import BackButton from "@/components/BackButton";
import NextDestination from "@/components/NextDestination";
import BikeTransition from "@/components/BikeTransition";

const highlights = [
  { icon: BookOpen, title: "B.E. in ECE", desc: "Electronics and Communication Engineering — a blend of hardware thinking and software creation." },
  { icon: Users, title: "Team Projects", desc: "Collaborated on embedded systems, IoT experiments, and web development projects with peers." },
  { icon: Award, title: "Self-Learning", desc: "Picked up web development, Python, and React through self-study and online courses." },
];

const College = () => {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);

  return (
    <>
      <BikeTransition isActive={transitioning} onComplete={() => navigate("/nit-project")} />
      <PageShell>
        <BackButton to="/" />
        <section className="min-h-screen flex flex-col justify-center py-24 px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto w-full">
            <motion.h1
              className="font-display text-3xl sm:text-5xl font-bold text-foreground text-glow-primary mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              St. Joseph's College of Engineering
            </motion.h1>

            <motion.span
              className="font-display text-xs tracking-[0.3em] text-primary uppercase block mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              2022 – 2026
            </motion.span>

            <motion.p
              className="font-body text-lg text-muted-foreground max-w-2xl mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Chennai — where the engine first roared. Four years of engineering shaped my problem-solving mindset and ignited a passion for building things.
            </motion.p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    className="glass-card glass-card-hover rounded-lg p-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 200, damping: 20 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-sm text-foreground mb-2">{h.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <NextDestination label="Next Destination → NIT Karaikal" onClick={() => setTransitioning(true)} />
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default College;
