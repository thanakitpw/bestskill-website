"use client";

import { useEffect, useRef } from "react";

const EARLY_BIRD_COUNT = 6;
const EARLY_BIRD_MAX = 20;

export default function PricingSection() {
  const pct = Math.round((EARLY_BIRD_COUNT / EARLY_BIRD_MAX) * 100);
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
    <section id="pricing" ref={sectionRef} className="relative py-24 bg-[#0d1b3e] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">เลือกแพ็กเกจที่ใช่สำหรับคุณ</h2>
          <p className="text-slate-400 text-lg">Early Bird รับเพียง 20 ที่เท่านั้น</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Founder Member Card */}
          <div className="relative rounded-2xl border border-blue-500/40 bg-blue-500/10 p-8 flex flex-col reveal reveal-delay-200">
            <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              แนะนำ
            </div>
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Early Bird</p>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-5xl font-bold text-white">699</span>
              <span className="text-slate-400 text-lg mb-2">บาท</span>
            </div>
            <p className="text-slate-500 text-sm line-through mb-5">ราคาปกติ 899 บาท</p>

            <div className="bg-white/[0.06] rounded-xl p-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">เหลือเพียง 14 ที่สุดท้าย</div>
                <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-slate-500 text-sm">ราคาขึ้นเป็น 899 บาท เมื่อครบ 20 ที่นั่ง</p>
              </div>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              {[
"คอร์สเต็ม 32 บทเรียน",
                "Bonus PDF ทั้งหมด 7 ไฟล์",
                "Private Community (Facebook/Discord)",
                "Live Q&A พิเศษ 1 ครั้ง",
                "Code Review ส่วนตัว",
"อัปเดตเนื้อหาใหม่ตลอดชีพ",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://line.me/ti/p/~@bestskill"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl text-center transition-all hover:scale-[1.02]"
            >
              จองที่เรียนเลย →
            </a>
          </div>

          {/* Early Bird Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 flex flex-col reveal reveal-delay-400">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">Normal Price</p>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-5xl font-bold text-white">899</span>
              <span className="text-slate-400 text-lg mb-2">บาท</span>
            </div>
            <p className="text-slate-500 text-sm mb-6">ราคาปกติ (เริ่ม 15 มีนาคม 2569)</p>

            <ul className="space-y-2.5 mb-8 flex-1">
              {[
"คอร์สเต็ม 32 บทเรียน",
                "Bonus PDF ทั้งหมด 7 ไฟล์",
                "Community Access",
"อัปเดตเนื้อหาใหม่ตลอดชีพ",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
              {["Private Community (Facebook/Discord)", "Live Q&A พิเศษ", "Code Review ส่วนตัว"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 text-sm line-through">
                  <svg className="w-4 h-4 text-slate-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="block w-full bg-white/5 border border-white/10 text-slate-500 font-bold py-3.5 rounded-xl text-center cursor-not-allowed">
              เปิดรับ 15 มีนาคม 2569
            </div>
          </div>
        </div>

        {/* Payment info */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 max-w-2xl mx-auto text-center reveal reveal-delay-300">
          <div className="flex items-center justify-center gap-2 text-white font-semibold mb-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            วิธีชำระเงิน
          </div>
          <p className="text-slate-400 text-sm mb-4">โอนผ่าน PromptPay แล้วส่งสลิปมาที่ Line OA</p>
          <a
            href="https://line.me/ti/p/~@bestskill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.066 1.636 5.793 4.181 7.548V22l3.808-2.09A11.3 11.3 0 0012 20.485c5.523 0 10-4.144 10-9.242S17.523 2 12 2z"/>
            </svg>
            ติดต่อผ่าน Line OA
          </a>
        </div>
      </div>
    </section>
  );
}
