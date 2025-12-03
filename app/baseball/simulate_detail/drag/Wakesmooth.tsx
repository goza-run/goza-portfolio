"use client";

import React from 'react';

const Wakesmooth = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl relative overflow-hidden">
      
      {/* --- アニメーション定義 (軌道を変更) --- */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 上側の風: ボールを避けて上に膨らむ */
        @keyframes windMoveTop {
          0%   { left: 0%; opacity: 0; transform: translateY(0); }
          10%  { opacity: 1; }
          50%  { transform: translateY(-55px) scaleX(8); } /* ボールの上で加速して膨らむ */
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; transform: translateY(-45px); }
        }
        /* 下側の風: ボールを避けて下に膨らむ */
        @keyframes windMoveBottom {
          0%   { left: 0%; opacity: 0; transform: translateY(10px); }
          10%  { opacity: 1; }
          50%  { transform: translateY(80px) scaleX(8); } /* ボールの下で減速して膨らむ */
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; transform: translateY(70px); }
        }
      `}} />

      {/* タイトル */}
      <div className="absolute top-4 left-6 z-10">
        <h3 className="text-white font-bold text-lg">空気の流れ</h3>
      </div>

      {/* ラベル */}
      <div className="absolute top-4 right-6 z-10 flex flex-col items-end gap-1">
         <span className="text-blue-300 text-lg font-bold">ツルツル(無回転)</span>
      </div>

      {/* アニメーションエリア */}
      <div className="h-72 flex items-center justify-center relative w-full overflow-hidden">
        
        {/* --- 1. 上側の風  --- */}
        <div className="absolute w-full h-full pointer-events-none flex items-center justify-center">
          <WindLine color="blue" duration="3s" delay="0s" animName="windMoveTop" offsetY={-20} />
          <WindLine color="blue" duration="3s" delay="0.4s" animName="windMoveTop" offsetY={-30} />
          <WindLine color="blue" duration="3s" delay="0.8s" animName="windMoveTop" offsetY={-30} />
          <WindLine color="blue" duration="3s" delay="1s" animName="windMoveTop" offsetY={-20} />
          <WindLine color="blue" duration="3s" delay="1.2s" animName="windMoveTop" offsetY={-30} />
          <WindLine color="blue" duration="3s" delay="0.6s" animName="windMoveTop" offsetY={-20} />
          <WindLine color="blue" duration="3s" delay="1.4s" animName="windMoveTop" offsetY={-35} />
          <WindLine color="blue" duration="3s" delay="0.2s" animName="windMoveTop" offsetY={-50} />
        </div>

        {/* --- 2. 下側の風  --- */}
        <div className="absolute w-full h-full pointer-events-none flex items-center justify-center">
          <WindLine color="blue" duration="3s" delay="0s" animName="windMoveBottom" offsetY={-20} />
          <WindLine color="blue" duration="3s" delay="0.4s" animName="windMoveBottom" offsetY={-30} />
          <WindLine color="blue" duration="3s" delay="0.8s" animName="windMoveBottom" offsetY={-30} />
          <WindLine color="blue" duration="3s" delay="1s" animName="windMoveBottom" offsetY={-20} />
          <WindLine color="blue" duration="3s" delay="1.2s" animName="windMoveBottom" offsetY={-30} />
          <WindLine color="blue" duration="3s" delay="0.6s" animName="windMoveBottom" offsetY={-20} />
          <WindLine color="blue" duration="3s" delay="1.4s" animName="windMoveBottom" offsetY={-35} />
          <WindLine color="blue" duration="3s" delay="0.2s" animName="windMoveBottom" offsetY={-50} />
        </div>
        {/* --- 4. 進行方向 --- */}
        <div className="absolute z-30 flex flex-col items-center " style={{ top: '0%' }}>
          <span className="text-white font-bold  drop-shadow-md">進行方向</span>
          <svg className="w-16 h-16 text-red-500 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </div>
        <div className="relative z-20 flex items-center justify-center">
        {/* --- 3. ボール (回転) --- */}
        <div className="relative z-20 w-28 h-28 bg-white rounded-full border-4 border-slate-300 flex items-center justify-center shadow-lg">
          {/* 縫い目 */}
          <div className="absolute w-full h-full rounded-full border-[6px] border-red-600 border-dashed opacity-70 box-border" style={{ clipPath: 'ellipse(45% 90% at 50% 50%)', transform: 'rotate(-30deg)' }}></div>
          <div className="absolute w-full h-full rounded-full border-[6px] border-red-600 border-dashed opacity-70 box-border" style={{ clipPath: 'ellipse(45% 90% at 50% 50%)', transform: 'rotate(30deg)' }}></div>
        </div>

        
        <div className='absolute left-full ml-2 flex items-center z-10'>
        {/* --- 5.ウェイク ---*/}
        <div className="relative  w-50 h-24 bg-slate-600/100 rounded-full blur-md flex items-center justify-center"></div>
        <span className="absolute z-10 translate-x-15  text-white font-bold text-lg  drop-shadow-md whitespace-nowrap ">ウェイク</span>
        </div>
        </div>
        </div>
    </div>
  );
};

// 風の線コンポーネント (Propsを変更)
const WindLine = ({ color, duration, delay, animName, offsetY }: { color: 'blue' | 'red', duration: string, delay: string, animName: string, offsetY: number }) => {
  return (
    <div 
      className={`absolute rounded-full shadow-sm 
          h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-90
      `}
      style={{ 
        width: '5%', 
        // ボールの中心からのY座標のズレを指定
        marginTop: `${offsetY}px`,
        animation: `${animName} ${duration} linear infinite`,
        animationDelay: delay,
        left: '-30%'
      }}
    />
  );
};

export default Wakesmooth;