import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Palette, Globe, Code, Atom, Terminal, Megaphone } from "lucide-react";
import PageShell from "@/components/PageShell";
import NextDestination from "@/components/NextDestination";
import BikeTransition from "@/components/BikeTransition";

const skills = [
  { icon: Palette, name: "UI/UX Design", color: "primary" as const },
  { icon: Globe, name: "Web Development", color: "primary" as const },
  { icon: Code, name: "JavaScript", color: "secondary" as const },
  { icon: Atom, name: "React", color: "primary" as const },
  { icon: Terminal, name: "Python", color: "secondary" as const },
  { icon: Megaphone, name: "Digital Marketing", color: "primary" as const },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;
  const isSecondary = skill.color === "secondary";

  return (
    <motion.div
      className="relative glass-card rounded-xl p-6 flex flex-col items-center gap-4 cursor-pointer overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 200, damping: 20 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.06, y: -6 }}
    >
      {/* Glow background on hover */}
      <motion.div
        className={`absolute inset-0 ${isSecondary ? "bg-secondary/5" : "bg-primary/5"} rounded-xl`}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container */}
      <motion.div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center border ${
          isSecondary
            ? "bg-secondary/10 border-secondary/30"
            : "bg-primary/10 border-primary/30"
        }`}
        animate={hovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className={`w-7 h-7 ${isSecondary ? "text-secondary" : "text-primary"}`} />
      </motion.div>

      {/* Skill name */}
      <span className="relative font-display text-xs tracking-wider text-foreground uppercase text-center">
        {skill.name}
      </span>

      {/* Animated underline */}
      <motion.div
        className={`h-[2px] rounded-full ${isSecondary ? "bg-secondary" : "bg-primary"}`}
        initial={{ width: 0 }}
        animate={{ width: hovered ? "60%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);

  return (
    <>
      <BikeTransition isActive={transitioning} onComplete={() => navigate("/contact")} />
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
                Tools and technologies I've picked up along the ride.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
              {skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
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
