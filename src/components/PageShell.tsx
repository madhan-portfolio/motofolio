import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
}

const PageShell = ({ children }: PageShellProps) => (
  <motion.div
    className="min-h-screen bg-background text-foreground overflow-hidden"
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -60 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default PageShell;
