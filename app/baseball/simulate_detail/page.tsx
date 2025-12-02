import Link from 'next/link';
import Image from 'next/image';
import MagnusEffect from '@/app/baseball/simulate_detail/Lift/MagnusEffect';

export default function simulate_detailHub(){
    //目次
    const articles=[
        {
            title:"1.抗力(空気抵抗)",
            href:"/baseball/simulate_detail/drag",
            description:"空気抵抗がボールに及ぼす影響について数式やグラフを用いて具体的に説明します(1→2の順番で読んだ方がわかりやすいかも)。",
            color:"text-blue-400",
            border:"border-blue-500/50"
        },
        {
            title:"2.マグヌス力(マグヌス効果)",
            href:"/baseball/simulate_detail/Lift",
            description:"マグヌス力を考えるために必要な式で用いる値(係数)を文献と比較して推測します(1→2の順番で読んだ方がわかりやすいかも)。",
            color:"text-green-400",
            border:"border-green-500/50"
        },
    ]

    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-8 pt-24 ">
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
                <h1 className="text-5xl font-bold mb-4">野球ボールの軌道について</h1>
                <h2 className="text-2xl font-semibold mb-2 ">---------------------⇩Invitation Card⇩---------------------</h2>
                {/*但書*/}
                <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto">
                    {articles.map((article,index)=>(
                        <Link
                        key={index}
                        href={article.href}
                        className={`group bg-gray-800 p-6 rounded-xl border-2 ${article.border} hover:bg-gray-750 transition-all hover:-translate-y-1 hover:shadow-lg`}
                        >
                            <h3 className={`text-xl font-bold mb-3 ${article.color} group-hover:underline`}>
                                {article.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {article.description}
                            </p>
                            <div className="mt-4 text-right text-sm text-gray-500 group-hover:text-white transition-colors">
                                詳しく読む→
                            </div>
                        </Link>
                    ))}

                </div>
                <h2 className="text-2xl font-semibold mb-2 ">---------------------⇧Invitation Card⇧---------------------</h2>
                <h2 className="text-2xl float-left font-semibold mb-2 ">注意</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    この記事は<span className='font-bold text-red-600'>初学者向け</span>に野球ボールの軌道に関する基本的な物理モデルと計算手法を解説します。<br />
                    もっと詳しい内容はInvitation Cardをご覧ください。<br />
                    私は<span className="font-bold text-red-600">物理学科の大学生</span>です。
                    私が学習した内容を元に一生懸命試行錯誤して現実的なモデルを構築したものではありますが、<br />
                    偉い教授や野球の専門家ではないのでこの記事の内容の<span className="font-bold text-red-600" >正確性</span>を保証することはできません。<br />
                    参考にされる際は、その点を十分にご理解の上でお願いいたします。<br />
                    また、この記事では数学的な記述や専門用語が含まれる場合がありますが、できるだけわかりやすく説明するよう努めます。
                    ご不明な点があれば、お気軽にお問い合わせください。
                </p>
                {/*本文*/}
                <h2 className="text-2xl float-left font-semibold mb-2 ">はじめに</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    野球ボールの軌道は、投手がボールを投げた瞬間からキャッチャーミットに到達するまでの間に、様々な力が作用して決まります。<br />
                    これらの力には、重力、空気抵抗、マグヌス力などがあります。<br />
                    この記事では、これらの力がどのようにボールの軌道に影響を与えるのかを解説し、私が開発した野球投球シミュレーターで用いている物理モデルや計算手法について紹介します。
                </p>
                <h2 className="text-2xl float-left font-semibold mb-2 ">物理モデル</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    野球ボールの軌道を計算するためには、まずボールに作用する力をモデル化する必要があります。<br />
                    私のシミュレーターでは、以下の3つの主要な力を考慮しています。<br />
                    <span className="font-bold text-blue-400">
                    1. 空気抵抗: ボールが空気中を移動する際に、進行方向と逆向きに働く力です。<br />
                    2. マグヌス力: ボールが回転している場合に発生する力です。<br />
                    3. 重力: ボールには常に下向きに重力が作用します。<br />
                    </span>
                    最近ではボールの縫い目によって変化する特性(SSW)なども考慮されています。これは主にナックルボールなどの回転数が非常に低い球種で顕著に現れますが、<br/>私のシミュレーターではまだ実装していません。<br />
                    重力に関しては言わずもがなですのでここでは1.と2.について説明します。<br />
                </p>
                <h2 className="text-2xl float-left font-semibold mb-2 ">1.抗力(空気抵抗)</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    空気抵抗は誰でも聞き馴染みがあると思いますが、実際の原理はあまり知られていないかもしれません。<br />
                    空気抵抗は、簡単にいえば<span className="font-bold text-blue-400" >前後の空気の流れの差によって生じる力</span>と解釈できます。<br />
                    ボールが高速で移動し、そこにある空気を押し除けていくと、ボールの通ってきたところには空気がなくなります。<br />
                    圧力というのは空気がどれだけ密集しているかによって決まるので、空気がなくなったところは圧力が低くなります。<br />
                    一方で、ボールの前方にはまだ空気がたくさんあります。つまり<br/>
                    <span className="text-xl font-bold text-blue-400" >ボールの前方は圧力が高く、後方は圧力が低い状態になります。</span><br />
                    この圧力の差が、<span className="text-xl font-bold text-blue-400" >ボールに対して前方から後方へ向かう力として働きます。</span>これが空気抵抗です。<br />
                </p>
                <div className="flex flex-col items-center">
                    <Image
                    src="/images/Drag_Image.png"
                    alt="抵抗のイメージ図"
                    width={400}
                    height={400}
                    className="my-4 rounded-lg border border-gray-700"
                    />
                    <p className="text-gray-400 text-sm">ボールによって空気の流れ(青色矢印)が乱れる図</p>
                </div>
                <h2 className="text-2xl float-left font-semibold mb-2 ">マグヌス力</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    ボールが空気の流れを乱すことは理解いただけたと思います。<br />
                    では、ボールが<span className='font-bold text-blue-400'>回転</span>している場合はどうでしょうか？<br />
                    回転しているボールは、回転の向きによって空気の流れをさらに複雑に乱します。<br /><br/>
                    バックスピン回転(上向きの回転)をしているボールを例に考えてみましょう。<br />
                    ボールの上側では、回転によって空気の流れがボールの進行方向と同じ向きになります。<br />
                    これにより、ボールの上側では空気の流れが速くなり、その空間の空気がスカスカに→圧力が低くなります。<br />
                    一方で、ボールの下側では回転によって空気の流れがボールの進行方向と逆向きになります。<br />
                    これにより、ボールの下側では空気の流れが遅くなり、空気が密集→圧力が高くなります。<br />
                    この圧力の差が、ボールに対して下から上へ向かう力として働きます。これがマグヌス力です。<br /><br/>
                    マグヌス力は、ボールの回転数や速度、空気の密度などによって大きさが変わります。<br />
                    なので上で説明した空気がスカスカかとか密集しているかとかはあくまでイメージであり、実際にはもっと複雑な要因が絡み合っています。(詳しい内容はInvitation Cardに)<br />
                    また、マグヌス効果はバックスピンに限らず起きることで、<br/>
                    <span className='text-xl font-bold text-blue-400'>ピッチャーが掛けたボールの回転方向とマグヌス力の向きは一致</span>することがわかります。<br />

                </p>
                <MagnusEffect/>
                
                <h2 className="text-2xl float-left font-semibold mb-2 ">投球シミュレーター</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    以上のように、野球ボールの軌道は様々な力が複雑に絡み合って決まります。<br />
                    シミュレーターでは実際にどのような計算を行っているのか、4コマ図を用いて説明します。<br /><br />
                    今回はカーブ(ピッチャーから見て左斜め下の回転)を例に説明します。<br />
                    最初に、投手がボールをリリースした瞬間の初速度、回転数、回転軸などの情報を入力し、投げてもらいます(1)<br />
                    ボールは空中にいる間、重力、空気抵抗、マグヌス力の3つの力を常に受け続け、<br />
                    空気抵抗によって後ろに引っ張られながらも、回転しながら進んでいきます。(2)<br />
                    ボールの速さは徐々に遅くなり、同時に重力とマグヌス力によって左斜め下に曲がっていきます。(3)<br />
                    初め明後日の方向に飛んでいきそうな勢いで投げられたボールは、最終的にストライクゾーンに入っていきます。(4)<br />
                </p>
            
                    <div className="flex flex-col items-center">
                    <Image
                    src="/images/ボールの軌道4コマ_revised.png"
                    alt="ボールの軌道4コマ"
                    width={1000}
                    height={1000}
                    className="my-4 rounded-lg border border-gray-700"
                    />
                    </div>
                <p className='text-gray-400 text-left mb-4'>
                    この図ほどカッコよくはできていませんが、私のシミュレーターや実際の投球でも同じことが起きているわけですね。<br />
                </p>
                <h2 className="text-2xl float-left font-semibold mb-2 ">おまけ</h2>
                <br /><br />
                <p className="text-gray-400 text-left mb-4">
                    先ほどマグヌス力と重力がボールの軌道に影響を与えると説明しましたが、<br />
                    浮き上がるようなストレートを投げるにはどうすればいいか？バックスピンによるマグヌス力が重力を上回ればいいですね。<br />
                    それが可能かどうか、計算してみましょう。<br />
                    マグヌス力は回転数と速さによって決まります。
                    回転が速く、球が速いほどマグヌス力は大きくなるわけです。<br />
                    試しに<span className='text-xl font-bold text-blue-400'>160km/hのストレート</span>を投げた時を考えてみましょう。<br />
                    具体的な計算が気になった方はInvitation Cardをご覧いただければと思いますが、この場合、<br />
                    マグヌス力が重力を上回るには<span className='text-xl font-bold text-blue-400'>約3400rpm(1分間に3400回転)</span>以上の回転数が必要になります。<br />
                    火の玉ストレートで有名な藤川球児さんの平均回転数が約2700rpmとのことなので、とんでもない数値であることがわかります。<br />
                    自分の計算が合っていれば全盛期チャップマン(170km/h)が綺麗にバックスピンで且つ3000rpmくらいでストレートを投げれたら浮き上がりますが、現代ではギリ届きそうでまだ無理という感じ。<br/>
                    浮き上がるようなストレートを投げるには少しだけ角度をつけて投げ、ボールがあまり落ちてこないように見せかけないといけませんね。<br />
                </p>
                <div className="flex flex-col items-center">
                <Image
                    src="/images/火の玉ストレート.png"
                    alt="火の玉ストレートの種明かし"
                    width={1000}
                    height={1000}
                    className="my-4 rounded-lg border border-gray-700"
                    />
                </div>

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
