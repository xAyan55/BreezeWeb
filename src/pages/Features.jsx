import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Shield, Clock, HardDrive, Zap, Globe, Check, LayoutDashboard, Package, Puzzle, Users, Settings, RefreshCw } from 'lucide-react';
import Grainient from '../components/Grainient';
import GlareHover from '../components/GlareHover';
import Radar from '../components/Radar';
import LaserFlow from '../components/LaserFlow';

export default function Features() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Enterprise Infrastructure & Game Panel Features | BreezeBytes";
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen relative bg-brand-color1">
      {/* Grainient Background */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Grainient
          color1="#000000"
          color2="#A2A6FF"
          color3="#DDA9FC"
          timeSpeed={0.15}
          colorBalance={0.1}
          warpStrength={1.2}
          warpFrequency={3.0}
          warpSpeed={1.0}
          blendSoftness={0.1}
          grainAmount={0.08}
          grainScale={1.5}
          grainAnimated={true}
          contrast={1.2}
          zoom={1.2}
        />
        <div className="absolute inset-0 bg-brand-color1/80 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-brand-color2">
            <span className="w-2 h-2 rounded-full bg-brand-color2 animate-pulse" />
            Enterprise Infrastructure
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
            Built for Scale. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A2A6FF] to-[#DDA9FC]">
              Engineered for Speed.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover the powerful features that make BreezeBytes the ultimate choice for your hosting needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Cpu />}
            title="Next-Gen Processors"
            description="We utilize the latest AMD Ryzen™ 9 7950X processors, providing unmatched single-core performance essential for seamless gameplay."
          />
          <FeatureCard 
            icon={<HardDrive />}
            title="NVMe SSD Storage"
            description="Experience lightning-fast chunk loading and saving with our enterprise-grade PCIe Gen4 NVMe storage arrays."
          />
          <FeatureCard 
            icon={<Shield />}
            title="480Gbps DDoS Mitigation"
            description="Stay online always. Our advanced network filters malicious traffic instantly before it ever reaches your server."
          />
          <FeatureCard 
            icon={<Zap />}
            title="Instant Provisioning"
            description="No waiting required. Your server is automatically deployed and ready to go within 60 seconds of checkout."
          />
          <FeatureCard 
            icon={<Globe />}
            title="Global Network"
            description="Low latency matters. We use premium routing to ensure the best possible ping for players around the world."
          />
          <FeatureCard 
            icon={<Clock />}
            title="99.99% Uptime Guarantee"
            description="Our redundant infrastructure ensures your server stays online, backed by our comprehensive Service Level Agreement."
          />
        </div>

        {/* Dedicated DDoS Protection Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/5 bg-black/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-[#A2A6FF] border border-[#A2A6FF]/20">
                <Shield className="w-4 h-4" />
                Enterprise Mitigation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                480Gbps DDoS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A2A6FF] to-[#DDA9FC]">Protection Included.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our advanced proprietary network automatically detects and filters malicious traffic before it ever reaches your server. Keep your community online and lag-free, even during the most aggressive Layer 4 and Layer 7 attacks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-brand-color2/20 flex items-center justify-center text-brand-color2"><Check className="w-4 h-4" /></div>
                  Always-on passive mitigation
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-brand-color2/20 flex items-center justify-center text-brand-color2"><Check className="w-4 h-4" /></div>
                  Custom Layer 7 filters for games
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-brand-color2/20 flex items-center justify-center text-brand-color2"><Check className="w-4 h-4" /></div>
                  Zero-latency impact
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full relative min-h-[400px] flex justify-center items-center">
              <div className="absolute inset-0 z-0">
                <Radar
                  speed={1.2}
                  scale={0.8}
                  ringCount={8}
                  spokeCount={8}
                  ringThickness={0.03}
                  spokeThickness={0.01}
                  sweepSpeed={1.5}
                  sweepWidth={2.5}
                  sweepLobes={1}
                  color="#DDA9FC"
                  backgroundColor="#000000"
                  falloff={1.5}
                  brightness={1.5}
                  enableMouseInteraction={true}
                  mouseInfluence={0.2}
                />
              </div>
              <div className="relative z-10 bg-black/40 backdrop-blur-sm border border-brand-color2/30 p-6 rounded-2xl shadow-[0_0_50px_rgba(162,166,255,0.15)] flex flex-col items-center">
                <Shield className="w-16 h-16 text-brand-color2 mb-4 drop-shadow-[0_0_15px_rgba(162,166,255,0.5)]" />
                <div className="text-xl font-bold text-white tracking-widest uppercase">Network Secure</div>
                <div className="text-brand-color2 animate-pulse mt-2 text-sm font-mono tracking-widest">MONITORING TRAFFIC</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dedicated Panel Preview Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-[#DDA9FC] border border-[#DDA9FC]/20">
              <Zap className="w-4 h-4" />
              Ultimate Control
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Powerful Custom Panel
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Manage all your services from a single, beautifully designed dashboard. Take full control of your infrastructure with one-click installations, real-time metrics, and advanced management tools.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto group mt-32">
            {/* The Laser Flow striking the top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[120%] h-[700px] pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-90">
              <LaserFlow
                horizontalBeamOffset={0}
                verticalBeamOffset={0}
                color="#DDA9FC"
                fogIntensity={0.6}
              />
            </div>

            {/* Ambient Background Glow for the image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#A2A6FF]/20 to-[#DDA9FC]/20 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 rounded-3xl pointer-events-none z-0" />
            
            <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0B] border-t-2 border-[#DDA9FC]/60 border-l border-r border-b border-white/10 shadow-[0_0_50px_rgba(221,169,252,0.2)] z-10">
              {/* Fake Browser Top Bar for Aesthetic */}
              <div className="h-10 bg-[#0A0A0B] border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-md relative z-10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 text-xs font-medium text-gray-500 tracking-wider">panel.breezebytes.com</div>
              </div>
              
              <PanelPreviewImage />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const panelFeatures = [
  {
    id: 'dashboard',
    title: 'Comprehensive Dashboard & Console',
    description: 'Monitor real-time server metrics, resource utilization, and interact directly with your live server console with zero latency.',
    image: './panel.jpg',
    icon: LayoutDashboard,
    badge: 'Real-Time'
  },
  {
    id: 'mods',
    title: 'One-Click Mod Manager',
    description: 'Browse, install, and update thousands of popular mods and modpacks instantly without touching a single file via FTP.',
    image: './panel-mod-manager.jpg',
    icon: Package,
    badge: 'Automated'
  },
  {
    id: 'plugins',
    title: 'Advanced Plugin Installer',
    description: 'Seamlessly search and deploy plugins from Spigot, Paper, and Bukkit directly into your server with automatic dependency resolution.',
    image: './panel-plugin-manager.jpg',
    icon: Puzzle,
    badge: 'Seamless'
  },
  {
    id: 'players',
    title: 'Intelligent Player Management',
    description: 'Track active players, manage whitelists, administer kicks/bans, and view detailed player analytics in real time.',
    image: './panel-player-manager.jpg',
    icon: Users,
    badge: 'Control'
  },
  {
    id: 'properties',
    title: 'Intuitive Properties Editor',
    description: 'Configure server settings, tweak gameplay rules, and adjust advanced environment properties through a clean, visual interface.',
    image: './panel-properties-manager.jpg',
    icon: Settings,
    badge: 'Easy Config'
  },
  {
    id: 'version',
    title: 'Instant Version Changer',
    description: 'Switch between different server software, snapshots, and game versions effortlessly with automated backup protection.',
    image: './panel-version-changer.jpg',
    icon: RefreshCw,
    badge: 'Flexible'
  }
];

