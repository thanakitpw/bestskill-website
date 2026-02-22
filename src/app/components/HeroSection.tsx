"use client";

import CountdownTimer from "./CountdownTimer";

const FOUNDER_COUNT = 7;
const FOUNDER_MAX = 20;

export default function HeroSection() {
  const pct = Math.round((FOUNDER_COUNT / FOUNDER_MAX) * 100);

  return (
    <section className="relative h-[750px] flex items-center overflow-hidden bg-[#0d1b3e]">
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
          <div className="animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 mb-8 animate-fadeInUp animate-delay-100">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Early Bird เท่านั้น</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeInUp animate-delay-200">
              สร้างเว็บได้จริง<br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">ด้วย AI</span>
            </h1>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed animate-fadeInUp animate-delay-300">
              คอร์สอนสร้างเว็บด้วย AI สำหรับคนไม่มีพื้นฐานโค้ด เรียนรู้ Process ทั้งหมด ไม่ใช่แค่ทำตาม
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fadeInUp animate-delay-400">
              <a
                href="#pricing"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                "ไม่ต้องมีพื้นฐานโค้ด"เลย →
              </a>
              <a
                href="#curriculum"
                className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/20"
              >
                ดูหลักสูตร
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 animate-fadeInUp animate-delay-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                8 หัวข้อ · 32 บทเรียน
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Workshop 3 โปรเจกต์
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                "หารายได้จากทักษะ"ตลอดชีพ ไม่มีหมดอายุ
              </div>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="flex flex-col items-center justify-center animate-fadeInUp animate-delay-600">
            {/* Video Mockup */}
            <div className="relative w-full max-w-lg">
              {/* Main video container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 animate-pulse"></div>
                
                {/* Video thumbnail with overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50">
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 bg-grid-pattern-light opacity-10"></div>
                  
                  {/* Video content preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {/* Code editor mock */}
                      <div className="bg-slate-800/90 rounded-lg p-4 mb-4 backdrop-blur-sm border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-left text-xs font-mono text-slate-300">
                          <div className="text-blue-400">const</div>
                          <div className="text-green-400">app</div>
                          <div className="text-white">= () =&gt; {"{"}</div>
                          <div className="ml-4 text-purple-400">return</div>
                          <div className="ml-8 text-orange-400">{"<div>"}</div>
                          <div className="ml-12 text-white">Hello World</div>
                          <div className="ml-8 text-orange-400">{"</div>"}</div>
                          <div className="text-white">{"}"}</div>
                        </div>
                      </div>
                      
                      {/* Browser mock */}
                      <div className="bg-white rounded-lg p-2 backdrop-blur-sm border border-slate-200/50">
                        <div className="bg-slate-100 rounded p-2">
                          <div className="h-2 bg-blue-500 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-slate-300 rounded w-full mb-2"></div>
                          <div className="h-2 bg-slate-300 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Top overlay info */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-white text-xs font-medium">Preview</div>
                      <div className="text-blue-400 text-xs">Building with AI Tools</div>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="text-white text-sm font-medium">3:45</div>
                    </div>
                  </div>
                  
                  {/* Bottom overlay info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">แนะนำคอร์ส Best Skill</h3>
                      <p className="text-white/80 text-sm">สร้างเว็บได้จริงด้วย AI</p>
                      
                      {/* Video progress bar */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-white/20 rounded-full h-1">
                          <div className="w-1/3 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </div>
                        <span className="text-white/70 text-xs">1:15 / 3:45</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl border-2 border-white/50 animate-bounce">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer rounded-2xl"></div>
              </div>
              
              {/* Video controls hint */}
              <div className="mt-4 flex justify-center gap-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>คลิกเพื่อเล่น</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                  </svg>
                  <span>Full HD</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center animate-fadeInUp animate-delay-700">
              <p className="text-slate-400 text-sm mb-2">
                ดูตัวอย่างการสอนและผลลัพธ์ที่ได้จริง
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                {[{ icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "AI Tools + Next.js" },
                  { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", label: "ไม่ต้องมีพื้นฐานโค้ด" },
                  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Deploy จริงบน Vercel" },
                  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "หารายได้จากทักษะ" },
                ].map((chip, i) => (
                  <span key={i} className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d={chip.icon} />
                    </svg>
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
