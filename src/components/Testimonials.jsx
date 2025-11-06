import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Elena M.',
    text: 'The visuals are stunning and the product quality matches the premium vibe. Shopping feels like an experience.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Noah R.',
    text: 'Smooth animations and quick browsing. Love the curated selection and elegant design.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya S.',
    text: 'Everything feels refined—from checkout to packaging. The best minimarket experience online.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-yellow-400 md:text-4xl">What Our Customers Say</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">Minimalist 3D cards with subtle depth, soft shadows, and glowing gold accents.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ rotateX: 2, rotateY: -2 }}
              className="group relative rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-6 ring-1 ring-white/10 shadow-2xl shadow-black/40"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,215,0,0.12), transparent 60%)' }} />

              <div className="relative z-10">
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-5 w-5 fill-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-neutral-200">{t.text}</p>
                <div className="mt-6 font-semibold text-yellow-300">{t.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