function PanelPreviewImage() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % panelFeatures.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const currentFeature = panelFeatures[currentIndex];
  const IconComponent = currentFeature.icon;

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0A0A0B] flex flex-col"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (containerRef.current) {
          containerRef.current.style.setProperty('--mx', `${x}px`);
          containerRef.current.style.setProperty('--my', `${y}px`);
        }
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (containerRef.current) {
          containerRef.current.style.setProperty('--mx', '-9999px');
          containerRef.current.style.setProperty('--my', '-9999px');
        }
      }}
    >
      {/* Image Preview Container */}
      <div className="relative w-full min-h-[300px] sm:min-h-[450px] md:min-h-[550px] bg-[#0A0A0B] overflow-hidden">
        {panelFeatures.map((item, index) => (
          <div key={`img-group-${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-auto block object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-70 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
              }`}
              loading="lazy"
            />
            <img
              src={item.image}
              alt={`${item.title} reveal`}
              className={`absolute top-0 left-0 w-full h-full object-cover pointer-events-none mix-blend-screen transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-30' : 'opacity-0 z-0'
              }`}
              style={{
                WebkitMaskImage: 'radial-gradient(circle at var(--mx, -9999px) var(--my, -9999px), rgba(255,255,255,1) 0px, rgba(255,255,255,0.9) 80px, rgba(255,255,255,0.5) 160px, rgba(255,255,255,0) 240px)',
                maskImage: 'radial-gradient(circle at var(--mx, -9999px) var(--my, -9999px), rgba(255,255,255,1) 0px, rgba(255,255,255,0.9) 80px, rgba(255,255,255,0.5) 160px, rgba(255,255,255,0) 240px)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat'
              }}
            />
          </div>
        ))}
      </div>

      {/* Feature Showcase & Interactive Footer */}
      <div className="p-6 md:p-8 bg-[#0D0D11]/95 backdrop-blur-md border-t border-white/10 flex flex-col gap-6 relative z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFeature.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-brand-color2/20 to-brand-color5/20 text-brand-color2 border border-brand-color2/20 shadow-[inset_0_0_20px_rgba(162,166,255,0.2)] flex items-center justify-center shrink-0">
                <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-color2/20 text-brand-color2 border border-brand-color2/30">
                    {currentFeature.badge}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">FEATURE 0{currentIndex + 1}/06</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {currentFeature.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl md:text-right">
              {currentFeature.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Tabs / Progress indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-white/5">
          {panelFeatures.map((item, idx) => {
            const Icon = item.icon;
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative p-3.5 rounded-xl flex flex-col items-start gap-2.5 transition-all duration-300 text-left border overflow-hidden ${
                  isActive 
                    ? 'bg-white/10 border-brand-color2/50 shadow-[0_0_25px_rgba(162,166,255,0.2)]' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-brand-color2' : 'text-gray-500 group-hover:text-gray-300'}`} />
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-color2 animate-ping" />
                  )}
                </div>
                <span className={`text-xs font-bold tracking-wide line-clamp-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                  {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                </span>

                {/* Progress bar animation for active tab */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-0.5">
                  {isActive ? (
                    <motion.div
                      key={`progress-${currentIndex}-${isPaused}`}
                      initial={{ width: isPaused ? '100%' : '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: isPaused ? 0 : 2, ease: 'linear' }}
                      className="h-full bg-gradient-to-r from-brand-color2 to-brand-color5"
                    />
                  ) : (
                    <div className="w-0 h-full bg-brand-color2" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <GlareHover
        width="100%"
        height="100%"
        background="rgba(255, 255, 255, 0.03)"
        borderColor="rgba(255, 255, 255, 0.08)"
        borderRadius="1.5rem"
        glareColor="#A2A6FF"
        glareOpacity={0.2}
        className="backdrop-blur-md"
      >
        <div className="w-full h-full p-8 flex flex-col items-start transition-colors duration-300">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-color2/20 to-brand-color5/20 text-brand-color2 flex items-center justify-center mb-6 shadow-[inset_0_0_20px_rgba(162,166,255,0.1)] border border-brand-color2/10">
            {React.cloneElement(icon, { className: 'w-7 h-7' })}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-base text-left">
            {description}
          </p>
        </div>
      </GlareHover>
    </motion.div>
  );
}
