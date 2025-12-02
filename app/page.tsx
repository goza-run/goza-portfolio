import Link from 'next/link';

export default function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4">Welcome to Goza's Portfolio</h1>
                <p className="text-lg text-gray-400">神戸大学 物理学科</p> 
                <p className="mt-2 text-gray-400">自由研究(作品など)</p>
            </div>

            <div className="grid grid-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                
                <div className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition">
                    <h2 className="text-2xl font-semibold mb-2">自己紹介</h2>
                    <p className="text-gray-400 mb-4">
                        神戸大学物理学科に所属する学生、Gozaのポートフォリオサイトへようこそ。
                    </p>
                    <Link href="/introduce" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
                        自己紹介ページへ
                    </Link>
                </div>
                {/* Link to Baseball Simulator */}
                <div className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition">
                    <h2 className="text-2xl font-semibold mb-2">野球投球シミュレーター</h2>
                    <p className="text-gray-400 mb-4">
                        UnityとC#で開発、流体力学に基づいてボールの軌道を計算します。
                    </p>
                    <Link href="/baseball" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
                        シミュレーターを開く
                    </Link>
                </div>

                <div className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition">
                    <h2 className="text-2xl font-semibold mb-2">野球ボールの軌道について</h2>
                    <p className="text-gray-400 mb-4">
                        野球投球シミュレーターで用いている物理モデルや計算手法について解説します。
                    </p>
                    <Link href="/baseball/simulate_detail" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
                        解説記事を読む
                    </Link>
                </div>

                <div className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition">
                    <h2 className="text-2xl font-semibold mb-2">満伏屋</h2>
                    <p className="text-gray-400 mb-4">
                        友人用に公開している食事管理ウェブアプリです。
                    </p>
                    <Link href="https://app.manpukuya.me/" target='_blank' className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
                        満伏屋アプリへ
                    </Link>
                </div>
            
            </div>
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
        </main>
    )
}