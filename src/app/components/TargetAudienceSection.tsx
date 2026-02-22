"use client";

import { useEffect, useRef } from "react";

const targetAudience = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "มือใหม่ที่ไม่มีพื้นฐาน",
    desc: "ไม่เคยเขียนโค้ดมาก่อน แต่อยากสร้างเว็บไซต์เป็นของตัวเอง",
    features: ["ไม่ต้องรู้ HTML/CSS", "ไม่ต้องรู้ JavaScript", "เรียน Process และ Prompt"]
  },
  {
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Freelancer และผู้ประกอบการ",
    desc: "อยากมีเว็บไซต์สำหรับหาเงินเสริม หรือขยายธุรกิจ",
    features: ["สร้าง Portfolio", "เว็บบริการ", "เว็บร้านค้า", "หาเงินจากเว็บ"]
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Marketing และ Content Creator",
    desc: "อยากมีเว็บไซต์ส่วนตัวสำหรับโปรโมทตัวเองและผลงาน",
    features: ["Personal Website", "Portfolio", "Blog", "Landing Page"]
  },
  {
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Developer ที่อยากเรียน AI",
    desc: "มีพื้นฐานโค้ดอยู่แล้ว อยากเรียนรู้วิธีใช้ AI ในการทำงาน",
    features: ["เพิ่มประสิทธิภาพ", "ลดเวลาทำงาน", "AI Tools", "Modern Workflow"]
  }
];

export default function TargetAudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="target-audience" ref={sectionRef} className="relative py-24 bg-[#f5f7ff] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Target Audience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">คอร์สเรียนนี้เหมาะกับใคร?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ไม่ว่าคุณจะเป็นใคร ถ้าอยากสร้างเว็บไซต์ด้วย AI เราพร้อมสอนคุณตั้งแต่ศูนย์จนสามารถทำเป็นได้จริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((audience, i) => (
            <div 
              key={i} 
              className={`group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 reveal reveal-delay-${(i % 4 + 1) * 100}`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {audience.desc}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {audience.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal reveal-delay-500">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-blue-700 font-semibold">
              ไม่ว่าคุณจะอยู่ในกลุ่มไหน ก็เรียนได้!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
