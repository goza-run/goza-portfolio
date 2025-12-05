"use client";
import Link from "next/link";
import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import Image from 'next/image';
import Wakebackspin from '@/app/baseball/simulate_detail/drag/WakeBackspin';
import Wakerough from '@/app/baseball/simulate_detail/drag/Wakerough';

export default function LiftPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 pt-24 bg-gray-900 text-white">
            
            {/* ナビゲーション */}
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

            {/* 【重要修正】記事全体の幅を制限し、はみ出しを防ぐ */}
            <div className="w-full max-w-3xl mb-16 text-lg break-words">
            
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">野球ボールに影響するマグヌス力</h1>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full mb-16">
                        <Link
                        href="/baseball/simulate_detail"
                        className={`group bg-gray-800 p-6 rounded-xl border-2 border-blue-500/50 hover:bg-gray-750 transition-all hover:-translate-y-1 hover:shadow-lg w-full`}
                        >
                            <h3 className={`text-xl font-bold mb-3 text-blue-400 group-hover:underline`}>
                                親記事
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                野球ボールの軌道に関して簡単に説明しています。<br/>
                                初学者向けの記事ではありますが、読んだ方が話の流れがわかりやすいと思います。
                            </p>
                            <div className="mt-4 text-right text-sm text-gray-500 group-hover:text-white transition-colors">
                                詳しく読む→
                            </div>
                        </Link>
                        <Link
                        href="/baseball/simulate_detail/drag"
                        className={`group bg-gray-800 p-6 rounded-xl border-2 border-green-500/50 hover:bg-gray-750 transition-all hover:-translate-y-1 hover:shadow-lg w-full`}
                        >
                            <h3 className={`text-xl font-bold mb-3 text-green-400 group-hover:underline`}>
                                兄弟記事(空気抵抗について)
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                空気抵抗がボールに及ぼす影響について数式やグラフを用いて具体的に説明します。<br/>
                                この記事には本記事で扱う内容を含んでいるので先に読んだ方がわかりやすいかも。
                            </p>
                            <div className="mt-4 text-right text-sm text-gray-500 group-hover:text-white transition-colors">
                                詳しく読む→
                            </div>
                        </Link>
            </div>
            
            {/* 【修正】float-left削除 */}
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">はじめに</h2>
            
            <p className="text-gray-400 text-left mb-8 leading-relaxed">
            この記事は<span className="font-bold text-red-600">物理学科の大学生</span>が独学で野球ボールに影響する抵抗に関して勉強した内容です。<br />
            私が学習した内容を元に一生懸命試行錯誤して現実的なモデルを構築したものではありますが、<br />
            偉い教授や野球の専門家ではないのでこの記事の内容の<span className="font-bold text-red-600" >正確性</span>を保証することはできません。<br />
            参考にされる際は、その点を十分にご理解の上でお願いいたします。<br />
            また、この記事では数学的な記述や専門用語が含まれる場合がありますが、できるだけわかりやすく説明するよう努めます。
            ご不明な点があれば、お気軽にお問い合わせください。
            </p>

            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">今回使う物理量の数値</h2>
            
            <ul className="text-gray-400 text-left mb-8 list-disc list-inside space-y-2">
                <li>空気密度<InlineMath math="\rho:1.225kg/m^3"/></li>
                <li>ボール質量<InlineMath math="m:0.145kg"/></li>
                <li>ボール半径<InlineMath math="r:0.0368m"/></li>
                <li>重力加速度<InlineMath math="g:9.8m/s^2"/></li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">マグヌス力の原理</h2>
            
            <p className="text-gray-400 text-left mb-8 leading-relaxed">
            回転を加えて投げたら、その回転の通りに曲がるという経験則にはマグヌス力が大きく関与しています。<br/>
            今回はそのマグヌス力を理系っぽくいろんな視点でお話ししていこうと思います.<br/>
            </p>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">ボールとの境界面におけるマグヌス力</h2>
            
            <p className="text-gray-400 text-left mb-8 leading-relaxed">
            ボールの境界面を通る空気の流れによって生じるマグヌス力を読み解きましょう。
            ボールが高速で移動することで空気を遮り、ボールが通って来た道には空気があまり存在しなくなり、低圧の空間が生まれるわけですが<br/>
            そんな<span className="font-bold text-blue-400">後流(ウェイク)</span>と進行方向の圧力差によって基本的に空気抵抗は生まれます(詳しい説明は兄弟記事参照)。<br/>
            しかしそれとは別に、ボールの回転も空気の流れに影響を及ぼしてそうじゃないですか？<br/>
            実際に回転によって空気の流れの<span className="text-xl font-bold text-blue-400">向き</span>に影響を及ぼしています。<br/><br/>
            図を使って考えてみましょう(無回転とバックスピン)。<br/>
            空気の流れに関しては「どれだけボールに添いながら進行できるか？」、<br/>
            もっと細かくいうと<span className="font-bold text-blue-400">「ボールに接している空気がいつボールを離れてしまうのか？」⇨剥離点</span>が非常に重要になっていきます。<br/>
            剥離点をなるべく後ろにずらすにはエネルギーが必要です。登山をイメージしてみてください、目の前の段差を一段一段上がるごとにエネルギーを要しますし、下山の際にも多少エネルギーは使うでしょう。剥離点は登山の過程で息切れした地点がどこか？といった感じです。<br/>
            無回転の場合は上下でボールに沿うために必要なエネルギーは変わりませんので上下対象に流れていきます。<br/>
            一方でバックスピンについてですが、上側の方は<span className="font-bold text-blue-400">回転の向きと気流の方向が一致</span>しているので空気自体にそこまでエネルギーは必要としません(エスカレーターに乗っている感じ)。<br/>
            逆に下側の方は正反対の方向をしているので無回転の時以上にエネルギーを要します(エスカレーターを逆走している感じ)。<br/>
            となると当然上下で気流の向きが異なってくるので、今回は斜め下向きにウェイクが生まれてしまいます。従来であれば真横のウェイクを下に動かしたということで、ボールにはその反作用として<span className="font-bold text-blue-400">上向きの力</span>が加わります。<br/>
            </p>
            
            {/* 図のスクロールエリア：mt:hidden を md:hidden に修正 */}
            <div className="mb-8 w-full overflow-x-auto">
                <div className="space-y-4 min-w-[600px]">
                    <Wakerough/>
                    <Wakebackspin/>
                </div>
                <p className="text-gray-500 text-xs text-center mt-2 md:hidden">
                    ※図がはみ出ている場合は横にスクロールできます
                </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">境界面の外側におけるマグヌス力</h2>
            
            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            さて、ここまで長々と話している内容についてきている方は少しおかしな点があるのではと考えていると思います。<br/>
            <span className="font-bold text-blue-400">バックスピンでウェイクが下にずれるなら上下で圧力差が生まれてボールは下に落ちていっちゃうじゃないか</span>ということです。<br/>
            結論から言うと<span className="font-bold text-blue-400">もっと低圧な空間が上側にできる</span>のでその心配はありません。<br/><br/>
            さっきはボールに接している空気について考えましたが今度はその外側、境界面において、ボールに接している部分を除いて考えてみましょう。<br/>
            話の流れはさっきとほぼ一緒です。たださっきはイメージで考えていましたが今度は本格的な式を使います。<br/>
            使う式というのは<span className="text-xl font-bold text-blue-400">ベルヌーイの式</span>と呼ばれるものです。<br/>
            この式は非粘性流体(完全流体)において、速さと圧力・外力の関係を表す式になっています。さっきはボールにへばりつくようなイメージだったので空気は粘性流体として捉えてしまっていました。<br/>
            今回外側の空気について考えることでこの式が使えるようになり、またそれを近似してボール周りの空気の圧力を計算していこうという流れですね。<br/>
            ベルヌーイの式は流体の圧力P、速度V、高さhを用いて以下のように表されます。<br/>
            </p>
            
            {/* 数式をスクロール枠で囲む */}
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="P+\frac{1}{2}\rho V^2+\rho gh=const"/>
            </div>
            
            <p className="text-gray-400 text-left mb-4">
                さらに今回高さは一定と捉えると、
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="P+\frac{1}{2}\rho V^2=const"/>
            </div>

            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            このような形になるので、シンプルに<span className="font-bold text-blue-400">圧力と速度の二乗が反比例の関係である</span>という結果が出てきます。<br/>
            今回もバックスピンを考えましょう。境界面について考えた時とほぼ同じような考え方でいくと、<br/>
            ボールの上側では、回転によって空気の流れがボールの進行方向と同じ向きなので、回転がアシストしてくれます。<br/>
            ボールの進行方向の速さをu、回転の速さをvとすると、空気の相対速度は<span className="font-bold text-blue-400"><InlineMath math="V=u+v"/></span>になります。<br/>
            一方で、ボールの下側では回転によって空気の流れがボールの進行方向と逆向きなので、邪魔して来ますね。<br/>
            よってこちらの空気の相対速度は<span className="font-bold text-blue-400"><InlineMath math="V=u-v"/></span>、<br/>
            上側の方がが下側よりもVが高いということは、上側が低圧、下側が高圧ということになって圧力の観点からしてもやっぱり<span className="font-bold text-blue-400">上向きの力</span>が加わります。
            <br/><br/>
            </p>
            
            <div className="flex flex-col items-center mb-8">
                {/* 画像に w-full h-auto を追加 */}
                <Image
                src="/images/velocitydifference.png"
                alt="相対速度イメージ図"
                width={600}
                height={600}
                className="my-4 rounded-lg border border-gray-700 w-full h-auto max-w-[600px]"
                />
                <p className="text-gray-400 text-sm">相対速度のイメージ</p>
            </div>

            <p className="text-gray-400 text-left mb-8 leading-relaxed">
            さて、ここまで聞いてもらって大変申し訳ないのですが、<br/><span className="text-xl font-bold text-blue-400">これら二つのマグヌス力は全く同じものです。導入の仕方が違うだけなので自分が納得する方を覚えて帰って貰えばと思います🙏</span>
            </p>


            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">揚力係数(<InlineMath math="C_l"/>)</h2>
            
            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            さて、とうとうマグヌス力(<InlineMath math="F_M"/>)について立式しましょう。<br/>
            ボールが空気から受ける動圧qに関して、これは単位体積あたりの粒子の運動エネルギーとして捉えることができ、<br/>
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="q=\frac{1}{2} \rho v^2"/>
            </div>

            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            これに面積をかけてしまえばマグヌス力が出てくるはずです。断面積をSとすると、
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="F_M=qSC_l=\frac{1}{2} \rho v^2SC_l"/>
            </div>

            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            さらにベクトルに関しては、角速度ベクトルと速度ベクトルの外積から求めることができるため、
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="\vec{F_M}=\frac{1}{2} \rho v^2SC_l \cdot \frac{\vec{\omega}\times\vec{v}}{|\vec{\omega}\times\vec{v}|}"/>
            </div>

            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            <InlineMath math="C_l"/>は<span className="font-bold text-blue-400">揚力係数</span>と呼ばれるもので、基本時には実験などから得られる値です。<br/>
            粘性流体の運動方程式である<span className="font-bold text-blue-400">ナビエ・ストークスの運動方程式</span>を解けば導けるものですがこいつの一般解が見つかっていないので今のところはどうしようもないです(見つかったら100万ドル)。<br/>
            ただ、じゃあ未知数ですおしまいとなると計算が進みませんので、文献を参考に式を組み立てていきましょう。<br/>
            </p>
             <div className="flex flex-col items-center mb-8">
                                <Image
                                src="/images/Alangraph.png"
                                alt="Alanのグラフ"
                                width={600}
                                height={600}
                                className="my-4 rounded-lg border border-gray-700 w-full h-auto max-w-[600px]"
                                />
                                <p className="text-gray-400 text-sm">Alan Nathan教授のグラフ</p>
            </div>
            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            偉大なるAlan Nathan教授のグラフを参考にさせてもらいます(点に関しては今回関係ないので詳しくは文献参照)。<br/>
            Sは<span className="font-bold text-blue-400">スピンパラメータ</span>と呼ばれるものでボールの回転スピードが飛行速度に対してどれくらい速いか、という指標です。
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="S=\frac{r\omega}{v}"/>
            </div>

            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            グラフを見ると、スピンパラメータと揚力係数は比例関係にあり、直線的なグラフで表されることがわかります。<br/>
            目分量で目盛りを読み取ってまとめると、<br/>
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="C_l=
                \begin{cases}
                1.5S(S\le0.1)\\
                0.6S+0.09(S>0.1)
                \end{cases}"/>
            </div>

            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            こんな感じになると思います。ただ、場合によって式が変わるというのは少し使いづらいので近似曲線を個人的に作ってみました。
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="C_l=C_{l0}\cdot S^{0.7}"/>
            </div>

            <p className="text-gray-400 text-left mb-8 leading-relaxed">
            揚力係数がスピンパラメータの0.7乗に比例すると仮定して、Alan教授のグラフから<InlineMath math="C_{l0}"/>を求め、投球シミュレータに導入していこうと思います。<br/>
            </p>


            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">ボールが浮き上がるには？</h2>
            
            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            投げたボールが浮き上がるには上向きのマグヌス力が重力を上回らなければなりません。<br/>
            試しに<span className="font-bold text-blue-400">160km/h</span>ではどのくらいの回転数が必要か考えましょう。<br/>
            速度の単位をkm/hに切り替え、物理量を代入していくと、
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="mg=\frac{1}{2} \rho (\frac{v}{3.6})^2SC_l"/>
                <BlockMath math="1.421=\frac{1}{2}\times1.225\times (\frac{160}{3.6})^2\times \pi r^2\times C_l"/>
                <BlockMath math="C_l=0.2760...≒0.276"/>
            </div>

            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            Alan教授のグラフを参考にこの時のSを調べると<InlineMath math="S\sim0.29"/>くらいだと推測されます。
            よってスピンパラメータから回転数を求めていきたいのですが、その単位をrpmに切り替え、速度をkm/hに切り替えると
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="S=\frac{r(\frac{\omega\cdot2\pi}{60})}{\frac{v}{3.6}}"/>
                <BlockMath math="0.29=\frac{3\pi}{25v}r\omega"/>
                <BlockMath math="\omega=3349.2...≒3349rpm"/>
            </div>

            <p className="text-gray-400 text-left mb-4 leading-relaxed">
            よって<span className="text-xl font-bold text-blue-400">160km/hではバックスピンで3350rpmほどの回転でようやく重力に勝つことができる</span>とわかりました。<br/>
            ちなみにこの時の結果から<InlineMath math="C_{l0}"/>を出してみると、
            </p>
            
            <div className="overflow-x-auto max-w-full mb-4">
                <BlockMath math="C_{l0}=\frac{ 0.2760}{0.29^{0.7}}=0.6564...≒0.656"/>
            </div>
            
            <p className="text-gray-400 text-left mb-4">
            これでグラフを書いてみるとこんな感じになりました。
            </p>
            <div className="flex flex-col items-center mb-8">
                                <Image
                                src="/images/Spin_vs_Cl.png"
                                alt="spin_vs_cl"
                                width={600}
                                height={600}
                                className="my-4 rounded-lg border border-gray-700 w-full h-auto max-w-[600px]"
                                />
                                <p className="text-xl text-gray-400 text-sm">🟠：Alan教授のグラフ, 🔵：0.7乗に比例するグラフ</p>
                                
            </div>
            <p className="text-gray-400 text-left mb-4">
            いかがでしょうか、個人的には高い精度で近似できたと思っています。<br/>
            最後にこの値を用いてマグヌス力が重力と釣り合う場合の球速・回転数のグラフを置いておきます。
            </p>
            <div className="flex flex-col items-center mb-8">
                                <Image
                                src="/images/FireBall.png"
                                alt="火の玉ストレートの基準"
                                width={600}
                                height={600}
                                className="my-4 rounded-lg border border-gray-700 w-full h-auto max-w-[600px]"
                                />
                                <p className="text-xl text-gray-400 text-sm">🔴：160km/hの時</p>
                                
            </div>
           
            <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">文献・URL</h2>
            
            <p className="text-gray-400 text-left mb-4 leading-relaxed text-sm break-all">
            [1] ロバート・K・アデア 著, 中村和幸 訳, 『ベースボールの物理学』, 紀伊國屋書店, 1996年<br/>
            [2] Alan M. Nathan, "The effect of spin on the flight of a baseball", 
            <Link 
            href="https://www.google.com/url?client=internal-element-cse&cx=014153967983052910035:pqnvjsfo3be&q=http://baseball.physics.illinois.edu/ajpfeb08.pdf&sa=U&ved=2ahUKEwj0_62dpp6RAxX9slYBHZ2GJ6cQFnoECAcQAQ&usg=AOvVaw3vplfy8-Vent9qFfOibsK4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline break-all"
            >
                https://www.google.com/...
            </Link>
                , Accessed:2025-12-02<br/>
            
            {/* 修正：https://https:// を修正 */}
            [3] Elmar Achenbach,"Experiments on the flow past spheres at very high Reynolds numbers", 
            <Link 
            href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/experiments-on-the-flow-past-spheres-at-very-high-reynolds-numbers/439D96006E69382A21B5EBA9E5645C65/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline break-all"
            >
                https://www.cambridge.org/...
            </Link>
                , Accessed:2025-12-02
            
            </p>
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
  );
}