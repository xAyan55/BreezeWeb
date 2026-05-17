import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, CreditCard, FileText, AlertTriangle, Scale, HelpCircle, Printer, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import LightRays from '../components/LightRays';

export default function Terms() {
  const [activeSection, setActiveSection] = useState(0);
  const [isAcknowledged, setIsAcknowledged] = useState(() => {
    return localStorage.getItem('breezebytes_terms_agreed') === 'true';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service - Legal & Compliance | BreezeBytes Hosting";

    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('.terms-section');
      let current = 0;
      sectionElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 250) {
          current = index;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id, index) => {
    setActiveSection(index);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120; // Offset for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAcknowledge = () => {
    setIsAcknowledged(true);
    localStorage.setItem('breezebytes_terms_agreed', 'true');
  };

  const handleResetAcknowledge = () => {
    setIsAcknowledged(false);
    localStorage.removeItem('breezebytes_terms_agreed');
  };

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <FileText className="w-6 h-6" />,
      tldr: "Using our services means you agree to these rules and guidelines.",
      content: "By accessing and using BreezeBytes Hosting services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you may not access the Service. We reserve the right to update these terms at any time, with notice provided via email or dashboard announcement."
    },
    {
      id: "usage",
      title: "2. Service Usage & Restrictions",
      icon: <Server className="w-6 h-6" />,
      tldr: "No illegal activities, DDoS generation, malware hosting, or network abuse.",
      content: "Our hosting services are provided on an 'as is' and 'as available' basis. You agree not to use our infrastructure for any illegal, harmful, or disruptive activities. This includes, but is not limited to: initiating DDoS attacks, hosting malicious software (malware, botnets, phishing sites), IP spoofing, unauthorized cryptocurrency mining, or violating intellectual property rights. We actively monitor network flows and will terminate abusive instances immediately without notice or refund."
    },
    {
      id: "billing",
      title: "3. Payments, Billing & Refunds",
      icon: <CreditCard className="w-6 h-6" />,
      tldr: "48-hour money-back guarantee for first-time clients. Services auto-renew monthly.",
      content: "Subscription fees are billed in advance on a recurring monthly or annual basis. All services are set to auto-renew unless cancelled prior to the billing date via the client portal. We offer a strict 48-hour money-back guarantee for first-time customers allowing you to test our premium nodes risk-free. Refund requests outside of this window, or for accounts terminated due to Terms of Service violations, will not be granted under any circumstances."
    },
    {
      id: "responsibility",
      title: "4. Content & Data Responsibility",
      icon: <ShieldCheck className="w-6 h-6" />,
      tldr: "You own your data. Always maintain your own off-site backups.",
      content: "Users maintain full ownership and sole responsibility for all files, player data, databases, and content hosted on their servers. While BreezeBytes maintains redundant enterprise storage arrays and offers automated backup tools in the control panel, we strongly advise clients to maintain their own external backups. BreezeBytes is not liable for data loss resulting from user error, corrupted plugins, or misconfigured game software."
    },
    {
      id: "fairuse",
      title: "5. Resource Fair Use Policy",
      icon: <Scale className="w-6 h-6" />,
      tldr: "Resources are dedicated, but intentional node degradation is prohibited.",
      content: "Your allocated RAM, NVMe/SSD storage, and vCores are dedicated to your instance. However, sustained artificial stressing of the CPU (such as continuous benchmark looping) or intensive continuous I/O loops that intentionally degrade the hardware experience of neighboring instances on the same host node may result in temporary throttling, formal warnings, or instance suspension."
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      tldr: "We are not liable for indirect damages, player disputes, or revenue loss.",
      content: "In no event shall BreezeBytes Hosting, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages. This includes, without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your access to or inability to access the service, any conduct or content of any third party on the service, or any unauthorized access, use, or alteration of your transmissions."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-color1 relative overflow-hidden text-brand-color3">
      {/* Premium Background Effect */}
      <div className="absolute inset-0 z-0 h-[650px] pointer-events-none overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#A2A6FF"
          raysSpeed={0.8}
          lightSpread={0.8}
          rayLength={1.6}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.04}
          fadeDistance={0.8}
          saturation={1.3}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-color1/60 to-brand-color1" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-[#A2A6FF] border border-[#A2A6FF]/20 backdrop-blur-md shadow-lg shadow-[#A2A6FF]/5">
            <ShieldCheck className="w-4 h-4" />
            Legal & Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A2A6FF] to-[#DDA9FC]">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Please read our terms and conditions carefully. By using BreezeBytes infrastructure, you agree to comply with the rules outlined below.
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <button 
              onClick={handlePrint}
              className="px-6 py-3 rounded-xl font-semibold glass-card hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10 text-white shadow-lg"
            >
              <Printer className="w-4 h-4 text-[#A2A6FF]" /> Print Document
            </button>
            {isAcknowledged ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="px-6 py-3 rounded-xl font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-2 shadow-lg shadow-emerald-500/10 backdrop-blur-md select-none"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-bounce" /> Terms Acknowledged
              </motion.div>
            ) : (
              <button 
                onClick={handleAcknowledge}
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#A2A6FF] to-[#DDA9FC] text-brand-color1 hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-[#A2A6FF]/20 cursor-pointer"
              >
                <Download className="w-4 h-4" /> Acknowledge Terms
              </button>
            )}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start max-w-7xl mx-auto mt-12">
          
          {/* Sticky Table of Contents Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 lg:sticky lg:top-32 space-y-2 glass-card p-6 rounded-3xl border border-white/10 backdrop-blur-md shadow-xl"
          >
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-3 flex items-center justify-between">
              <span>Navigation</span>
              <span className="w-2 h-2 rounded-full bg-[#A2A6FF] animate-pulse" />
            </div>
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id, idx)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 text-left group ${
                  activeSection === idx 
                    ? 'bg-gradient-to-r from-[#A2A6FF]/20 to-[#DDA9FC]/20 text-white border border-[#A2A6FF]/40 shadow-lg shadow-[#A2A6FF]/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${activeSection === idx ? 'bg-[#A2A6FF]/30 text-[#A2A6FF]' : 'bg-white/5 text-gray-500 group-hover:text-gray-300'}`}>
                  {React.cloneElement(section.icon, { className: 'w-4 h-4' })}
                </div>
                <span className="flex-grow line-clamp-1">{section.title.replace(/^\d+\.\s*/, '')}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeSection === idx ? 'translate-x-1 text-[#A2A6FF]' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
            <div className="pt-6 mt-6 border-t border-white/5 px-3">
              <div className="text-xs text-gray-500 leading-relaxed font-mono">
                DOCUMENT VER: 2.4<br />
                LAST REVISED: MAY 2026
              </div>
            </div>
          </motion.div>

          {/* Legal Sections Stack */}
          <div className="lg:col-span-3 space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="terms-section glass-card p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden shadow-xl group hover:border-white/20 transition-all duration-500"
              >
                {/* Subtle section glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#A2A6FF]/10 to-[#DDA9FC]/10 rounded-full blur-3xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[#A2A6FF] shadow-inner text-brand-color2 group-hover:scale-105 transition-transform duration-500">
                    {section.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#DDA9FC] mb-1">SECTION 0{idx + 1}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{section.title}</h2>
                  </div>
                </div>

                {/* TL;DR Callout Box */}
                <div className="mb-6 p-5 rounded-2xl bg-[#A2A6FF]/5 border border-[#A2A6FF]/20 flex items-start gap-4 relative z-10 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#A2A6FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#A2A6FF] uppercase tracking-wider mb-1">Quick Summary (TL;DR)</h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{section.tldr}</p>
                  </div>
                </div>

                {/* Full Legal Content */}
                <p className="text-gray-300 leading-relaxed text-base md:text-lg relative z-10 font-normal">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Floating Toast Notification */}
        {isAcknowledged && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            className="fixed bottom-8 right-8 z-50 glass-card p-6 rounded-3xl border border-emerald-500/30 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 max-w-sm flex items-start gap-4"
          >
            <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shrink-0 mt-0.5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h4 className="text-base font-bold text-white mb-1">Agreement Confirmed</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Thank you for acknowledging the BreezeBytes Terms of Service. Your preference has been securely saved.</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.location.hash = '#/minecraft'}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#A2A6FF] to-[#DDA9FC] text-brand-color1 hover:opacity-90 transition-opacity shadow-lg cursor-pointer"
                >
                  Deploy Server
                </button>
                <button 
                  onClick={handleResetAcknowledge}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-gray-300 transition-colors border border-white/5 cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer Acknowledgment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center pt-20 pb-8 text-gray-500 text-sm font-medium border-t border-white/5 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>© 2026 BreezeBytes Hosting. All rights reserved.</div>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Acceptable Use</a>
            <a href="#" className="hover:text-white transition-colors">Service Level Agreement</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
