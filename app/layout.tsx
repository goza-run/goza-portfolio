import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import {Analytics} from "@vercel/analytics/react"

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goza's Portfolio",
  description: "神戸大学物理学科に在籍するGozaのポートフォリオサイト。Unity製の野球投球シミュレーターや、物理学（流体力学・マグヌス力）に基づいた変化球の軌道計算をわかりやすく解説した記事を公開しています。",
  keywords:["神戸大学","物理学科","野球","投球","シミュレーション","シミュレーター","Unity","マグヌス力","マグヌス効果","流体力学","自由研究","ボールの軌道","野球ボール","変化球"],
  
  verification:{
    google:"HnVHV0JDEvyh7_13LwhrOSHL3TO-OvcFMYUoUuA5MJg",
  },
  openGraph:{
    title:"Goza's Portfolio",
    description:"物理学科生の作る野球の等級シミュレーター。ボールの軌道に関しても理論的に解説",
    url: "https://goza-portfolio.vercel.app",
    siteName:"Goza's Portfolio",
    images:[
      {
        url:"public/images/Manpukun.png",
        width:600,
        height:600,
      }
    ],
    locale:"ja_JP",
    type:"website", 
  },
  twitter:{
    card:"summary_large_image",
    title:"Goza's Portfolio",
    description:"物理学科生が作った野球投球シミュレーター",
    creator:"@goza_zyagi"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased bg-gray-900 text-white`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
