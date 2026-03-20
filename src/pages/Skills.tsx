import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Palette, Globe, Code, Atom, Terminal, Megaphone } from "lucide-react";
import PageShell from "@/components/PageShell";
import NextDestination from "@/components/NextDestination";
import BikeDriftTransition from "@/components/BikeDriftTransition";
import BackButton from "@/components/BackButton";

const skills = [
  {
    icon: Palette,
    name: "UI/UX Design",
    color: "primary" as const,
    description: "Hands-on experience with Figma, designing user-friendly interfaces and improving user experience.",
  },
  {
    icon: Globe,
    name: "Web Development",
    color: "primary" as const,
    description: "Built projects using HTML, CSS, and JavaScript with responsive, modern layouts.",
  },
  {
    icon: Code,
    name: "JavaScript",
    color: "secondary" as const,
    description: "Strong fundamentals in ES6+, DOM manipulation, async programming, and building dynamic web apps.",
  },
  {
    icon: Atom,
    name: "React",
    color: "primary" as const,
    description: "Component-based development with hooks, state management, and single-page application architecture.",
  },
  {
    icon: Terminal,
    name: "Python",
    color: "secondary" as const,
    description: "Scripting, data processing, and building automation tools with Python.",
  },
  {
    icon: Megaphone,
    name: "Digital Marketing",
    color: "primary" as const,
    description: "Learned SEO, SEM, and basics of online marketing strategies.",
  },
];

const SkillCard = ({ skill, index, isActive, onToggle }: {
  skill: typeof skills[0];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) => {
  const Icon = skill.icon;
  const isSecondary = skill.color === "secondary";

  return (
    <motion.button
      className={`relative glass-card rounded-xl p-6 flex flex-col items-center gap-4 cursor-pointer overflow-hidden text-center transition-all duration-300 ${
        isActive
          ? isSecondary
            ? "border-secondary bg-secondary/10 shadow-[0_0_24px_hsl(var(--secondary)/0.25)]"
            : "border-primary bg-primary/10 shadow-[0_0_24px_hsl(var(--primary)/0.25)]"
          : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.06, y: -6 }}
      whileTap={{ scale: 0.97 }}
      onClick={onToggle}
    >
      {/* Icon container */}
      <motion.div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center border ${
          isSecondary
            ? "bg-secondary/10 border-secondary/30"
            : "bg-primary/10 border-primary/30"
        }`}
        animate={isActive ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className={`w-7 h-7 ${isSecondary ? "text-secondary" : "text-primary"}`} />
      </motion.div>

      {/* Skill name */}
      <span className="relative font-display text-xs tracking-wider text-foreground uppercase">
        {skill.name}
      </span>

      {/* Inline description */}
      <AnimatePresence>
        {isActive && (
          <motion.p
            className="font-body text-xs text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {skill.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const Skills = () => {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <>
      <BikeDriftTransition isActive={transitioning} onComplete={() => navigate("/contact")} />
      <PageShell>
        <section className="min-h-screen flex flex-col justify-center py-24 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-foreground text-glow-primary mb-4">
                Skills Garage
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
                Tap any skill to see what I've learned along the ride.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
              {skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                  isActive={activeSkill === skill.name}
                  onToggle={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                />
              ))}
            </div>

            <NextDestination label="Final Destination → Contact" onClick={() => setTransitioning(true)} />
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Skills;
