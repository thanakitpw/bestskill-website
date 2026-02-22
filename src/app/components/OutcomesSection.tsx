"use client";

import { useEffect, useRef } from "react";

export default function OutcomesSection() {
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
  const outcomes = [
    { 
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ), 
      text: "มีเว็บจริงบน Internet อย่างน้อย 3 โปรเจกต์" 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0l2 2m-2-2v14a2 2 0 002 2H5a2 2 0 01-2-2V6m0 0l2-2m9 0h-2m-2 0v14a2 2 0 002 2h8a2 2 0 002-2V6m-2 0h-2" />
        </svg>
      ), 
      text: "Deploy จริงบน Vercel พร้อม domain" 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      text: "รับงาน Freelance ทำเว็บได้ราคาหลักหมื่นถึงหลักแสน"
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ), 
      text: "เนื้อหาอัปเดตใหม่ตลอดชีพ ไม่มีค่าใช้จ่ายเพิ่ม" 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ), 
      text: "ฟรี Prompt Template 15 แบบ สร้างเว็บไซต์ พร้อม copy-paste" 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9 9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m9 18a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 18a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9" />
        </svg>
      ), 
      text: "สร้างเว็บได้ตั้งแต่ไอเดียจนออนไลน์ใน 1 วัน"
    },
  ];

  return (
    <section id="outcomes" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Outcomes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">ผลลัพธ์ที่ได้เมื่อจบคอร์ส</h2>
          <p className="text-gray-600 text-lg">สิ่งที่คุณจะทำได้จริงหลังเรียนจบ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((item, i) => (
            <div key={i} className={`rounded-2xl border border-gray-200 bg-white p-6 flex items-start gap-4 hover:border-blue-300 hover:shadow-md transition-all reveal reveal-delay-${(i % 3 + 1) * 100} ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
