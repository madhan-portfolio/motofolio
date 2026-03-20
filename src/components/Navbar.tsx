import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, GraduationCap, Brain, Briefcase, Wrench, Mail } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/college", label: "College", icon: GraduationCap },
  { path: "/nit-project", label: "Project", icon: Brain },
  { path: "/internship", label: "Internship", icon: Briefcase },
  { path: "/skills", label: "Skills", icon: Wrench },
  { path: "/contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-card border border-border/50 rounded-full px-2 py-2 flex items-center gap-1"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full font-display text-[10px] tracking-wider uppercase transition-all duration-300 ${
              isActive
                ? "text-primary bg-primary/10 border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        );
      })}
    </motion.nav>
  );
};

export default Navbar;
