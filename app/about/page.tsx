"use client"

import { Award, Building2, ChevronRight, Shield, Target, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutPage() {
    const [scrollY, setScrollY] = useState(0)
    const [activeValue, setActiveValue] = useState(0)

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
            month: "04",
            title: "AEGIS LLP設立",
            description: "地方自治体のDX推進を目指し、9社の専門企業が連携してLLPを設立",
            milestone: "創業",
        },
        {
            year: "2021",
            month: "03",
            title: "初の大型プロジェクト受注",
            description: "A市において包括的なデジタル行政システムを構築、大幅な効率化を実現",
            milestone: "初案件",
        },
        {
            year: "2022",
            month: "06",
            title: "メンバー企業拡大・技術力強化",
            description: "AI・IoT専門企業2社が新たに参加、技術領域を大幅に拡充",
            milestone: "拡大",
        },
        {
            year: "2023",
            month: "09",
            title: "DX専門チーム発足",
            description: "自治体DX専門の技術者チームを組織化、専門性をさらに深化",
            milestone: "組織強化",
        },
        {
            year: "2024",
            month: "01",
            title: "全国展開開始",
            description: "全国15自治体との連携協定を締結、サービス提供エリアを拡大",
            milestone: "全国展開",
        },
    ]

    const achievements = [
        {
            number: "50+",
            label: "完了プロジェクト",
            description: "大規模システム構築実績",
            icon: <Building2 className="w-6 h-6" strokeWidth={1.5} />
        },
        {
            number: "99.9%",
            label: "稼働率",
            description: "システム安定性保証",
            icon: <Shield className="w-6 h-6" strokeWidth={1.5} />
        },
        {
            number: "15",
            label: "自治体パートナー",
            description: "全国展開中",
            icon: <Users className="w-6 h-6" strokeWidth={1.5} />
        },
        {
            number: "92%",
            label: "顧客満足度",
            description: "継続的改善",
            icon: <Award className="w-6 h-6" strokeWidth={1.5} />
        },
    ]

    const values = [
        {
            title: "信頼性",
            titleEn: "Reliability",
            icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
            desc: "確実な実績と継続的なサポート",
            details: "20年以上の経験と実績に基づく、揺るぎない信頼関係の構築",
            points: [
                "ISO27001認証取得",
                "99.9%の稼働率保証",
                "24時間365日サポート体制",
                "定期的な改善提案"
            ]
        },
        {
            title: "革新性",
            titleEn: "Innovation",
            icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
            desc: "最新技術による課題解決",
            details: "AI、IoT、クラウドなど最先端技術を活用した革新的ソリューション",
            points: [
                "最新技術の継続的研究",
                "R&D投資 売上の15%",
                "特許申請 23件",
                "産学連携プロジェクト"
            ]
        },
        {
            title: "連携力",
            titleEn: "Collaboration",
            icon: <Users className="w-8 h-8" strokeWidth={1.5} />,
            desc: "9社の専門性を結集",
            details: "各分野のエキスパートが連携し、包括的な価値を提供",
            points: [
                "9社の専門企業連携",
                "200名以上の技術者",
                "クロスファンクショナルチーム",
                "ワンストップソリューション"
            ]
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    letter-spacing: 0.1em;
                }
            `}</style>

            {/* Hero Section - Fixed spacing issue */}
            <section className="relative h-[80vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/placeholder.svg?height=1080&width=1920)`,
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />

                {/* Content with proper z-index and padding */}
                <div className="relative h-full flex items-center z-10 pt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <div className="mb-8">
                                <span className="text-white/80 text-sm font-medium tracking-widest">ABOUT US</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                会社概要
                            </h1>
                            <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
                                地方自治体のデジタル変革を通じて、<br />
                                より良い社会の実現を目指します
                            </p>
                            <div className="flex items-center gap-8 text-white/80">
                                <div>
                                    <div className="text-3xl font-bold">2020</div>
                                    <div className="text-sm">創業</div>
                                </div>
                                <div className="w-px h-12 bg-white/30" />
                                <div>
                                    <div className="text-3xl font-bold">200+</div>
                                    <div className="text-sm">従業員数</div>
                                </div>
                                <div className="w-px h-12 bg-white/30" />
                                <div>
                                    <div className="text-3xl font-bold">50+</div>
                                    <div className="text-sm">プロジェクト</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                            私たちの使命
                        </h2>
                        <div className="w-24 h-1 mx-auto bg-primary" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-black">
                                デジタルの力で、<br />
                                地域社会に新たな価値を
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                AEGIS LLPは、最先端のデジタル技術と深い専門知識を組み合わせ、地方自治体が直面する課題に革新的な解決策を提供します。
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                私たちは単なる技術提供者ではなく、地域社会の持続可能な発展を共に創造するパートナーとして、お客様と共に歩み続けます。
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <ChevronRight className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                    <span className="text-gray-700">包括的なデジタル変革支援</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ChevronRight className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                    <span className="text-gray-700">9社の専門性を活かしたソリューション</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ChevronRight className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                    <span className="text-gray-700">持続可能な地域社会の実現</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Vertical Mission Text */}
                            <span className="absolute -right-20 top-1/2 transform -translate-y-1/2 text-8xl font-black text-gray-100 select-none vertical-text tracking-wider">
                                Mission
                            </span>
                            <Image
                                src="/placeholder.svg?height=500&width=600"
                                alt="Our Mission"
                                width={600}
                                height={500}
                                className="w-full shadow-xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values - Interactive Design */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            AEGIS LLPの価値観
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            私たちの活動を支える3つの核となる価値観
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="flex gap-0">
                            {/* Value Selector - Vertical Tabs */}
                            <div className="bg-white border border-gray-200 border-r-0 shadow-md">
                                {values.map((value, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveValue(index)}
                                        className={`w-full px-6 py-6 flex items-center gap-3 transition-all duration-200 border-b border-gray-200 last:border-b-0 ${activeValue === index
                                                ? "bg-primary text-white"
                                                : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        {value.icon}
                                        <span className="font-medium">{value.title}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Value Details */}
                            <div className="flex-1">
                                <div className="bg-white shadow-md p-8 md:p-12 border border-gray-200">
                                    <div className="text-center mb-8">
                                        <div className="w-20 h-20 bg-gray-100 text-primary mx-auto mb-6 flex items-center justify-center">
                                            {values[activeValue].icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-black mb-2">
                                            {values[activeValue].title}
                                        </h3>
                                        <p className="text-gray-500">{values[activeValue].titleEn}</p>
                                    </div>
                                    <p className="text-lg text-gray-700 text-center mb-8">
                                        {values[activeValue].desc}
                                    </p>
                                    <p className="text-gray-600 text-center mb-8">
                                        {values[activeValue].details}
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {values[activeValue].points.map((point, idx) => (
                                            <div key={idx} className="bg-gray-50 p-4 flex items-center gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full" />
                                                <span className="text-gray-700">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement Stats */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((stat, index) => (
                            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-gray-100 text-primary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {stat.icon}
                                </div>
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

            {/* Timeline Section - Japanese Style */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            会社の歩み
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            AEGIS LLPの設立から現在までの主要なマイルストーン
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-gray-300" />

                            <div className="space-y-12">
                                {timelineEvents.map((event, index) => (
                                    <div key={index} className="relative flex gap-8">
                                        {/* Date Column */}
                                        <div className="w-20 text-right">
                                            <div className="text-3xl font-black text-gray-300">{event.year}</div>
                                            <div className="text-sm text-gray-500">{event.month}月</div>
                                        </div>

                                        {/* Marker */}
                                        <div className="absolute left-20 w-4 h-4 bg-white border-4 border-primary transform -translate-x-1/2 mt-3" />

                                        {/* Content */}
                                        <div className="flex-1 pb-8 pl-8">
                                            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                                <div className="flex items-start justify-between mb-3">
                                                    <h3 className="text-xl font-bold text-black">{event.title}</h3>
                                                    <span className="bg-primary/10 text-primary px-3 py-1 text-sm">
                                                        {event.milestone}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600">{event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 text-black">
                                目指すのは、<br />
                                「皆が安心して<br />
                                住めるまちの創造」
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                私たちは、デジタル技術の力を通じて、すべての人が安心して暮らせる社会の実現を目指しています。
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                                地方自治体のパートナーとして、住民サービスの向上と行政効率化を両立させ、持続可能な地域社会の発展に貢献します。
                            </p>
                            <Link
                                href="/services"
                                className="inline-flex items-center bg-primary text-white font-bold px-8 py-4 text-lg hover:bg-primary/90 transition-all duration-300"
                            >
                                AEGIS LLPの強みへ
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="デジタル社会の実現1"
                                        fill
                                        className="object-cover shadow-lg"
                                    />
                                </div>
                                <div className="relative h-64">
                                    <Image
                                        src="/placeholder.svg?height=250&width=300"
                                        alt="デジタル社会の実現2"
                                        fill
                                        className="object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6 mt-12">
                                <div className="relative h-64">
                                    <Image
                                        src="/placeholder.svg?height=250&width=300"
                                        alt="デジタル社会の実現3"
                                        fill
                                        className="object-cover shadow-lg"
                                    />
                                </div>
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="デジタル社会の実現4"
                                        fill
                                        className="object-cover shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Information Table */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">会社情報</h2>
                        <p className="text-lg text-gray-600">AEGIS LLPの基本情報</p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="bg-white shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody>
                                    {companyInfo.map((row, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                                            <td className="px-6 py-6 md:px-8 md:py-8 border-b border-gray-200 w-1/3 bg-gray-50">
                                                <div className="font-bold text-lg text-black">
                                                    {row.label}
                                                </div>
                                                <div className="text-sm text-gray-500">{row.labelEn}</div>
                                            </td>
                                            <td className="px-6 py-6 md:px-8 md:py-8 border-b border-gray-200">
                                                <div className="whitespace-pre-line text-gray-700">{row.value}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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