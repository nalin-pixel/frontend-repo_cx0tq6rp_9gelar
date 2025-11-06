import React from 'react';
import { motion } from 'framer-motion';

const deals = [
  { id: 1, title: 'Golden Hour Deal', subtitle: 'Buy 1 Get 1 30% Off', color: 'from-yellow-500 to-amber-400' },
  { id: 2, title: 'Weekend Luxe', subtitle: 'Snacks 20% Off', color: 'from-yellow-400 to-amber-300' },
  { id: 3, title: 'Members Exclusive', subtitle: 'Extra 10% Savings', color: 'from-amber-400 to-yellow-300' },
];

export default function Deals() {
  return (
    <section className="relative bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-yellow-400 md:text-4xl">Deals & Promotions</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">Rotating banners with elegant, cinematic motion.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {deals.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, rotateY: -10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-black/40`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
                className={`h-36 w-full bg-gradient-to-r ${d.color}`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.35),transparent_60%)]" />
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 p-6">
                <div className="inline-flex rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-300 ring-1 ring-yellow-500/30">Limited</div>
                <h3 className="mt-3 text-xl font-bold text-yellow-400">{d.title}</h3>
                <p className="text-neutral-300">{d.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
