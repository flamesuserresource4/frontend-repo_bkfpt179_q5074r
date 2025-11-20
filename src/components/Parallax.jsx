import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

// Mouse-based parallax wrapper. Moves its children slightly based on cursor position.
export function ParallaxMouse({ strength = 10, className = '', children }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.3 });

  function onMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    mx.set((px - 0.5) * strength);
    my.set((py - 0.5) * strength);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div style={{ x: sx, y: sy }}>
        {children}
      </motion.div>
    </div>
  );
}

// Scroll-based parallax layer. Moves vertically according to scroll position.
export function ParallaxScroll({ speed = 0.2, className = '', children }) {
  // speed: positive moves with scroll, smaller than 1 for slower; negative for opposite
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Simple reveal-on-scroll utility
export function Reveal({ delay = 0, className = '', children, y = 16 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
