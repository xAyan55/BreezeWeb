import React, { useEffect } from 'react';
import { Check, Server, Cpu, Database, HardDrive, Clock, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import LineWaves from '../components/LineWaves';
import { GlowCard } from '../components/ui/spotlight-card';
import configData from '../config.json';

export default function VPS() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "High-Performance KVM VPS Hosting - NVMe SSDs & DDoS Protection | BreezeBytes";
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-brand-color1">
      {/* LineWaves Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1.0}
          rotation={-45}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={0.4}
          color1="#A2A6FF"
          color2="#DDA9FC"
          color3="#D5D4FE"
          enableMouseInteraction={true}
          mouseInfluence={2.0}
        />
      </div>
      
      {/* Light gradient to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-color1/20 via-brand-color1/60 to-brand-color1 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-brand-color2">
            <span className="w-2 h-2 rounded-full bg-brand-color2 animate-pulse" />
            High-Performance VPS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Raw Power. Total Control.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade KVM virtual private servers with guaranteed resources, SSD storage, and 480Gbps DDoS protection.
          </p>
        </motion.div>

        {/* Features Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/5">
            <div className="p-3 bg-brand-color2/20 rounded-lg text-brand-color2"><Cpu className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-gray-200">Intel® Xeon® Scalable</h4>
              <p className="text-sm text-gray-400">High-performance vCores</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/5">
            <div className="p-3 bg-brand-color5/20 rounded-lg text-brand-color5"><Database className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-gray-200">Enterprise SSDs</h4>
              <p className="text-sm text-gray-400">Lightning fast I/O</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/5">
            <div className="p-3 bg-[#A2A6FF]/20 rounded-lg text-[#A2A6FF]"><Server className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-gray-200">Full Root Access</h4>
              <p className="text-sm text-gray-400">Complete server control</p>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          <VPSCard 
            name="Leafy VPS Plan"
            ram="4GB (DDR4)"
            cpu="1 vCore (Intel Xeon)"
            disk="10GB (SSD)"
            uptime="24/7"
            price="₹60 / $1.50"
            image="./vps-plans/leafy.webp"
          />
          <VPSCard 
            name="Cloudy VPS Plan"
            ram="8GB (DDR4)"
            cpu="2 vCores (Intel Xeon)"
            disk="20GB (SSD)"
            uptime="24/7"
            price="₹120 / $3"
            image="./vps-plans/cloudy.webp"
          />
          <VPSCard 
            name="Sunny VPS Plan"
            ram="12GB (DDR4)"
            cpu="3 vCores (Intel Xeon)"
            disk="30GB (SSD)"
            uptime="24/7"
            price="₹180 / $4.50"
            image="./vps-plans/sunny.webp"
          />
          <VPSCard 
            name="Frost VPS Plan"
            ram="16GB (DDR4)"
            cpu="4 vCores (Intel Xeon)"
            disk="40GB (SSD)"
            uptime="24/7"
            price="₹240 / $6"
            isPopular={true}
            image="./vps-plans/frost.webp"
          />
          <VPSCard 
            name="Sakura VPS Plan"
            ram="20GB (DDR4)"
            cpu="5 vCores (Intel Xeon)"
            disk="50GB (SSD)"
            uptime="24/7"
            price="₹300 / $7.50"
            image="./vps-plans/sakura.webp"
          />
          <VPSCard 
            name="Firey VPS Plan"
            ram="24GB (DDR4)"
            cpu="6 vCores (Intel Xeon)"
            disk="60GB (SSD)"
            uptime="24/7"
            price="₹360 / $9"
            image="./vps-plans/firey.webp"
          />
        </div>
      </div>
    </div>
  );
}

function VPSCard({ name, ram, cpu, disk, uptime, price, image, isPopular = false }) {
  const handleDeploy = () => {
    let redirectUrl = "https://billing.breezebytes.com/checkout";
    if (configData && configData.vps && configData.vps[name]) {
      redirectUrl = configData.vps[name];
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
            RECOMMENDED
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
          Configure Server
        </button>
      </GlowCard>
    </motion.div>
  );
}
