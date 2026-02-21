"use client";

import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-14T23:59:59");

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 justify-center">
      {[
        { label: "วัน", value: timeLeft.days },
        { label: "ชั่วโมง", value: timeLeft.hours },
        { label: "นาที", value: timeLeft.minutes },
        { label: "วินาที", value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="bg-white/[0.08] border border-white/10 rounded-xl px-4 py-3 text-center min-w-[64px]">
            <div className="text-2xl font-bold text-white leading-none">{pad(item.value)}</div>
            <div className="text-xs text-blue-200 mt-1">{item.label}</div>
          </div>
          {i < 3 && <span className="text-white/70 text-xl font-bold">:</span>}
        </div>
      ))}
    </div>
  );
}
