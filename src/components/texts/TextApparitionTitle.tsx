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
      duration: 0.5,
      delay: delay,
    },
  }),
  hidden: {
    translateY: "100%",
  },
};

export default function TextApparitionTitle({ children, delay }: Props) {
  return (
    <div className="overflow-hidden w-full h-fit">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={textVariants}
        custom={delay} 
        className="inline-block text-[4.375rem] leading-[4.375rem] font-bold"
      >
        {children}
      </motion.span>
    </div>
  );
}
