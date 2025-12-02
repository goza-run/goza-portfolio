"use client";

import React from 'react';

const MagnusEffect = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl relative overflow-hidden">
      
      {/* --- ここが修正点：標準のstyleタグでアニメーションを定義 --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes windMove {
          0% { left: -50%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}} />

      {/* タイトル */}
      <div className="absolute top-4 left-6 z-10">
        <h3 className="text-white font-bold text-lg">マグヌス効果の可視化</h3>
      </div>

      {/* 右側のラベル */}
      <div className="absolute top-4 right-6 z-10 flex flex-col items-end gap-1">
         <span className="text-blue-300 text-xs font-bold">上側：速い (低圧)</span>
      </div>
      <div className="absolute bottom-4 right-6 z-10 flex flex-col items-end gap-1">
         <span className="text-red-300 text-xs font-bold">下側：遅い (高圧)</span>
      </div>

      {/* アニメーションエリア */}
      <div className="h-64 flex items-center justify-center relative w-full overflow-hidden">
        
        {/* --- 1. 上側の風 (青) --- */}
        <div className="absolute top-0 w-full h-1/2 pointer-events-none">
        {/*divで初期位置(top-0)を設定、それに基づいてtopの割合による高さが変わる*/}
          <WindLine color="blue" duration="1.5s" delay="0s" top="50%" />
          <WindLine color="blue" duration="1.2s" delay="0.5s" top="55%" />
          <WindLine color="blue" duration="1.8s" delay="0.2s" top="45%" />
        </div>

        {/* --- 2. 下側の風 (赤) --- */}
        <div className="absolute bottom-0 w-full h-1/2 pointer-events-none">
          <WindLine color="red" duration="3.5s" delay="0s" top="40%" />
          <WindLine color="red" duration="4s" delay="1.5s" top="50%" />
          <WindLine color="red" duration="3s" delay="0.8s" top="30%" />
        </div>

        {/* --- 3. ボール --- */}
        {/*縫い目を子供に入れることで縫い目すらも回転する*/}
        <div className="relative z-20 w-24 h-24 bg-white rounded-full border-4 border-slate-300 flex items-center justify-center animate-[spin_3s_linear_infinite]">
          <div className="w-full h-full rounded-full border-[8px] border-red-500 border-dashed opacity-60 absolute top-0 left-0 box-border transform rotate-45"></div>
        </div>

        {/* --- 4. 揚力矢印 --- */}
        <div className="absolute z-30 flex flex-col items-center animate-bounce" style={{ top: '15%' }}>
          <span className="text-blue-400 font-bold text-2xl drop-shadow-md">UP</span>
          <svg className="w-16 h-16 text-blue-500 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>

      </div>
    </div>
  );
};

// 風の線コンポーネント
const WindLine = ({ color, duration, delay, top }: { color: 'blue' | 'red', duration: string, delay: string, top: string }) => {
  return (
    //if文を設定(bg-gradient-to-rは右方向へのグラデーション、今回は透明→色→透明)
    <div 
      className={`absolute rounded-full ${
        color === 'blue' 
          ? 'h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent' 
          : 'h-2 bg-gradient-to-r from-transparent via-red-500/50 to-transparent'
      }`}
      style={{ 
        width: '50%', 
        top: top,
        // ここで直接アニメーションを指定（確実に動きます）
        // animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] ...;
        animation: `windMove ${duration} linear infinite`,
        //linearは等速、easeがふんわり
        //delayは分けといた
        animationDelay: delay,
        left: '-50%' // 初期位置
      }}
    />
  );
};

export default MagnusEffect;