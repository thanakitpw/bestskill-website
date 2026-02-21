import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Best Skill - สอนสร้างเว็บด้วย AI ตั้งแต่ไอเดียจนใช้สร้างรายได้ได้จริง",
  description: "คอร์สสอนสร้างเว็บด้วย AI (Windsurf) สำหรับคนไม่มีพื้นฐานโค้ด เรียนรู้ Process ทั้งหมด ไม่ใช่แค่ทำตาม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${notoSansThai.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
