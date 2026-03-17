import { motion } from "framer-motion";

const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 85 },
  { name: "JavaScript", value: 80 },
  { name: "React", value: 75 },
  { name: "Python", value: 70 },
  { name: "GitHub", value: 80 },
];

const TachometerGauge = ({ name, value }: { name: string; value: number }) => {
  const radius = 50;
  const stroke = 6;
  const normalizedRadius = radius - stroke;
  const circumference = Math.PI * normalizedRadius; // half circle
  const offset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      className="glass-card glass-card-hover rounded-lg p-6 flex flex-col items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-[110px] h-[65px]">
        <svg width="110" height="65" viewBox="0 0 110 65" className="overflow-visible">
          {/* Background arc */}
          <path
            d={`M ${stroke} ${60} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${110 - stroke} ${60}`}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          {/* Value arc */}
          <motion.path
            d={`M ${stroke} ${60} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${110 - stroke} ${60}`}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{ filter: "drop-shadow(0 0 6px hsl(18 100% 50% / 0.5))" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-end justify-center pb-0">
          <span className="font-display text-xl font-bold text-primary">{value}%</span>
        </div>
      </div>
      <span className="font-display text-xs tracking-wider text-foreground uppercase">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-glow-primary mb-4">
          Skills Dashboard
        </h2>
        <p className="font-body text-muted-foreground max-w-md mx-auto">
          Performance metrics from the cockpit.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <TachometerGauge key={skill.name} name={skill.name} value={skill.value} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
