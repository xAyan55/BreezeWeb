import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, Terminal, ShieldAlert, ArrowRight } from 'lucide-react';
import ColorBends from '../components/ColorBends';
import GlareHover from '../components/GlareHover';

export default function Knowledgebase() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Knowledgebase & Support Center - BreezeBytes Hosting";
  }, []);

  const categories = [
    {
      title: 'Getting Started',
      description: 'Learn how to deploy and configure your first server on BreezeBytes.',
      icon: <BookOpen />,
      color: '#A2A6FF',
      path: '/knowledgebase/getting-started'
    },
    {
      title: 'Panel Configuration',
      description: 'Advanced guides on managing your instances via our custom control panel.',
      icon: <Terminal />,
      color: '#DDA9FC',
      path: '/knowledgebase/panel-configuration'
    },
    {
      title: 'Security & DDoS',
      description: 'Details on our 480Gbps mitigation network and custom filtering rules.',
      icon: <ShieldAlert />,
      color: '#ff5c7a',
      path: '/knowledgebase/security'
    },
    {
      title: 'Troubleshooting',
      description: 'Solutions to common issues, connection drops, and performance tuning.',
      icon: <HelpCircle />,
      color: '#00ffd1',
      path: '/knowledgebase/troubleshooting'
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative bg-brand-color1 overflow-hidden">
      {/* Premium ColorBends Background */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen">
        <ColorBends
          colors={["#A2A6FF", "#DDA9FC", "#5227FF"]}
          rotation={45}
          speed={0.15}
          scale={1.2}
          frequency={1.5}
          warpStrength={1.2}
          mouseInfluence={0.5}
          noise={0.15}
          parallax={0.3}
          iterations={2}
          intensity={1.2}
          bandWidth={5}
          transparent={true}
        />
        <div className="absolute inset-0 bg-brand-color1/70 backdrop-blur-[10px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-[#A2A6FF]">
            <span className="w-2 h-2 rounded-full bg-[#A2A6FF] animate-pulse" />
            Documentation Center
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Knowledgebase
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about setting up, managing, and optimizing your BreezeBytes services.
          </p>

          <div className="max-w-2xl mx-auto mt-12 relative">
            <input 
              type="text" 
              placeholder="Search for articles, guides, or keywords..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A2A6FF]/50 focus:border-[#A2A6FF]/50 transition-all backdrop-blur-md"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-[#A2A6FF] to-[#DDA9FC] text-black font-semibold px-6 rounded-xl hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} category={category} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={category.path} className="block w-full h-full">
        <GlareHover
        width="100%"
        height="100%"
        background="rgba(255, 255, 255, 0.03)"
        borderColor="rgba(255, 255, 255, 0.08)"
        borderRadius="1.5rem"
        glareColor={category.color}
        glareOpacity={0.15}
        className="backdrop-blur-md cursor-pointer group"
      >
        <div className="w-full h-full p-8 flex flex-col items-start transition-colors duration-300">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/10"
            style={{ backgroundColor: `${category.color}15`, color: category.color }}
          >
            {React.cloneElement(category.icon, { className: 'w-7 h-7' })}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, ${category.color}, #ffffff)` }}>
            {category.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-base text-left mb-6 flex-grow">
            {category.description}
          </p>
          <div className="flex items-center gap-2 mt-auto text-sm font-semibold transition-colors duration-300" style={{ color: category.color }}>
            Browse Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </GlareHover>
      </Link>
    </motion.div>
  );
}
