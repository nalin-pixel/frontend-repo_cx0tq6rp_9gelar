import { useRef } from 'react';
import { MotionConfig, useScroll, useTransform, motion } from 'framer-motion';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import CombinedExperience from './components/CombinedExperience';
import SiteFooter from './components/SiteFooter';
import SeamlessConnector from './components/SeamlessConnector';

export default function App() {
  // Global scroll progress for a subtle gold seam reacting to page scroll
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: pageRef });
  const seamOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [0, 0.25, 0]);

  return (
    <MotionConfig transition={{ type: 'spring', stiffness: 140, damping: 22 }}>
      <div ref={pageRef} className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Cinematic gold glow at top that breathes with scroll */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: seamOpacity }}
          className="pointer-events-none fixed top-0 left-0 right-0 h-24 z-30"
        >
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(60% 120% at 50% 0%, rgba(255,215,0,0.25) 0%, rgba(255,215,0,0.08) 35%, rgba(0,0,0,0) 100%)'
          }} />
        </motion.div>

        {/* Sections with seamless connectors to make transitions feel continuous */}
        <Hero />
        <SeamlessConnector height={140} />
        <ProductShowcase />
        <SeamlessConnector height={140} />
        <CombinedExperience />
        <SeamlessConnector height={120} />
        <SiteFooter />
      </div>
    </MotionConfig>
  );
}
