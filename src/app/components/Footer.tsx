export default function Footer() {
  return (
    <footer className="relative bg-[#060e1f] border-t border-white/[0.06] py-14">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">Best Skill</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              สอนสร้างเว็บด้วย AI ตั้งแต่ไอเดียจนใช้สร้างรายได้ได้จริง
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">ลิงก์ด่วน</p>
            <ul className="space-y-2.5">
              {[
                { label: "หลักสูตร", href: "#curriculum" },
                { label: "ผลลัพธ์ที่ได้", href: "#outcomes" },
                { label: "สิทธิ์พิเศษ", href: "#benefits" },
                { label: "FAQ", href: "#faq" },
                { label: "จองที่เรียน", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">ติดต่อ</p>
            <a
              href="https://line.me/ti/p/~@bestskill"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors mb-4"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.066 1.636 5.793 4.181 7.548V22l3.808-2.09A11.3 11.3 0 0012 20.485c5.523 0 10-4.144 10-9.242S17.523 2 12 2z"/>
              </svg>
              Line OA: @bestskill
            </a>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
              <div className="flex items-center gap-2 text-white text-xs font-semibold mb-1">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                นโยบายการคืนเงิน
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                ถ้าไม่ถึง Threshold 20 คน คืนเงิน 100% ภายใน 3 วันทำการ
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center">
          <p className="text-slate-600 text-sm">© 2026 Best Skill · สงวนลิขสิทธิ์ทุกประการ</p>
        </div>
      </div>
    </footer>
  );
}
