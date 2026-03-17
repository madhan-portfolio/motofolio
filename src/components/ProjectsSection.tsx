import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Globe } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "Ev Cart",
    description: "A feature-rich e-commerce application for electric vehicles with cart management, product filtering, and responsive design.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    icon: Globe,
    title: "Portfolio Website",
    description: "This very portfolio — a cinematic motorcycle-themed journey through my career milestones, built with React and Framer Motion.",
    tags: ["React", "Framer Motion", "Tailwind"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-glow-primary mb-4">
          Projects
        </h2>
        <p className="font-body text-muted-foreground max-w-md mx-auto">
          Pit stops where ideas turned into reality.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              className="glass-card glass-card-hover rounded-lg p-8 group cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-primary animate-pulse-glow" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{project.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="font-display text-xs tracking-wider text-primary flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                View Project <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
