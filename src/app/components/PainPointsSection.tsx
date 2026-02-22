"use client";

import { useState, useEffect, useRef } from "react";
import CountdownTimer from "./CountdownTimer";

const EARLY_BIRD_COUNT = 6;
const EARLY_BIRD_MAX = 20;
const LAUNCH_DATE = "15 มีนาคม 2569";

export default function PainPointsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pct = Math.round((EARLY_BIRD_COUNT / EARLY_BIRD_MAX) * 100);

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
        {/* Early Bird Section */}
        <div className="mb-14 reveal">
          <div className="max-w-4xl mx-auto">
            {/* Main urgency card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 font-bold px-4 py-2 rounded-full text-sm mb-4">
                    <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Early Bird รับเพียง 20 ที่เท่านั้น
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">ราคาพิเศษเพียง 699 บาท!</h3>
                  <p className="text-gray-600">เหลือเพียง {EARLY_BIRD_MAX - EARLY_BIRD_COUNT} ที่สุดท้าย</p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Launch Date Section */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-blue-600 font-semibold text-sm">วันเปิดคอร์ส</span>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{LAUNCH_DATE}</div>
                      <p className="text-gray-600 text-sm">คอร์สจะเริ่มเรียนจริง</p>
                    </div>
                  </div>

                  {/* Seats Section */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 border border-orange-200">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                        </svg>
                        <span className="text-orange-600 font-semibold text-sm">Early Bird ที่เหลือ</span>
                      </div>
                      
                      {/* Progress visualization */}
                      <div className="mb-4">
                        <div className="flex justify-center gap-1 mb-3">
                          {Array.from({ length: EARLY_BIRD_MAX }, (_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                i < EARLY_BIRD_COUNT
                                  ? 'bg-red-500'
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-4xl font-bold text-gray-900 mb-1">
                          {EARLY_BIRD_MAX - EARLY_BIRD_COUNT}
                        </div>
                        <div className="text-sm text-gray-600">ที่เท่านั้น</div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                        <div 
                          className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-600">
                        {EARLY_BIRD_COUNT}/{EARLY_BIRD_MAX} คนจองแล้ว
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-8">
                  <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-full px-6 py-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-red-600 font-semibold">
                      หลังจากนี้ราคาจะเป็น <span className="text-2xl font-bold mx-1">899</span> บาท
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
