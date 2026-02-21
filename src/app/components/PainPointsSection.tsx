"use client";

import { useState, useEffect, useRef } from "react";

export default function PainPointsSection() {
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
  const pains = [
    {
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "ดู YouTube แล้วทำตามไม่ได้",
      desc: "เพราะสอนแบบไม่เรียงขั้นตอน พอเปลี่ยนโจทย์นิดเดียวก็ทำไม่ได้แล้ว",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
        </svg>
      ),
      title: "ไม่รู้จะ Prompt AI ยังไง",
      desc: "สั่ง AI ไปแล้วได้ผลลัพธ์ไม่ตรงที่ต้องการ แก้ไปแก้มาก็ยิ่งพัง",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "กลัวว่าไม่มีพื้นฐานโค้ด",
      desc: "คิดว่าการสร้างเว็บต้องเขียนโค้ดเป็นก่อน เลยไม่กล้าเริ่ม",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "ทำเสร็จแล้วไม่รู้จะ Deploy ยังไง",
      desc: "สร้างเว็บได้แล้ว แต่ไม่รู้จะเอาขึ้น Internet ยังไง หรือจะหาเงินจากมันได้ยังไง",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gray-50 overflow-hidden bg-grid-pattern-light">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Pain Points</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">คุณเคยเจอแบบนี้ไหม?</h2>
          <p className="text-gray-600 text-lg">ปัญหาที่คนส่วนใหญ่เจอเวลาพยายามสร้างเว็บด้วย AI</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pains.map((p, i) => (
            <div key={i} className={`flex gap-4 items-start rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all reveal reveal-delay-${(i % 2 + 1) * 100}`}>
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center">{p.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center reveal reveal-delay-300">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-lg mb-1">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            คอร์สนี้สร้างมาเพื่อแก้ปัญหาเหล่านี้โดยเฉพาะ
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            สอนตั้งแต่เริ่มจาก 0 จนได้เว็บจริงที่ใช้งานได้ พร้อมวิธีหาเงินจากทักษะนี้
          </p>
        </div>
      </div>
    </section>
  );
}
