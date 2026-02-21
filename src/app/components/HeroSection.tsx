"use client";

import CountdownTimer from "./CountdownTimer";

const FOUNDER_COUNT = 7;
const FOUNDER_MAX = 20;

export default function HeroSection() {
  const pct = Math.round((FOUNDER_COUNT / FOUNDER_MAX) * 100);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b3e]">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px"
      }} />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)"
      }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)"
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium tracking-wide">เปิดรับ Founder Member แล้ววันนี้</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-5">
              <span className="text-white">สอนสร้างเว็บ</span><br />
              <span className="text-white">ด้วย AI</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                ตั้งแต่ไอเดีย
              </span><br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                จนสร้างรายได้ได้จริง
              </span>
            </h1>

            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
              ด้วย Windsurf × Next.js — ไม่ต้องมีพื้นฐานโค้ด<br />
              สอน Process ทั้งหมด ไม่ใช่แค่ทำตาม
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-blue-900/40"
              >
                จองที่เรียน — 499 บาท
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-7 py-3.5 rounded-xl transition-all"
              >
                ดูหลักสูตร
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ~7.5 ชั่วโมง
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Workshop 3 โปรเจกต์
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                คืนเงิน 100%
              </div>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="flex flex-col gap-4">
            {/* Countdown card */}
            <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.04] backdrop-blur-sm">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ราคา Founder Member ปิดรับใน
              </p>
              <CountdownTimer />
            </div>

            {/* Progress card */}
            <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.04] backdrop-blur-sm">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                  </svg>
                  <span className="text-white font-semibold text-sm">Founder Member</span>
                </div>
                <span className="text-blue-300 font-bold text-sm">{FOUNDER_COUNT} / {FOUNDER_MAX} ที่</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${pct}%`, background: "linear-gradient(90deg, #3b82f6, #67e8f9)" }}
                />
              </div>
              <p className="text-slate-500 text-xs">เหลืออีก <span className="text-blue-400 font-semibold">{FOUNDER_MAX - FOUNDER_COUNT} ที่</span> — ราคาขึ้นเป็น 699 บาท เมื่อครบ 20 คน</p>
            </div>

            {/* Feature chips */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2", label: "Windsurf + Next.js" },
                { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", label: "ไม่ต้องมีพื้นฐานโค้ด" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Deploy จริงบน Vercel" },
                { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "หารายได้จากทักษะ" },
              ].map((chip, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={chip.icon} />
                  </svg>
                  <span className="text-slate-300 text-xs font-medium">{chip.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
