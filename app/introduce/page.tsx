import Link from 'next/link';
import Image from 'next/image';
export default function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-8 pt-24">
            {/*左上のホームへ戻るリンク*/}
            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4 mb-14">
            <Link href="/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
             ホームへ戻る
            </Link>
            <Link href="/introduce" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
            自己紹介ページへ
            </Link>
            <Link href="/baseball" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
            投球シミュレーターを開く
            </Link>
            
            </div>
            <div className="text-center mb-16 text-lg">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">自己紹介</h1>
                {/*自己紹介内容*/}
                <h2 className="text-2xl float-left font-semibold mb-2 ">はじめに</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    閲覧いただきありがとうございます。Gozaです。<br />
                    このページでは私の自己紹介をさせていただきます。
                </p>
                <h2 className="text-2xl float-left font-semibold mb-2 ">📖学業について</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    神戸大学理学部物理学科に在籍しており、物理学の基礎から応用まで幅広く学んでいます。<br />
                    大学のOB、先輩方、もし3、4年次の講義の過去問があったらもらえると助かります🙇<br />
                    一方で、プログラミングやデータサイエンスにも興味を持ち、独学でスキルを磨いています。<br/> 
                </p>
                <h2 className="text-2xl float-left font-semibold mb-2 ">🎮趣味・興味</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    趣味は野球観戦とゲーム、そして自由研究です。<br />
                    野球観戦では、なんの縁もゆかりもありませんが北海道日本ハムファイターズを応援しています(アミーゴ谷内)。<br />
                    野球自体は草野球程度であるので私の作品(投球シミュレーター)を見て「こんな軌道するわけない」、「こいつ野球知らねえだろ」と思われるかもしれませんが...正解です。<br/>
                    ゲームは読み合いをするゲームが好きです。最近はオートチェスをしてます(誰も一緒にやってくれません😭)。<br />
                    自分が興味を持ったものについて深く掘り下げる自由研究も好きで、これまでに物理シミュレーションやデータ分析など様々なテーマに取り組んできました。<br />
                </p>
                <h2 className="text-2xl float-left font-semibold mb-2 ">💡作品について</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    このポートフォリオサイトでは、私がこれまでに取り組んできた自由研究やプロジェクトの成果を紹介しています。<br />
                </p>
                <ul className="text-gray-400 text-left mb-4 list-disc list-inside">
                    <li>野球投球シミュレーター: UnityとC#で開発し、流体力学に基づいてボールの軌道を計算します。<br/>
                        作成期間は約1ヶ月ほどで、随時アップデートを行っています(クソ雑魚アニメーションもいずれよくなるかも)。<br/>
                        リアルタイムでボールの回転数などからマグヌス力・抵抗力を計算し、なるべくリアルを追求したモデルを組み立てています。<br/>
                        詳しい物理モデルや計算手法については、ポートフォリオ内の解説記事をご覧ください。
                    </li>
                    <div className="flex flex-col items-center">
                    <Image
                    src="/images/Unity_Develop.png"
                    alt="野球投球シミュレーターのスクリーンショット"
                    width={500}
                    height={500}
                    className="my-4 rounded-lg border border-gray-700"
                    />
                    <p className="text-gray-400 text-sm">開発環境</p>
                    </div>
                    
                    <li>Manpukuya: 友人用に公開している食事管理ウェブアプリです。<br/>
                        基本的に会員制で、友人のみが利用可能です。
                        詳しい内容はgithubのreadmeをご覧ください。<br/>
                        <a 
                        href="https://github.com/goza-run/manpukuya"
                        target="_blank" //新しいタブで開く
                        rel="noopener noreferrer"//セキュリティ対策
                        className="text-blue-400 underline"
                        >
                        githubリポジトリはこちら
                        </a>
                    </li>
                    {/*<div className="flex flex-col items-center">
                    <Image
                    src="/images/Manpukuyapreview.png"
                    alt="満伏屋のスクリーンショット"
                    width={400}
                    height={400}
                    className="my-4 rounded-lg border border-gray-700"
                    />
                    <p className="text-gray-400 text-sm">こんな感じ</p>
                    </div>*/}
                </ul>
                <section className="text-center pt-8 border-t border-gray-700">
                <p className="text-gray-300 mb-6">
                最後までお読みいただき、ありがとうございました。<br />
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
    )
}