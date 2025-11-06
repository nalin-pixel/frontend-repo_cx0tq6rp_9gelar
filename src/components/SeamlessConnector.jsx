import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/*
  SeamlessConnector
  Creates a sticky liquid-gold wipe that bridges two sections so the transition feels continuous.
  - Uses scroll progress within this small section to animate a gold ribbon and glow.
*/
export default function SeamlessConnector({ height = 120 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Gold ribbon expands then recedes as we scroll past the connector
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.85, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [12, 24, 12]);

  // Subtle vertical sweep for added motion
  const translateY = useTransform(scrollYProgress, [0, 1], [8, -8]);

  return (
    <section ref={ref} className="relative w-full bg-black" style={{ height }}>
      {/* Sticky stage so the wipe holds while scrolling through this band */}
      <div className="pointer-events-none sticky top-0 z-20 flex h-full items-center justify-center">
        {/* Soft global glow */}
        <motion.div
          aria-hidden
          style={{ opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(60% 140% at 50% 60%, rgba(255,215,0,0.10) 0%, rgba(255,215,0,0.04) 45%, rgba(0,0,0,0) 80%)'
          }} />
        </motion.div>

        {/* Gold ribbon */}
        <motion.div
          aria-hidden
          style={{ scaleX, opacity, y: translateY, filter: blur.to(v => `blur(${v}px)`) }}
          className="relative h-1.5 w-[70%] origin-center rounded-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          {/* inner core for metallic sheen */}
          <div className="absolute inset-x-10 -top-1 h-1 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 opacity-70" />
        </motion.div>

        {/* Spark trail shimmer */}
        <motion.div
          aria-hidden
          className="absolute h-0.5 w-[60%] rounded-full bg-gradient-to-r from-transparent via-yellow-200/60 to-transparent"
          animate={{ x: ['-10%', '10%', '-10%'] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
