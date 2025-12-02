"use client";
import Link from "next/link";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Unitypage() {
  // Unityのファイルを読み込む設定
  // ※ファイル名(unity-build...)が違う場合は、実際のファイル名に合わせて書き換えてください
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/Build/baseball_unity.loader.js",
    dataUrl: "/unity/Build/baseball_unity.data",
    frameworkUrl: "/unity/Build/baseball_unity.framework.js",
    codeUrl: "/unity/Build/baseball_unity.wasm",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-8 bg-gray-900 text-white">
        {/*左上のホームへ戻るリンク*/}
        {/* 【修正1：ナビゲーションエリア】
        - absoluteをやめて、flexコンテナで包みました。
        - w-full max-w-4xl: 横幅いっぱいに広がるが、広がりすぎないように制限。
        - flex flex-col: スマホ初期設定では「縦積み」。
        - md:flex-row: PC画面（mdサイズ以上）では「横並び」。
        - gap-4: ボタン間の隙間。
      */}
          <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4 mb-14">
          <Link href="/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
          ホームへ戻る
          </Link>
          <Link href="/introduce" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
          自己紹介ページへ
          </Link>
          <Link href="/baseball/simulate_detail" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
          ボールの軌道について
          </Link>
          </div>
          
          
          
      <h1 className="text-3xl font-bold mb-6">
        Goza's Baseball Simulator
      </h1>
      

      <div className="relative w-full max-w-[960px] aspect-[960/600] border-4 border-blue-500 rounded-lg overflow-hidden shadow-2xl">
        {/* Unityを表示するコンポーネント */}
        {/*
        Unityを画面の大きさに合わせて自動で変わるように設定する
        箱をrelative(基準)にしてunityを何がなんでも箱の四隅(top-0 left-0 w-full h-full)に貼り付ける(absolute)
        */ }
        <Unity 
          unityProvider={unityProvider} 
          className="absolute top-0 left-0 w-full h-full"
          style={{ width: "100%", height: "100%" }} 
          devicePixelRatio={1}//画質を制限
        />
      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Powered by Unity & Next.js
      </p>
      <div className="h-8">
        {/*紹介*/}
        <p className="text-white">
          UnityとC#で開発した野球投球シミュレーターです。流体力学に基づいてボールの軌道を計算します。<br />
          スマホで使う場合は横画面を推奨します(なんならPC・タブレットなどの大画面)。<br/>
          詳しい計算手法については、右上の「ボールの軌道について」リンクから解説ページをご覧ください。
        </p>
        
      <section className="text-center pt-8 border-t border-gray-700">
                <p className="text-gray-300 mb-6">
                  
                質問や指摘などありましたら、X（旧Twitter）のDMまでご連絡ください。
                </p>
                <a 
                href="https://x.com/goza_zyagi" 
                target="_blank" //新しいタブで開く
                rel="noopener noreferrer"//セキュリティ対策
                className="inline-flex items-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full border border-gray-600 transition"
                >
                {/* Xロゴ（簡易版） */}
                <span className="font-bold text-xl mr-2">𝕏</span>
                @goza_zyagi
                </a>
      </section>
      </div>
      
    </main>
  );
}
