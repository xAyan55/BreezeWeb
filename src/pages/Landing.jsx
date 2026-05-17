import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Clock, ChevronDown } from 'lucide-react';
import Aurora from '../components/Aurora';
import BlurText from '../components/BlurText';
import GlareHover from '../components/GlareHover';
import { Link } from 'react-router-dom';

export default function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BreezeBytes - Premium High-Performance Game & VPS Hosting";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-0 opacity-80">
          <Aurora colorStops={["#000000", "#A2A6FF", "#DDA9FC"]} blend={0.6} amplitude={1.2} speed={0.8} />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-brand-color1/50 to-brand-color1" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-brand-color5">
              <span className="w-2 h-2 rounded-full bg-brand-color5 animate-pulse" />
              Next-Generation AMD Ryzen™ 9 Nodes
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 flex flex-wrap justify-center gap-x-4">
              <BlurText text="Zero Lag." delay={100} className="inline-block" />
              <BlurText text="Pure Performance." delay={100} className="text-brand-color2 inline-block" />
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the ultimate Minecraft hosting with NVMe SSDs, unmatched DDoS protection, and instant setup. Built for communities that demand perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/minecraft" className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-brand-color2 to-brand-color5 text-brand-color3 hover:opacity-90 transition-opacity w-full sm:w-auto">
                View Minecraft Plans
              </Link>
              <a href="#features" className="px-8 py-4 rounded-xl font-semibold glass-card hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                Explore Features <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10 bg-brand-color1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BreezeBytes?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We've engineered our infrastructure from the ground up to provide the fastest, most reliable hosting experience possible.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Cpu />}
              title="Extreme Performance"
              description="Powered by the latest AMD Ryzen processors and NVMe SSDs to ensure your server never skips a tick."
            />
            <FeatureCard 
              icon={<Shield />}
              title="DDoS Protection"
              description="Enterprise-grade 480Gbps DDoS mitigation keeps your server online through even the most aggressive attacks."
            />
            <FeatureCard 
              icon={<Clock />}
              title="Instant Setup"
              description="Your server is deployed and ready to play within 60 seconds of completing your payment."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <GlareHover
      width="100%"
      height="100%"
      background="rgba(255, 255, 255, 0.05)"
      borderColor="rgba(255, 255, 255, 0.1)"
      borderRadius="1rem"
      glareColor="#A2A6FF"
      glareOpacity={0.3}
      className="backdrop-blur-md shadow-xl"
    >
      <div className="w-full h-full p-8 flex flex-col items-start hover:bg-white/5 transition-colors duration-300">
        <div className="w-12 h-12 rounded-xl bg-brand-color2/20 text-brand-color2 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm text-left">
          {description}
        </p>
      </div>
    </GlareHover>
  );
}
