import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.06]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Cinematic lighting + vignette */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,215,0,0.22),rgba(0,0,0,0.9)_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </motion.div>

      <div className="relative mx-auto flex h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.h1
            className="font-manrope text-5xl font-extrabold tracking-tight md:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent [text-shadow:0_0_28px_rgba(255,215,0,0.3)]">
              GoldenMart
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-balance text-base text-neutral-300 md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A luxurious minimarket experience with elegant, futuristic motion and glowing golden highlights on deep matte black.
          </motion.p>

          <motion.a
            href="#shop"
            initial={{ filter: 'brightness(0.95)' }}
            animate={{
              boxShadow: [
                '0 0 0 rgba(255,215,0,0.0)',
                '0 0 24px rgba(255,215,0,0.35)',
                '0 0 0 rgba(255,215,0,0.0)'
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 px-8 py-3 font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] ring-1 ring-yellow-400/60"
          >
            Shop Now
          </motion.a>
        </motion.div>

        {/* Liquid-gold ripple hint for transition */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-12 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full"
          animate={{ boxShadow: [
            '0 0 0 0 rgba(255,215,0,0.35)',
            '0 0 0 20px rgba(255,215,0,0.0)'
          ]}}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
}
