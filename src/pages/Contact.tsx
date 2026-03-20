import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageShell from "@/components/PageShell";
import BackButton from "@/components/BackButton";

const contacts = [
  { icon: Mail, label: "Email", value: "smamsmathan12@gmail.com", href: "mailto:smamsmathan12@gmail.com" },
  { icon: Phone, label: "Phone", value: "9360413618", href: "tel:9360413618" },
  { icon: Linkedin, label: "LinkedIn", value: "Madhan M", href: "https://www.linkedin.com/in/madhan-m-6853b3247" },
  { icon: Github, label: "GitHub", value: "madhan-portfolio", href: "https://github.com/madhan-portfolio" },
];

const Contact = () => {
  const navigate = useNavigate();

  return (
    <PageShell>
      <section className="min-h-screen flex flex-col justify-center py-24 px-4">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/30 glass-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
                🏁 Final Destination
              </span>
            </motion.div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-foreground text-glow-primary mb-4">
              Get In Touch
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
              The ride ends here — but the connection starts now. Let's build something together.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover rounded-lg p-5 flex items-center gap-4 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:box-glow-primary transition-shadow duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-display text-xs tracking-wider text-primary block">{contact.label}</span>
                    <span className="font-body text-sm text-foreground">{contact.value}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Restart journey */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => navigate("/")}
              className="font-display text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mx-auto mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Restart the Journey
            </button>
            <p className="font-display text-sm text-muted-foreground/40 text-glow-primary">
              © 2026 Madhan M
            </p>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
