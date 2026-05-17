import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Terminal, ShieldAlert, HelpCircle } from 'lucide-react';
import Particles from '../components/Particles';

const articleData = {
  'getting-started': {
    title: 'Getting Started',
    description: 'Learn how to deploy and configure your first server on BreezeBytes.',
    icon: <BookOpen className="w-8 h-8" />,
    color: '#A2A6FF',
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Deploying Your First Server</h3>
        <p className="text-gray-300 leading-relaxed">
          Welcome to BreezeBytes! Deploying your first server is incredibly straightforward. Once you've purchased a plan, navigate to your client area. You will see your new service listed under the "Active Services" tab. Click on it to view your credentials for the control panel.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="font-semibold text-white mb-2">Quick Steps:</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-400">
            <li>Log into the Control Panel using the provided credentials.</li>
            <li>Select your server instance from the dashboard.</li>
            <li>Navigate to the "Startup" tab to configure your server version (e.g., Paper, Purpur).</li>
            <li>Click "Start" on the console page.</li>
          </ol>
        </div>
      </div>
    )
  },
  'panel-configuration': {
    title: 'Panel Configuration',
    description: 'Advanced guides on managing your instances via our custom control panel.',
    icon: <Terminal className="w-8 h-8" />,
    color: '#DDA9FC',
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Advanced Panel Features</h3>
        <p className="text-gray-300 leading-relaxed">
          Our custom panel offers granular control over your instance. You can manage databases, schedule automated backups, and assign sub-users with specific permissions.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="font-semibold text-white mb-2">Creating Sub-Users:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Go to the "Users" tab in your server dashboard.</li>
            <li>Click "Create New" and enter the email address of the user.</li>
            <li>Select the specific permissions (e.g., Start/Stop, Access Console, Manage Files).</li>
            <li>Click Save. They will receive an email invitation to access the panel.</li>
          </ul>
        </div>
      </div>
    )
  },
  'security': {
    title: 'Security & DDoS',
    description: 'Details on our 480Gbps mitigation network and custom filtering rules.',
    icon: <ShieldAlert className="w-8 h-8" />,
    color: '#ff5c7a',
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Understanding Our Mitigation</h3>
        <p className="text-gray-300 leading-relaxed">
          We utilize a robust 480Gbps DDoS mitigation network that sits inline with all traffic entering our data centers. This means mitigation is always-on and passive, inspecting packets in real-time without introducing latency.
        </p>
        <div className="bg-[#ff5c7a]/10 border border-[#ff5c7a]/20 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="font-semibold text-[#ff5c7a] mb-2">Custom Layer 7 Filters</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            For Minecraft servers specifically, we deploy advanced Layer 7 filters that drop malicious query floods, login bypass attempts, and bad packet exploitation before they ever hit your game server process.
          </p>
        </div>
      </div>
    )
  },
  'troubleshooting': {
    title: 'Troubleshooting',
    description: 'Solutions to common issues, connection drops, and performance tuning.',
    icon: <HelpCircle className="w-8 h-8" />,
    color: '#00ffd1',
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Resolving "Server Lag"</h3>
        <p className="text-gray-300 leading-relaxed">
          If your server is experiencing TPS drops, it's rarely a hardware issue on our end due to the Ryzen 9 processors. Most lag is caused by unoptimized plugins, heavy world generation, or excessive entity counts.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h4 className="font-semibold text-white mb-2">Performance Tuning Checklist:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Pre-generate your world using plugins like Chunky.</li>
            <li>Reduce view distance in server.properties (recommend 6-8).</li>
            <li>Switch from Spigot to Paper or Purpur for better multi-threading.</li>
            <li>Run a timings report (/timings paste) to identify culprit plugins.</li>
          </ul>
        </div>
      </div>
    )
  }
};

export default function KnowledgebaseArticle() {
  const { categoryId } = useParams();
  const article = useMemo(() => articleData[categoryId], [categoryId]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} - Knowledgebase | BreezeBytes Hosting`;
    } else {
      document.title = `Article Not Found - Knowledgebase | BreezeBytes Hosting`;
    }
  }, [categoryId, article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-color1 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/knowledgebase" className="text-[#A2A6FF] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Return to Knowledgebase
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen relative bg-brand-color1 overflow-hidden">
      {/* Particles Background specific to this page */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
        <Particles
          particleColors={[article.color, '#ffffff', article.color]}
          particleCount={250}
          particleSpread={15}
          speed={0.15}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          disableRotation={false}
        />
        <div className="absolute inset-0 bg-brand-color1/80 backdrop-blur-md" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/knowledgebase" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Categories
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle glow accent based on article color */}
          <div 
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ backgroundColor: article.color }}
          />

          <div className="flex items-center gap-6 mb-8">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-white/20"
              style={{ backgroundColor: `${article.color}20`, color: article.color }}
            >
              {article.icon}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                {article.title}
              </h1>
              <p className="text-gray-400">
                {article.description}
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/10 mb-8" />

          {/* Dynamic Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {article.content}
          </div>

        </motion.div>
      </div>
    </div>
  );
}
