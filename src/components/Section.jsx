import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

/*
  Section wrapper with shared reveal and background accents to keep a consistent feel.
*/
const Section = forwardRef(function Section({ children, className = '' }, ref) {
  return (
    <section ref={ref} className={`relative bg-black ${className}`}>
      {/* subtle vignette for cohesion */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(255,215,0,0.04),rgba(0,0,0,0)_60%)]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
});

export default Section;
