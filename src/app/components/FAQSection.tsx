"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
{ q: "คอร์สจะเริ่มเรียนเมื่อไร?", a: "วันที่ 15 มีนาคม 2569 คอร์สจะเริ่มเปิดให้เข้าเรียนจริง" },
  { q: "ไม่มีพื้นฐานโค้ดเลยเรียนได้ไหม?", a: "ได้เลย คอร์สออกแบบมาสำหรับมือใหม่ 100% ไม่ต้องรู้โค้ดมาก่อน เน้นสอน Process และ Prompt Engineering" },
  { q: "ต้องมีโปรแกรมอะไรบ้าง?", a: "Windsurf (ฟรี), Node.js (ฟรี), Git (ฟรี) — ทุกอย่างฟรีหมด ไม่มีค่าใช้จ่ายเพิ่ม" },
  { q: "Early Bird จะปิดรับเมื่อไร?", a: "เมื่อครบ 20 คน จะปิดรับทันที และเปิดราคาปกติ 899 บาท ตั้งแต่ 15 มีนาคม 2569" },
  { q: "เข้าเรียนได้นานแค่ไหน?", a: "ตลอดชีพ + อัปเดตเนื้อหาฟรีทุกครั้งที่ Windsurf มีการอัปเดต ไม่มีค่าใช้จ่ายเพิ่ม" },
  { q: "มีถามผู้สอนได้ไหม?", a: "ได้ ผ่าน Private Group และ Q&A ในแต่ละบทเรียน ทีมผู้สอนจะตอบภายใน 24-48 ชั่วโมง" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden bg-dot-pattern-light">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      <div id="faq" className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">คำถามที่พบบ่อย</h2>
          <p className="text-gray-600 text-lg">คลายทุกข้อสงสัยก่อนตัดสินใจ</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 4 + 1) * 100}`}>
            <div className={`rounded-2xl border overflow-hidden transition-all ${
              openIndex === i ? "border-blue-500 bg-white" : "border-gray-200 bg-white"
            }`}>
              <button
                className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${openIndex === i ? "bg-blue-50 hover:bg-blue-100" : "hover:bg-gray-50"}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180 text-blue-600" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`px-6 pb-5 border-t border-gray-200 transition-all duration-300 ${
                openIndex === i ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
              }`}>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">{faq.a}</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
