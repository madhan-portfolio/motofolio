import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NextDestinationProps {
  label: string;
  onClick: () => void;
}

const NextDestination = ({ label, onClick }: NextDestinationProps) => (
  <motion.div
    className="flex justify-center py-16"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.5 }}
  >
    <button
      onClick={onClick}
      className="group font-display text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground box-glow-primary hover:box-glow-primary-intense transition-all duration-300 flex items-center gap-3"
    >
      {label}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

export default NextDestination;
