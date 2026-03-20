import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  to?: string;
}

const BackButton = ({ to }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border/50 font-display text-xs tracking-wider text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ x: -4 }}
      onClick={() => (to ? navigate(to) : navigate(-1))}
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </motion.button>
  );
};

export default BackButton;
