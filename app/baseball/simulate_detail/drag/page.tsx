"use client";
import Link from "next/link";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { InlineMath, BlockMath } from "react-katex";
import Image from 'next/image';
import Wakesmooth from '@/app/baseball/simulate_detail/drag/Wakesmooth';
import Wakerough from '@/app/baseball/simulate_detail/drag/Wakerough';
import Wakebackspin from '@/app/baseball/simulate_detail/drag/WakeBackspin';

// ★必ず「export default function」で関数コンポーネントを返す必要があります
export default function DragPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 pt-24">
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
            <Link href="/baseball" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
            投球シミュレーターを開く
            </Link>
            </div>
            <div className="text-center mb-16 text-lg">
            <h1 className="text-5xl font-bold mb-4">野球ボールに影響する空気抵抗について</h1>
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mb-16 mx-auto ">
                        <Link
                        href="/baseball/simulate_detail"
                        className={`group bg-gray-800 p-6 rounded-xl border-2 border-blue-500/50 hover:bg-gray-750 transition-all hover:-translate-y-1 hover:shadow-lg`}
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
                        href="/baseball/simulate_detail/Lift"
                        className={`group bg-gray-800 p-6 rounded-xl border-2 border-green-500/50 hover:bg-gray-750 transition-all hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <h3 className={`text-xl font-bold mb-3 text-green-400 group-hover:underline`}>
                                兄弟記事(マグヌス力/効果について)
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                マグヌス力を考えるために必要な式で用いる値(係数)を文献と比較して推測します。<br/>本記事を読んでからの方がわかりやすいかも。
                            </p>
                            <div className="mt-4 text-right text-sm text-gray-500 group-hover:text-white transition-colors">
                                詳しく読む→
                            </div>
                        </Link>
            </div>
            
            <h2 className="text-2xl float-left font-semibold mb-2 ">はじめに</h2>
            <br/><br/>
            <p className="text-gray-400 text-left mb-4">
            この記事は<span className="font-bold text-red-600">物理学科の大学生</span>が独学で野球ボールに影響する抵抗に関して勉強した内容です。<br />
            私が学習した内容を元に一生懸命試行錯誤して現実的なモデルを構築したものではありますが、<br />
            偉い教授や野球の専門家ではないのでこの記事の内容の<span className="font-bold text-red-600" >正確性</span>を保証することはできません。<br />
            参考にされる際は、その点を十分にご理解の上でお願いいたします。<br />
            また、この記事では数学的な記述や専門用語が含まれる場合がありますが、できるだけわかりやすく説明するよう努めます。
            ご不明な点があれば、お気軽にお問い合わせください。
            </p>
            <h2 className="text-2xl float-left font-semibold mb-2 ">今回使う物理量の数値</h2>
            <br/><br/>
            
                <ul className="text-gray-400 text-left mb-4 list-disc list-inside">
                    <li>空気密度<InlineMath math="\rho:1.225kg/m^3"/></li>
                    <li>ボール質量<InlineMath math="m:0.145kg"/></li>
                    <li>ボール半径<InlineMath math="r:0.0368m"/></li>
                    <li>重力加速度<InlineMath math="g:9.8m/s^2"/></li>
                    <li>空気の粘性率<InlineMath math="\mu:1.789\times10^{-5}Pa \cdot s"/></li>
                </ul>
            
            <h2 className="text-2xl float-left font-semibold mb-2">層流・乱流</h2>
            <br/><br/>
            <p className="text-gray-400 text-left mb-4">
            ボールを投げると空気抵抗でどんどん遅くなることは当たり前と認識しているはずです。<br/>
            しかし、ボールによって空気抵抗に違いがあることもきっと理解しています。野球ボールとガチャガチャのカプセルでは同じ形状・同じ重さだったとしても野球ボールの方がよく飛ぶでしょう。<br/>
            この違いは一体なんでしょう？色々な要因はありますが、表面上に限った話で言えば<span className="text-xl font-bold text-blue-400">ざらざら具合</span>ですね。<br/>
            通常気流は滑らかで全員が同じ方向を向いて流れていきます。これを<span className="text-xl font-bold text-blue-400">層流</span>といいます。<br/>
            一方でボールが進行していくと、気流が乱れて流れる方向がバラバラになるケースがあります。これを<span className="text-xl font-bold text-blue-400">乱流</span>といいます。
            <br/><br/>
            図をもとに考えてみましょう。ボールが高速で移動し、そこにある空気を押し除けていくと、ボールの通ってきたところには空気がなくなります。<br/>
            つまりそこは低圧空間になるわけですね。その<span className="font-bold text-blue-400">後流(ウェイク)</span>と進行方向の圧力差によって空気抵抗が生まれるわけですが、<br/>
            ツルツルのボールでは気流がボールにまとわりつく力が弱く、<span className="font-bold text-blue-400">ボールの表面と接する空気がすぐにボールから剥離してしまい</span>大きなウェイクが出来上がります(層流)。<br/>
            一方でざらざらのボールではボールの表面と接する空気がギリギリまでまとわりつくので<span className="font-bold text-blue-400">剥離が遅くなり</span>ウェイクは小さくなります(乱流)。<br/>
            なのでウェイクの大きなツルツルのボールの方が空気抵抗が大きくなるわけですね。<br/>
            これは無回転のボールをイメージしていますので、例えばバックスピンなどの回転がかかっている場合はボールの上側と下側で剥離点がずれて、ウェイクが傾くでしょうね(マグヌス効果の話になっちゃう)。
            </p>
            <Wakesmooth/>
            <Wakerough/>
            <Wakebackspin/>
            <h2 className="text-2xl float-left font-semibold mb-2">レイノルズ数(<InlineMath math="R_e"/>)</h2>
            <br/><br/>
            <p className="text-gray-400 text-left mb-4">
            材質によって空気抵抗が変わることは理解できたと思います。一方で、<span className="font-bold text-blue-400">空気の速度</span>によっても空気抵抗は変化します。層流が乱流に変わる速度の基準を設けましょう。<br/>
            層流はみんな同じ方向を同じような速さで進行しなければいけませんから、それぞれが流れを保とうとする力、<span className="text-xl font-bold text-blue-400">粘性力<InlineMath math="F_{viscous}"/></span>が必要ですね。<br/>
            今回は、簡単のため長さLの立方体の流体ブロックで力を考えてみましょう。空気が断面積Sを速度vで進行している場合空気の粘性係数をμとすると、
            </p>
            <BlockMath math="F_{viscous}=\mu \times \frac{dv}{dL} \times S≒\mu \times \frac{v}{L} \times L^2=\mu v L"/>
            <p className="text-gray-400 text-left mb-4">
            次に、乱流が起きるためにはどんな力が必要か、これはそれぞれが別々の速度で進行し続けることができるような力、<span className="text-xl font-bold text-blue-400">慣性力<InlineMath math="F_{inertia}"/></span>が必要ですね。
            </p>
            <BlockMath math="F_{inertia}=ma=\rho V a≒\rho L^3 \frac{v}{t}=\rho L^3 \frac{v^2}{L}=\rho v^2 L^2"/>
            <p className="text-gray-400 text-left mb-4">これら二つの比をとると</p>
            <BlockMath math="R_e=\frac{F_{inertia}}{F_{viscous}}=\frac{\rho v L}{\mu}"/>
            <p className="text-gray-400 text-left mb-4">
            となります。この値をレイノルズ数と呼びます。今回、ボールから見た空気の相対速度ということで、空気の速度vは球速ということにします。<br/>
            レイノルズ数を速度を代入しただけで出せるようにするためにちょっと計算しましょう。<br/>
            今回は球なので幅Lについては一律直径(2r)に近似します。
            </p>
            <BlockMath math="R_e=\frac{1.225\times2\times0.0368}{1.789\times10^{-5}}v"/>
            <p className="text-gray-400 text-left mb-4">
            上の式はvの単位がm/sなのでkm/hという馴染みのある単位に変化させましょう。
            </p>
            <BlockMath math="R_e=\frac{1.225\times2\times0.0368}{1.789\times10^{-5}}\times\frac{v}{3.6}=v\times1399.91...≒1.4\times10^3v"/>
            <p className="text-gray-400 text-left mb-4">
            少し古い本にはなりますが、ロバート・アデア著「ベースボールの物理学」によると、<br />
            野球ボールでは80km/h(<InlineMath math="R_e≒112\times10^3"/>)以下で層流、320km/h以上(<InlineMath math="R_e≒448\times10^3"/>)で完全に乱流になるらしいです。<br/>
            つまり、野球では層流から乱流への遷移過程という微妙な気流状態でピッチャーがボールを投げているわけですね。
            </p>
            <h2 className="text-2xl float-left font-semibold mb-2">抵抗係数(<InlineMath math="C_d"/>)</h2>
            <br/><br/>
            <p className="text-gray-400 text-left mb-4">
            さて、とうとう空気抵抗力(<InlineMath math="F_D"/>)について立式しましょう。<br/>
            ボールが空気から受ける動圧qに関して、これは単位体積あたりの粒子の運動エネルギーとして捉えることができ、<br/>
            </p>
            <BlockMath math="q=\frac{1}{2} \rho v^2"/>
            <p className="text-gray-400 text-left mb-4">
            これに面積をかけてしまえば空気抵抗が出てくるはずです。断面積をSとすると、
            </p>
            <BlockMath math="F_D=qSC_d=\frac{1}{2} \rho v^2SC_d"/>
            <p className="text-gray-400 text-left mb-4">
            おっと、何かつきましたね。<InlineMath math="C_d"/>は<span className="font-bold text-blue-400">抵抗係数</span>と呼ばれるもので、基本時には実験などから得られる値です。<br/>
            粘性流体の運動方程式である<span className="font-bold text-blue-400">ナビエ・ストークスの運動方程式</span>を解けば導けるものですがこいつの一般解が見つかっていないので今のところはどうしようもないです(見つかったら100万ドル)。<br/>
            <InlineMath math="C_d"/>は速度やボールのざらつきなど色々な要因で変化するらしいのですが、流石にひたすら投げて計算を繰り返すのはしんどいので、文献を参考にぽいものを作ります。<br></br>
            </p>
            <div className="flex flex-col items-center">
                                <Image
                                src="/images/Nasa_Cdvsreynolds.png"
                                alt="NASAのグラフ"
                                width={400}
                                height={400}
                                className="my-4 rounded-lg border border-gray-700"
                                />
                                <p className="text-gray-400 text-sm">NASAのグラフ</p>
            </div>
            <h2 className="text-lg float-left font-semibold mb-2">レイノルズ数と抵抗係数の関係</h2>
            <br/><br/>
            <p className="text-gray-400 text-left mb-4">
            NASAが野球ボールの空気抵抗に関して話していたので、そこでの図を参照させてもらいました(破線の方が野球ボール)。<br/>
            このグラフをもとに自分でも似たようなグラフを作ってみようと思いますが、この図にはいくつか特徴があるのでそれを先に説明します。<br/><br/>
            <span className="text-white text-lg font-bold">①急激な下降</span>：グラフでは<InlineMath math="R_e\times10^{-5}≒1.0"/>で急激に抵抗が下降していきます。これを流体力学では<span className="text-xl font-bold text-blue-400">「Drag Crisis(抵抗の危機)」</span>と呼びます。<br/>
            これをグラフで表すためにシグモイド関数と呼ばれるものを使おうと思います。今回使う形は係数kを用いて
            </p>
            <BlockMath math="f(R_e)=\frac{\Delta C_d}{1+e^{k(\frac{R_e-R_{e_{trans}}}{R_{e_{trans}}})}}"/>
            <p className="text-gray-400 text-left mb-4">
            こんな感じのを使います。<br/>
            <InlineMath math="\Delta C_d"/>は最大値と最小値の差です。<InlineMath math="R_{e_{trans}}"/>は急激に低下しているラインの真ん中のレイノルズ数、大体1かな？なんでこんなややこしい式にするかは後で説明しますので<br/>
            一旦範囲が0~<InlineMath math="\Delta C_d"/>でR_eが大きくなるごとに値が小さくなる関数だと思ってください。<br/>
            <span className="text-white text-lg font-bold">②緩やかな上昇</span>：しかし、この後ですが
            ここまで話を聞いてくれた方には少し違和感があると思います。<br/>
            <span className="text-xl font-bold text-blue-400">レイノルズ数の増加に比例して抵抗は小さくなるはずなのにある点で最小値を取った後に増加しています。</span><br/>
            これに関してですが、Elmar Achenback氏の文献を参考にすると、速度が上がるにつれて剥離点が前進してしまうみたいです。<br/>
            </p>
            <div className="flex flex-col items-center">
                                <Image
                                src="/images/separate_point.png"
                                alt="剥離点の説明"
                                width={600}
                                height={600}
                                className="my-4 rounded-lg border border-gray-700"
                                />
                                
            </div>
            <p className="text-gray-400 text-left mb-4">
            さて、緩やかな上昇に関してはlogを使って表現しましょう。係数<InlineMath math="C_{d_{rise}}"/>
            </p>
            <BlockMath math="g(R_e)=C_{rise}log_{10}(max(1,R_e))"/>
            <p className="text-gray-400 text-left mb-4">
            <InlineMath math="R_e\times10^{-5}=1"/>以下のときはこの項は0、係数<InlineMath math="C_{d_{rise}}"/>は<InlineMath math="R_e\times10^{-5}=10"/>になるときの抵抗係数の上がり幅とすればいいでしょう。<br/>

            <span className="text-lg font-bold">結論</span>：①、②と抵抗係数の最小値<InlineMath math="C_{d_{min}}"/>を組み合わせて式を作ると、
            </p>
            <BlockMath math="C_d=C_{d_{min}}+ \frac{C_{d_{laminar}}-C_{d_{min}}}{1+e^{k(\frac{R_e-R_{e_{trans}}}{R_{e_{trans}}})}}+C_{rise}log_{10}(max(1,R_e))"/>
            <p className="text-gray-400 text-left mb-4">
            ここまで説明しても正直あんまり意味がわかんないと思うので、図で説明します。
            </p>
            <div className="flex flex-col items-center">
                                <Image
                                src="/images/tegaki_reynolds_vs_Cd_revised.png"
                                alt="手書きのイメージ"
                                width={600}
                                height={600}
                                className="my-4 rounded-lg border border-gray-700"
                                />
                                
            </div>
            <p className="text-gray-400 text-left mb-4">
            <InlineMath math="C_{d_{laminar}}"/>というのは今まで言っていた抵抗係数の最大値みたいなもんなのですが、細かくいうと<span className="font-bold text-blue-400">抵抗の危機(層流→乱流)が始まる前の抵抗係数</span>です。<br/>
            青は①が強く作用している範囲、赤は②が強く作用している範囲、紫はその両方が作用している範囲となります。<br/>
            <InlineMath math="R_e\times10^{-5}=R_{e_{trans}}"/>の時、<InlineMath math="C_d=\frac{C_{d_{min}}-C_{d_{laminar}}}{2}"/>となり、最大と最小の中間になります。<br/>
            <InlineMath math="R_e\times10^{-5}=10"/>の時、<InlineMath math="C_d=C_{d_{min}}+C_{d_{rise}}"/>です。また、kの値が大きいほど①の下降は急になります。<br/>
            NASAのグラフから<br/>
            </p>
            <ul className="text-gray-400 text-left mb-4 list-disc list-inside">
                    <li><InlineMath math="C_{d_{laminar}}:0.5"/></li>
                    <li><InlineMath math="C_{d_{min}}:0.25"/></li>
                    <li><InlineMath math="R_{e_{trans}}:1.0"/></li>
                    <li><InlineMath math="C_{rise}:0.15"/></li>
            </ul>
            <p className="text-gray-400 text-left mb-4">
            と見積もってプロットした結果が図となっています。
            </p>
            <div className="flex flex-col items-center">
                                <Image
                                src="/images/reynolds_vs_cd.png"
                                alt="プロットの結果"
                                width={600}
                                height={600}
                                className="my-4 rounded-lg border border-gray-700"
                                />
                                <p className="text-xl text-gray-400 text-sm">⚫️：80km/h, 🔴100km/h, 🟣:160km/h, 🟡:320km/h</p>
            </div>
            <p className="text-gray-400 text-left mb-4">
            いかがでしょうか？結構いい感じにできたと思っています。レイノルズ数ではわかりにくいので球速の点も置いてみましたが、<br/>
            私のグラフでは100km/hで抵抗は最も小さくなる計算になりました。私が作った投球シミュレーターではこの計算式を利用しています😎
            </p>
            <h2 className="text-lg float-left font-semibold mb-2">文献・URL</h2>
            <br/><br/>
            <p className="text-gray-400 text-left mb-4">
            [1] ロバート・K・アデア 著, 中村和幸 訳, 『ベースボールの物理学』, 紀伊國屋書店, 1996年<br/>
            [2] NASA Glenn Reserch Center, "Drag on a Baseball", 
            <Link 
            href="https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-on-a-baseball/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
            >
                https://www1.grc.nasa.gov/...
            </Link>
                , Accessed:2025-11-29<br/>
            [3] Elmar Achenbach,"Experiments on the flow past spheres at very high Reynolds numbers", 
            <Link 
            href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/experiments-on-the-flow-past-spheres-at-very-high-reynolds-numbers/439D96006E69382A21B5EBA9E5645C65/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
            >
                https://https://www.cambridge...
            </Link>
                , Accessed:2025-11-29
            
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