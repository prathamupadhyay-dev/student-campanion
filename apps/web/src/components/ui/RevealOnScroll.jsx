import { motion, useReducedMotion } from 'motion/react';

export default function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = '',
  style = {}
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : yOffset
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1]
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
