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
        <div key={i} className="flex items-center justify-center gap-2 sm:gap-4">
          <div className="text-center">
            <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] shadow-sm">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900 block">{pad(item.value)}</span>
              <span className="text-gray-600 text-xs uppercase tracking-wider">{item.label}</span>
            </div>
          </div>
          {i < 3 && <span className="text-gray-600 text-xl font-bold">:</span>}
        </div>
      ))}
    </div>
  );
}
