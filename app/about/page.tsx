import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
    const companyInfo = [
        { label: "会社名", value: "AEGIS LLP（エイジス エルエルピー）", labelEn: "Company Name" },
        { label: "設立年月日", value: "2020年4月1日", labelEn: "Establishment Date" },
        { label: "所在地", value: "〒100-0001 東京都千代田区千代田1-1-1\nAEGIS Building 10F", labelEn: "Headquarters" },
        { label: "代表者", value: "代表社員 田中 太郎", labelEn: "Representative" },
        {
            label: "事業内容",
            value:
                "・地方自治体向けデジタル変革支援\n・スマートシティ構築・運営\n・システム統合・最適化\n・ITコンサルティング",
            labelEn: "Business Activities",
        },
        { label: "メンバー企業数", value: "9社（専門分野別パートナー企業）", labelEn: "Member Companies" },
        { label: "従業員数", value: "200名以上（グループ全体）", labelEn: "Employees" },
        { label: "主要取引先", value: "全国15自治体\n各省庁・関連機関", labelEn: "Major Clients" },
        {
            label: "認定・資格",
            value: "・ISO27001認証取得\n・プライバシーマーク取得\n・ISMS認証取得",
            labelEn: "Certifications",
        },
        { label: "年商", value: "50億円（2023年度実績）", labelEn: "Annual Revenue" },
        {
            label: "関連会社",
            value: "グループ企業9社\n（詳細は「メンバー企業」ページ参照）",
            labelEn: "Affiliated Companies",
        },
    ]

    const timelineEvents = [
        {
            year: "2020",
            title: "AEGIS LLP設立",
            description: "地方自治体のDX推進を目指し、9社の専門企業が連携してLLPを設立",
            side: "right",
            number: "01",
        },
        {
            year: "2021",
            title: "初の大型プロジェクト受注",
            description: "A市において包括的なデジタル行政システムを構築、大幅な効率化を実現",
            side: "left",
            number: "02",
        },
        {
            year: "2022",
            title: "メンバー企業拡大・技術力強化",
            description: "AI・IoT専門企業2社が新たに参加、技術領域を大幅に拡充",
            side: "right",
            number: "03",
        },
        {
            year: "2023",
            title: "DX専門チーム発足",
            description: "自治体DX専門の技術者チームを組織化、専門性をさらに深化",
            side: "left",
            number: "04",
        },
        {
            year: "2024",
            title: "全国展開開始",
            description: "全国15自治体との連携協定を締結、サービス提供エリアを拡大",
            side: "right",
            number: "05",
        },
    ]

    const achievements = [
        {
            number: "50+",
            label: "完了プロジェクト",
            description: "大規模システム構築実績",
        },
        {
            number: "99.9%",
            label: "稼働率",
            description: "システム安定性保証",
        },
        {
            number: "15",
            label: "自治体パートナー",
            description: "全国展開中",
        },
        {
            number: "92%",
            label: "顧客満足度",
            description: "継続的改善",
        },
    ]

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section with Background Image */}
            <section className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/placeholder.svg?height=800&width=1920)` }} />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
                                会社概要
                                <span className="block text-2xl md:text-3xl mt-4 font-normal text-gray-200">About AEGIS LLP</span>
                            </h1>
                            <p className="text-xl text-gray-200 mb-8">
                                地方自治体のデジタル変革を通じて、より良い社会の実現を目指します
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden animated-bg">
                <div className="max-w-6xl mx-auto px-5 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 relative">
                            私たちの使命
                            <span className="absolute -top-10 right-0 text-8xl font-black opacity-10 text-secondary">Mission</span>
                        </h2>
                        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute -left-8 top-0 text-6xl font-bold opacity-10 text-gray-600">理念</div>
                            <h3 className="text-3xl font-bold mb-6 gradient-text">
                                デジタルの力で、<br />
                                地域社会に新たな価値を
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                AEGIS LLPは、最先端のデジタル技術と深い専門知識を組み合わせ、地方自治体が直面する課題に革新的な解決策を提供します。
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                私たちは単なる技術提供者ではなく、地域社会の持続可能な発展を共に創造するパートナーとして、お客様と共に歩み続けます。
                            </p>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-5 bg-gradient-to-r from-primary to-secondary opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:-inset-8"></div>
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Our Mission"
                                width={600}
                                height={400}
                                className="w-full shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values - Clean Design */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">AEGIS LLPの価値観</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            私たちの活動を支える3つの核となる価値観
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            {
                                number: "01",
                                title: "信頼性",
                                titleEn: "Reliability",
                                desc: "確実な実績と継続的なサポート",
                                details: "20年以上の経験と実績に基づく、揺るぎない信頼関係の構築",
                            },
                            {
                                number: "02",
                                title: "革新性",
                                titleEn: "Innovation",
                                desc: "最新技術による課題解決",
                                details: "AI、IoT、クラウドなど最先端技術を活用した革新的ソリューション",
                            },
                            {
                                number: "03",
                                title: "連携力",
                                titleEn: "Collaboration",
                                desc: "9社の専門性を結集",
                                details: "各分野のエキスパートが連携し、包括的な価値を提供",
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="p-8">
                                    <div className="text-5xl font-black text-gray-200 mb-4">{value.number}</div>
                                    <h3 className="text-2xl font-bold text-black mb-2">{value.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{value.titleEn}</p>
                                    <p className="text-gray-700 font-medium mb-3">{value.desc}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{value.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievement Stats Section - Clean Design */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                                    {stat.number}
                                </div>
                                <div className="text-lg font-medium mb-1 text-black">{stat.label}</div>
                                <div className="text-sm text-gray-600">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section - Clean Design */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">会社の歩み</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            AEGIS LLPの設立から現在までの主要なマイルストーン
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300" />
                            <div className="space-y-24 md:space-y-32">
                                {timelineEvents.map((item, index) => (
                                    <div key={index} className={`flex items-center ${item.side === "left" ? "flex-row-reverse" : ""}`}>
                                        {/* Timeline Marker */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-white shadow-md z-10 flex items-center justify-center bg-primary">
                                            <div className="text-white font-bold text-lg">{item.number}</div>
                                        </div>
                                        {/* Content Block */}
                                        <div
                                            className={`w-full md:w-5/12 ${item.side === "left" ? "text-right pr-8 md:pr-16" : "pl-8 md:pl-16"}`}
                                        >
                                            <div className="p-6 md:p-8 shadow-md bg-white border border-gray-200">
                                                <div className="text-4xl md:text-5xl font-black mb-4 text-gray-200">
                                                    {item.year}
                                                </div>
                                                <h4 className="text-xl md:text-2xl font-bold mb-4 text-black">{item.title}</h4>
                                                <p className="leading-relaxed text-gray-700">{item.description}</p>
                                            </div>
                                        </div>
                                        {/* Empty space for opposite side */}
                                        <div className="hidden md:block w-5/12" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose Section - Clean Design */}
            <section className="bg-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-20 relative z-10">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-black">
                            目指すのは、
                            <br />
                            「皆が安心して
                            <br />
                            住める
                            <br />
                            まちの創造」
                        </h2>
                        <p className="text-gray-700 text-lg leading-loose mb-10">
                            私たちは、デジタル技術の力を通じて、すべての人が安心して暮らせる社会の実現を目指しています。
                            <br />
                            <br />
                            地方自治体のパートナーとして、住民サービスの向上と行政効率化を両立させ、持続可能な地域社会の発展に貢献します。
                        </p>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 bg-primary text-white font-extrabold text-lg px-8 py-3 hover:bg-primary/90 transition-all duration-300"
                        >
                            AEGIS LLPの強みへ
                            <span className="ml-2">→</span>
                        </Link>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-8">
                        <div className="relative h-56 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="デジタル社会の実現1"
                                fill
                                className="object-cover shadow-xl border border-gray-200"
                            />
                        </div>
                        <div className="relative h-56 mt-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="デジタル社会の実現2"
                                fill
                                className="object-cover shadow-xl border border-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Information Table - Clean Design */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">会社概要</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">AEGIS LLPの基本情報</p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="bg-white border border-gray-200 shadow-md overflow-hidden">
                        <table className="w-full">
                            <tbody>
                                {companyInfo.map((row, index) => (
                                    <tr key={index} className={`hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                        <td className="px-6 py-6 md:px-8 md:py-8 border-b border-gray-200 w-1/3">
                                            <div className="font-bold text-lg mb-1 text-black">
                                                {row.label}
                                            </div>
                                            <div className="text-sm text-gray-500">{row.labelEn}</div>
                                        </td>
                                        <td className="px-6 py-6 md:px-8 md:py-8 border-b border-gray-200">
                                            <div className="whitespace-pre-line text-lg text-gray-700 font-medium">{row.value}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-xl text-gray-600 mb-8">
                            AEGIS LLPについてのお問い合わせ・ご相談はお気軽にどうぞ
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-primary text-white font-bold px-12 py-4 text-lg hover:bg-primary/90 transition-all duration-300"
                        >
                            お問い合わせはこちら →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}