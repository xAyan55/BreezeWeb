import React, { useEffect } from 'react';
import { Check, Cpu, HardDrive, Clock, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import DarkVeil from '../components/DarkVeil';
import { GlowCard } from '../components/ui/spotlight-card';
import configData from '../config.json';

export default function Minecraft() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Minecraft Server Hosting - Premium & Dedicated Tiers | BreezeBytes";
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-brand-color1">
      {/* DarkVeil Background */}
      <div className="absolute inset-0 z-0 opacity-60" style={{ filter: 'sepia(1) hue-rotate(220deg) saturate(3) brightness(0.8)' }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.05}
          scanlineIntensity={0.2}
          scanlineFrequency={150}
          speed={0.3}
          warpAmount={0.8}
          resolutionScale={0.5}
        />
      </div>
      
      {/* Light gradient to ensure text readability without hiding the background completely */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-brand-color1/40 to-brand-color1" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-brand-color5">
            <span className="w-2 h-2 rounded-full bg-brand-color5 animate-pulse" />
            Minecraft Server Hosting
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your community. Upgrade or downgrade at any time instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          <PricingCard 
            name="Iron Plan"
            ram="4GB"
            cpu="100%"
            disk="10GB"
            uptime="24/7"
            price="₹50 / $1"
            image="./mc-plans/iron.webp"
          />
          <PricingCard 
            name="Copper Plan"
            ram="8GB"
            cpu="200%"
            disk="20GB"
            uptime="24/7"
            price="₹100 / $2"
            image="./mc-plans/copper.webp"
          />
          <PricingCard 
            name="Gold Plan"
            ram="12GB"
            cpu="300%"
            disk="30GB"
            uptime="24/7"
            price="₹150 / $3"
            image="./mc-plans/gold.webp"
          />
          <PricingCard 
            name="Emerald Plan"
            ram="16GB"
            cpu="400%"
            disk="40GB"
            uptime="24/7"
            price="₹200 / $4"
            isPopular={true}
            image="./mc-plans/emerald.webp"
          />
          <PricingCard 
            name="Diamond Plan"
            ram="20GB"
            cpu="500%"
            disk="50GB"
            uptime="24/7"
            price="₹250 / $5"
            image="./mc-plans/diamond.webp"
          />
          <PricingCard 
            name="Netherite Plan"
            ram="24GB"
            cpu="600%"
            disk="60GB"
            uptime="24/7"
            price="₹300 / $6"
            image="./mc-plans/netherite.webp"
          />
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, ram, cpu, disk, uptime, price, image, isPopular = false }) {
  const handleDeploy = () => {
    let redirectUrl = "https://billing.breezebytes.com/checkout";
    if (configData && configData.minecraft && configData.minecraft[name]) {
      redirectUrl = configData.minecraft[name];
    }
    window.location.href = redirectUrl;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`h-full ${isPopular ? 'transform md:-translate-y-4' : ''}`}
    >
      <GlowCard 
        customSize={true} 
        glowColor="brand"
        className={`p-8 h-full flex flex-col relative z-10 ${isPopular ? 'shadow-2xl shadow-brand-color2/20 border border-brand-color2/40' : 'border border-white/5'}`}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-color2 to-brand-color5 text-brand-color3 text-xs font-bold px-4 py-1.5 rounded-full z-20 shadow-[0_0_15px_rgba(162,166,255,0.5)]">
            MOST POPULAR
          </div>
        )}

        {/* Plan Image & Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-28 h-28 rounded-3xl bg-white/[0.03] border border-white/10 p-3.5 mb-6 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500"
          >
            <img src={image} alt={name} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(162,166,255,0.3)]" loading="lazy" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{name}</h3>
          <div className="text-brand-color5 text-3xl font-extrabold tracking-tight mt-2">
            {price}<span className="text-sm text-gray-500 font-normal">/mo</span>
          </div>
        </div>
        
        {/* Specs List */}
        <div className="space-y-4 mb-8 flex-grow border-t border-white/5 pt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-gray-400">
              <Cpu className="w-4 h-4 text-brand-color2" /> RAM
            </span>
            <span className="font-bold text-white">{ram}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-gray-400">
              <Gauge className="w-4 h-4 text-brand-color2" /> CPU
            </span>
            <span className="font-bold text-white">{cpu}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-gray-400">
              <HardDrive className="w-4 h-4 text-brand-color2" /> Disk
            </span>
            <span className="font-bold text-white">{disk}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4 text-brand-color2" /> Uptime
            </span>
            <span className="font-bold text-white">{uptime}</span>
          </div>
        </div>
        
        <button 
          onClick={handleDeploy}
          className={`w-full py-3.5 mt-auto rounded-xl font-bold transition-all relative z-20 shadow-lg cursor-pointer ${
            isPopular 
              ? 'bg-gradient-to-r from-brand-color2 to-brand-color5 text-brand-color3 hover:opacity-90 shadow-brand-color2/20' 
              : 'bg-white/10 hover:bg-white/20 text-white hover:shadow-white/10'
          }`}
        >
          Deploy Server
        </button>
      </GlowCard>
    </motion.div>
  );
}
