import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 py-16 text-white">
      {/* Soft gold halo pulse */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,215,0,0.12),transparent_60%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="text-2xl font-extrabold tracking-tight text-yellow-400">GoldenMart</div>
          <p className="mt-1 text-sm text-neutral-400">Luxury minimarket · Black & Gold aesthetic</p>
        </div>
        <div className="flex items-center gap-4 text-yellow-400">
          <a href="#" aria-label="Instagram" className="group rounded-full p-2 ring-1 ring-yellow-500/30 transition hover:bg-yellow-500/10">
            <Instagram className="h-5 w-5 transition group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
          </a>
          <a href="#" aria-label="Facebook" className="group rounded-full p-2 ring-1 ring-yellow-500/30 transition hover:bg-yellow-500/10">
            <Facebook className="h-5 w-5 transition group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
          </a>
          <a href="#" aria-label="Twitter" className="group rounded-full p-2 ring-1 ring-yellow-500/30 transition hover:bg-yellow-500/10">
            <Twitter className="h-5 w-5 transition group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
          </a>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-8 max-w-7xl text-center text-xs text-neutral-500">© {new Date().getFullYear()} GoldenMart. All rights reserved.</div>
    </footer>
  );
}
