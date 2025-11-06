import React from 'react';
import { motion } from 'framer-motion';
import { Package, Sandwich, Beer } from 'lucide-react';

const products = [
  { id: 1, name: 'Artisan Bread', category: 'Groceries', price: '$4.50', Icon: Sandwich },
  { id: 2, name: 'Sparkling Beverage', category: 'Drinks', price: '$2.99', Icon: Beer },
  { id: 3, name: 'Gourmet Snack Pack', category: 'Snacks', price: '$5.25', Icon: Package },
  { id: 4, name: 'Cold Brew Coffee', category: 'Drinks', price: '$3.75', Icon: Beer },
];

export default function ProductShowcase() {
  return (
    <section id="shop" className="relative bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-manrope text-3xl font-bold tracking-tight text-yellow-400 md:text-4xl">Featured Essentials</h2>
            <p className="mt-2 max-w-2xl text-neutral-300">Interactive shelves with subtle 3D motion — hover to experience the glow.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ rotateX: 4, rotateY: -4, translateZ: 10 }}
              className="group relative rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-5 ring-1 ring-white/10 shadow-2xl shadow-black/40"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,215,0,0.15), transparent 60%)' }} />

              <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/30">
                  <p.Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-neutral-400">{p.category}</p>
                  <h3 className="font-semibold">{p.name}</h3>
                </div>
                <div className="ml-auto font-semibold text-yellow-400">{p.price}</div>
              </div>

              <div className="relative mt-6 h-24 w-full overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/60 to-black ring-1 ring-white/10" style={{ perspective: 800 }}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-x-4 top-3 h-2 rounded-full bg-yellow-400/60 blur-[2px]" />
                  <div className="absolute inset-x-2 bottom-2 h-16 rounded-xl bg-zinc-900 ring-1 ring-white/10" />
                  <div className="absolute left-3 top-6 h-12 w-20 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 ring-1 ring-white/10" />
                  <div className="absolute right-3 top-6 h-12 w-24 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 ring-1 ring-white/10" />
                </motion.div>
              </div>

              <div className="mt-4 text-sm text-neutral-400">Sleek shelf with soft reflections. Subtle rotations add depth on hover.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
