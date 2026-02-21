export default function PainPointsSection() {
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
    <section className="relative py-24 bg-[#0a1628] overflow-hidden">
      {/* grid bg */}
      <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Pain Points</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">คุณเคยเจอแบบนี้ไหม?</h2>
          <p className="text-slate-400 text-lg">ปัญหาที่คนส่วนใหญ่เจอเวลาพยายามสร้างเว็บด้วย AI</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pains.map((p, i) => (
            <div key={i} className="flex gap-4 items-start rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">{p.icon}</div>
              <div>
                <h3 className="font-semibold text-white text-base mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-lg mb-1">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            คอร์สนี้สร้างมาเพื่อแก้ปัญหาเหล่านี้โดยเฉพาะ
          </div>
          <p className="text-slate-400 text-sm">สอน Process ตั้งแต่ต้นจนจบ — ทำเว็บอะไรก็ได้ด้วยตัวเอง ไม่ใช่แค่ทำตาม</p>
        </div>
      </div>
    </section>
  );
}
