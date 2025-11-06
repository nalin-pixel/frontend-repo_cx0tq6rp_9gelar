import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Deals from './Deals';
import Testimonials from './Testimonials';

export default function CombinedExperience() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0.35, 0.55], [0, 8]);
  const scale = useTransform(scrollYProgress, [0.35, 0.55], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.65], [1, 0.85]);

  return (
    <section className="relative bg-black text-white">
      {/* Parallax gold particles backdrop */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,215,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(255,215,0,0.05),transparent_60%)]" />
      </motion.div>

      {/* Deals with subtle spin/zoom transition cue */}
      <motion.div style={{ rotate, scale }}>
        <Deals />
      </motion.div>

      {/* Gold trail divider suggesting motion between sections */}
      <div className="relative mx-auto my-4 h-12 max-w-5xl overflow-hidden">
        <motion.div
          className="absolute left-1/2 h-0.5 w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          animate={{ x: ['-10%', '10%', '-10%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Testimonials */}
      <Testimonials />
    </section>
  );
}
