import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "smamsmathan12@gmail.com", href: "mailto:smamsmathan12@gmail.com" },
  { icon: Phone, label: "Phone", value: "9360413618", href: "tel:9360413618" },
  { icon: Linkedin, label: "LinkedIn", value: "Madhan M", href: "https://www.linkedin.com/in/madhan-m-6853b3247" },
  { icon: Github, label: "GitHub", value: "madhan-portfolio", href: "https://github.com/madhan-portfolio" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-glow-primary mb-4">
          Get In Touch
        </h2>
        <p className="font-body text-muted-foreground max-w-md mx-auto">
          Let's connect and ride together toward something great.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
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
    </section>
  );
};

export default ContactSection;
