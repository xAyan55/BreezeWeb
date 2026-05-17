import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CardNav from './components/CardNav';
import ScrollFloat from './components/ScrollFloat';

const Landing = lazy(() => import('./pages/Landing'));
const Minecraft = lazy(() => import('./pages/Minecraft'));
const VPS = lazy(() => import('./pages/VPS'));
const Features = lazy(() => import('./pages/Features'));
const Terms = lazy(() => import('./pages/Terms'));
const Knowledgebase = lazy(() => import('./pages/Knowledgebase'));
const KnowledgebaseArticle = lazy(() => import('./pages/KnowledgebaseArticle'));

function PageLoader() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-[#A2A6FF]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#A2A6FF] rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 border-4 border-[#DDA9FC]/50 rounded-full border-b-transparent animate-[spin_1.5s_linear_infinite_reverse]"></div>
      </div>
      <div className="text-[#A2A6FF] font-mono text-sm tracking-widest animate-pulse">CONNECTING...</div>
    </div>
  );
}

const navItems = [
  {
    label: "Servers",
    bgColor: "rgba(255,255,255,0.05)",
    textColor: "#A2A6FF",
    links: [
      { label: "Minecraft Hosting", href: "/minecraft" },
      { label: "VPS Hosting", href: "/vps" }
    ]
  },
  {
    label: "Support", 
    bgColor: "rgba(255,255,255,0.05)",
    textColor: "#DDA9FC",
    links: [
      { label: "Knowledgebase", href: "/knowledgebase" },
      { label: "Getting Started", href: "/knowledgebase/getting-started" }
    ]
  },
  {
    label: "Company",
    bgColor: "rgba(255,255,255,0.05)", 
    textColor: "#D5D4FE",
    links: [
      { label: "Features", href: "/features" },
      { label: "Terms of Service", href: "/terms" }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-brand-color1 text-brand-color3 relative flex flex-col">
      
      {/* Navigation */}
      <CardNav
        logo={
          <Link to="/" className="flex items-center gap-2">
            <img src="./logo.png" alt="BreezeBytes Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">BreezeBytes</span>
          </Link>
        }
        items={navItems}
        baseColor="rgba(0, 0, 0, 0.6)"
        menuColor="#fff"
        buttonBgColor="#A2A6FF"
        buttonTextColor="#000"
        className="!fixed top-4"
      />

      {/* Main Content Area (Routing) */}
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/minecraft" element={<Minecraft />} />
            <Route path="/vps" element={<VPS />} />
            <Route path="/features" element={<Features />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/knowledgebase" element={<Knowledgebase />} />
            <Route path="/knowledgebase/:categoryId" element={<KnowledgebaseArticle />} />
          </Routes>
        </Suspense>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 pt-16 pb-4 mt-12 bg-brand-color1 relative overflow-hidden flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4 text-brand-color3 font-bold text-2xl hover:opacity-80 transition-opacity">
                <img src="./logo.png" alt="BreezeBytes Logo" className="w-8 h-8 object-contain" loading="lazy" decoding="async" width="32" height="32" /> BreezeBytes
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                Premium game server hosting built for performance, reliability, and scale. Experience zero lag and pure performance with our next-generation infrastructure.
              </p>
              <div className="flex gap-4">
                <a href="https://x.com/breezebytes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-color2 hover:bg-brand-color2 hover:text-brand-color1 transition-all shadow-lg hover:shadow-brand-color2/20">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="https://discord.gg/breezebytes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-color2 hover:bg-brand-color2 hover:text-brand-color1 transition-all shadow-lg hover:shadow-brand-color2/20">
                  <span className="sr-only">Discord</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.994:..." /></svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-brand-color3 font-bold mb-6 uppercase tracking-wider text-xs">Services</h3>
              <ul className="space-y-4">
                <li><Link to="/minecraft" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Minecraft Hosting</Link></li>
                <li><Link to="/vps" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">VPS Hosting</Link></li>
                <li><Link to="/features" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Enterprise Features</Link></li>
                <li><Link to="/knowledgebase/security" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">DDoS Mitigation</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="text-brand-color3 font-bold mb-6 uppercase tracking-wider text-xs">Support</h3>
              <ul className="space-y-4">
                <li><Link to="/knowledgebase" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Knowledgebase</Link></li>
                <li><Link to="/knowledgebase/getting-started" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Getting Started</Link></li>
                <li><Link to="/knowledgebase/panel-configuration" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Panel Guides</Link></li>
                <li><Link to="/knowledgebase/troubleshooting" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Troubleshooting</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="text-brand-color3 font-bold mb-6 uppercase tracking-wider text-xs">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Home</Link></li>
                <li><Link to="/features" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Infrastructure</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Terms of Service</Link></li>
                <li><Link to="/knowledgebase/security" className="text-gray-400 hover:text-brand-color2 transition-colors text-sm font-medium">Security Policy</Link></li>
              </ul>
            </div>
            
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 BreezeBytes Hosting. All rights reserved.</p>
            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-color2 animate-pulse shadow-[0_0_8px_#A2A6FF]" /> 
                <span className="font-medium text-gray-300">All Systems Operational</span>
              </span>
            </div>
          </div>
        </div>
        
        <div className="w-full mt-4 select-none pointer-events-none flex justify-center">
          <ScrollFloat
            animationDuration={1}
            ease='back.out(2)'
            scrollStart='top bottom'
            scrollEnd='bottom bottom'
            stagger={0.03}
            containerClassName="text-center w-full"
            textClassName="text-brand-color2/10"
          >
            BreezeBytes
          </ScrollFloat>
        </div>
      </footer>
    </div>
  );
}
