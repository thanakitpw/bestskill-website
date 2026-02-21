"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['curriculum', 'outcomes', 'benefits', 'faq', 'pricing'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm animate-fadeInUp">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
              </svg>
            </div>
            <span className="text-gray-900 font-bold text-lg">Best Skill</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "curriculum", label: "หลักสูตร" },
              { href: "outcomes", label: "ผลลัพธ์" },
              { href: "benefits", label: "สิทธิ์พิเศษ" },
              { href: "faq", label: "FAQ" },
              { href: "pricing", label: "จองที่เรียน" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors font-medium ${
                  activeSection === link.href
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => scrollToSection("pricing")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-all"
          >
            จองที่เรียนเลย
          </button>
        </div>
      </div>
    </nav>
  );
}
