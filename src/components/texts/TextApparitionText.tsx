import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay: number; 
}

const textVariants = {
  visible: (delay: number) => ({
    translateY: "0%",
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.35,
      delay: delay, 
    },
  }),
  hidden: {
    translateY: "100%",
  },
};

export default function TextApparitionText({ children, delay }: Props) {
  return (
    <div className="overflow-hidden w-full h-[20px]">
      <motion.span
        className="inline-block max-w-52 text-xs"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        custom={delay} 
      >
        {children}
      </motion.span>
    </div>
  );
}
