import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Code, Users, Rocket } from "lucide-react";
import PageShell from "@/components/PageShell";
import NextDestination from "@/components/NextDestination";
import BikeTransition from "@/components/BikeTransition";
import BackButton from "@/components/BackButton";

const experiences = [
  { icon: Code, title: "Web Development", desc: "Built and maintained production-grade web applications using modern frameworks and tools." },
  { icon: Users, title: "Team Collaboration", desc: "Worked alongside experienced developers, participating in code reviews and agile sprints." },
  { icon: Rocket, title: "Real-World Impact", desc: "Contributed to client projects that shipped to real users, gaining hands-on industry experience." },
];

const Internship = () => {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);

  return (
    <>
      <BikeTransition isActive={transitioning} onComplete={() => navigate("/skills")} />
      <PageShell>
        <BackButton to="/nit-project" />
        <section className="min-h-screen flex flex-col justify-center py-24 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              className="flex items-center gap-4 mb-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">Feb – Mar 2026</span>
            </motion.div>

            <motion.h1
              className="font-display text-3xl sm:text-5xl font-bold text-foreground text-glow-primary mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Evolve IT Solutions
            </motion.h1>

            <motion.p
              className="font-body text-lg text-muted-foreground max-w-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              A pit stop that turned into a launchpad. My internship gave me real-world fuel — collaborating on production apps and leveling up my development skills.
            </motion.p>

            <div className="space-y-5 mb-12">
              {experiences.map((exp, i) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.title}
                    className="glass-card glass-card-hover rounded-lg p-6 flex items-start gap-5"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 200, damping: 20 }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm text-foreground mb-1">{exp.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <NextDestination label="Next Destination → Skills" onClick={() => setTransitioning(true)} />
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Internship;
