"use client";

import { useState, useEffect, useRef } from "react";

const parts = [
  {
    tag: "PART 0",
    title: "คิดก่อนทำ: Discovery & Planning",
    duration: "60 นาที",
    highlight: true,
    desc: "Module ที่คนอื่นไม่มี — เหตุผลที่คนดู YouTube แล้วทำตามไม่ได้",
    modules: ["รู้จักตัวเองก่อน: เว็บนี้มีไว้ทำอะไร?", "หา Reference อย่างเป็นระบบ", "แปลง Ref เป็น Brief ให้ AI"],
  },
  {
    tag: "PART 1",
    title: "รู้จักโลกของเว็บ + ติดตั้ง Environment",
    duration: "45 นาที",
    highlight: false,
    desc: "เข้าใจ Frontend, Backend, Database, API และเตรียม Windsurf ให้พร้อม",
    modules: ["Frontend, Backend, Database, API คืออะไร", "ติดตั้ง Windsurf และเตรียม Environment"],
  },
  {
    tag: "PART 1.5",
    title: "Git & GitHub: ระบบ Save งานและ Time Machine",
    duration: "45 นาที",
    highlight: false,
    desc: "เวลา AI โค้ดพังทั้งโปรเจกต์ — Git คือสิ่งที่ช่วยชีวิตคุณ",
    modules: ["Git คืออะไร? ทำไมถึงขาดไม่ได้เวลาทำงานกับ AI", "Git Commands ที่ใช้จริง 90%", "Workflow จริง: Commit ก่อน Prompt ทุกครั้ง"],
  },
  {
    tag: "PART 2",
    title: "Prompt Engineering สำหรับสร้างเว็บ",
    duration: "60 นาที",
    highlight: false,
    desc: "สูตร C.T.C.O. และ Prompt Patterns ที่ใช้จริง 5 แบบ",
    modules: ["โครงสร้าง Prompt ที่ดี (สูตร C.T.C.O.)", "Prompt Patterns ที่ใช้จริง 5 แบบ"],
  },
  {
    tag: "PART 3",
    title: "Workshop จริง 3 โปรเจกต์",
    duration: "210 นาที",
    highlight: true,
    desc: "ลงมือสร้างเว็บจริง 3 ประเภท ตั้งแต่ต้นจนเสร็จ",
    modules: ["Workshop 1: Portfolio / Landing Page (60 นาที)", "Workshop 2: เว็บร้านค้า + Supabase Database (90 นาที)", "Workshop 3: Web App มี Authentication (60 นาที)"],
  },
  {
    tag: "PART 4",
    title: "Deploy & Go Live",
    duration: "45 นาที",
    highlight: false,
    desc: "เอาเว็บขึ้น Internet จริง พร้อม Custom Domain และ SEO เบื้องต้น",
    modules: ["Deploy บน Vercel", "Custom Domain & SEO เบื้องต้น"],
  },
  {
    tag: "PART 5",
    title: "หารายได้จากทักษะนี้",
    duration: "45 นาที",
    highlight: true,
    desc: "Freelance Web ด้วย AI: ตั้งราคา รับงาน และ Process มืออาชีพแบบเอเจนซี่",
    modules: ["Freelance Web ด้วย AI: ตั้งราคา รับงาน", "Process มืออาชีพแบบเอเจนซี่"],
  },
  {
    tag: "PART 6",
    title: "แก้ปัญหา, API Keys, Debug กับ AI",
    duration: "30 นาที",
    highlight: false,
    desc: "วิธีหา API Key ของแต่ละบริการ และ Debug อย่างเป็นระบบ",
    modules: ["วิธีหา API Key ของแต่ละบริการ", "Debug อย่างเป็นระบบ & Error ที่พบบ่อย"],
  },
];

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section id="curriculum" ref={sectionRef} className="relative py-24 bg-[#f5f7ff] overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">คอร์สนี้สอนอะไรบ้าง?</h2>
          <p className="text-gray-600 text-lg">8 Parts · 32 บทเรียน · Workshop 3 โปรเจกต์จริง</p>
        </div>

        <div className="space-y-2">
          {parts.map((part, i) => (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all reveal reveal-delay-${(i % 4 + 1) * 100} ${
                part.highlight
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    part.highlight
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {part.tag}
                  </span>
                  <div>
                    <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{part.title}</span>
                    <p className="text-gray-500 text-xs">{part.duration}</p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-gray-200">
                  <p className="text-gray-600 text-sm mt-3 mb-3 italic">{part.desc}</p>
                  <ul className="space-y-2">
                    {part.modules.map((m, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
