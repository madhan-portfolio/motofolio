import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Briefcase } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    year: "2022 – 2026",
    title: "B.E. Electronics & Communication Engineering",
    description: "St. Joseph's College of Engineering, Chennai. Four years of building a strong technical foundation.",
  },
  {
    icon: Brain,
    year: "January 2026",
    title: "AI Digital Processing Project",
    description: "Completed an AI-based digital processing project at NIT Karaikal, exploring machine learning and signal processing.",
  },
  {
    icon: Briefcase,
    year: "Feb – Mar 2026",
    title: "Internship — Evolve IT Solutions",
    description: "Gained real-world experience in web development, collaborating on production-grade applications.",
  },
];

const MilestoneCard = ({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) => {
  const isLeft = index % 2 === 0;
  const Icon = milestone.icon;

  return (
    <div className={`flex items-center gap-6 md:gap-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row`}>
      <motion.div
        className="glass-card glass-card-hover rounded-lg p-6 max-w-sm w-full cursor-default"
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
            <Icon className="w-5 h-5 text-primary animate-pulse-glow" />
          </div>
          <span className="font-display text-xs text-primary tracking-wider">{milestone.year}</span>
        </div>
        <h3 className="font-display text-lg text-foreground mb-2">{milestone.title}</h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
      </motion.div>

      <motion.div
        className="relative z-10 w-5 h-5 rounded-full bg-primary road-glow flex-shrink-0"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
      />

      <div className="hidden md:block max-w-sm w-full" />
    </div>
  );
};

const JourneyTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-24 px-4" ref={containerRef}>
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-glow-primary mb-4">
          My Journey
        </h2>
        <p className="font-body text-muted-foreground max-w-md mx-auto">
          Every milestone is a checkpoint on the road. Scroll to ride through my story.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border hidden md:block" />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-primary road-glow hidden md:block"
          style={{ height: pathHeight }}
        />

        <div className="flex flex-col gap-16 md:gap-20">
          {milestones.map((m, i) => (
            <MilestoneCard key={i} milestone={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
