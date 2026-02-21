"use client";

import { useState } from "react";

const faqs = [
  { q: "ถ้าคอร์สไม่เสร็จจะได้เงินคืนไหม?", a: "ได้ 100% ภายใน 3 วันทำการ ถ้าไม่ถึง Threshold 20 คน ไม่มีความเสี่ยงใดๆ ทั้งสิ้น" },
  { q: "คอร์สจะเสร็จเมื่อไร?", a: "ประมาณ 6-8 สัปดาห์หลังถึง Threshold 20 คน จะประกาศ Timeline ชัดเจนทันที" },
  { q: "ไม่มีพื้นฐานโค้ดเลยเรียนได้ไหม?", a: "ได้เลย คอร์สออกแบบมาสำหรับมือใหม่ 100% ไม่ต้องรู้โค้ดมาก่อน เน้นสอน Process และ Prompt Engineering" },
  { q: "ต้องมีโปรแกรมอะไรบ้าง?", a: "Windsurf (ฟรี), Node.js (ฟรี), Git (ฟรี) — ทุกอย่างฟรีหมด ไม่มีค่าใช้จ่ายเพิ่ม" },
  { q: "ราคา Founder Member จะขึ้นเมื่อไร?", a: "เมื่อครบ 20 คน จะขึ้นเป็น 699 บาททันที และขึ้นเป็น 899 บาทหลัง Launch จริง" },
  { q: "เข้าเรียนได้นานแค่ไหน?", a: "ตลอดชีพ + อัปเดตเนื้อหาฟรีทุกครั้งที่ Windsurf มีการอัปเดต ไม่มีค่าใช้จ่ายเพิ่ม" },
  { q: "มีถามผู้สอนได้ไหม?", a: "ได้ ผ่าน Private Group และ Q&A ในแต่ละบทเรียน ทีมผู้สอนจะตอบภายใน 24-48 ชั่วโมง" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div id="faq" className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">คำถามที่พบบ่อย</h2>
          <p className="text-gray-600 text-lg">มีข้อสงสัยอะไร เราตอบหมดครับ</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border overflow-hidden transition-all ${
              openIndex === i ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"
            }`}>
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
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
              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-gray-200">
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
