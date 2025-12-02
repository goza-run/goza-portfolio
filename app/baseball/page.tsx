"use client";
import Link from "next/link";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  // Unityのファイルを読み込む設定
  // ※ファイル名(unity-build...)が違う場合は、実際のファイル名に合わせて書き換えてください
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/Build/baseball_unity.loader.js",
    dataUrl: "/unity/Build/baseball_unity.data",
    frameworkUrl: "/unity/Build/baseball_unity.framework.js",
    codeUrl: "/unity/Build/baseball_unity.wasm",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
        {/*左上のホームへ戻るリンク*/}
          <div className="absolute top-4 left-4">
          <Link href="/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
          ホームへ戻る
          </Link>
          </div>
          {/*真ん中の自己紹介リンク*/}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Link href="/introduce" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
          自己紹介ページへ
          </Link>
          </div>
          {/*右上のボールの軌道についてリンク*/}
          <div className="absolute top-4 right-4">
          <Link href="/baseball/simulate_detail" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
          ボールの軌道について
          </Link>
          </div>
      <h1 className="text-3xl font-bold mb-6">
        Goza's Baseball Simulator
      </h1>
      

      <div className="border-4 border-blue-500 rounded-lg overflow-hidden shadow-2xl">
        {/* Unityを表示するコンポーネント */}
        <Unity 
          unityProvider={unityProvider} 
          style={{ width: "960px", height: "600px" }} 
        />
      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Powered by Unity & Next.js
      </p>
      <div className="h-8">
        {/*紹介*/}
        <p className="text-white">
          UnityとC#で開発した野球投球シミュレーターです。流体力学に基づいてボールの軌道を計算します。<br />
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
