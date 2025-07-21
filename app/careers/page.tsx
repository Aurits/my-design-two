"use client"

import { ArrowRight, Award, Briefcase, Building2, Calendar, ChevronRight, Clock, DollarSign, Heart, MapPin, Sparkles, Target, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function CareersPage() {
    const [activeValueTab, setActiveValueTab] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % 3)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const companyValues = [
        {
            title: "成長機会",
            titleEn: "Growth",
            description: "最先端のDXプロジェクトに参画し、スキルアップとキャリア形成を支援します。",
            icon: <Briefcase className="w-6 h-6" strokeWidth={1.5} />,
            details: [
                "年間研修予算100万円/人",
                "資格取得支援制度",
                "海外カンファレンス参加支援",
                "メンター制度"
            ]
        },
        {
            title: "チームワーク",
            titleEn: "Team",
            description: "9社の専門家と連携し、多様な視点から課題解決に取り組みます。",
            icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
            details: [
                "クロスファンクショナルチーム",
                "定期的な技術共有会",
                "社内勉強会（週1回）",
                "チームビルディング活動"
            ]
        },
        {
            title: "ワークライフバランス",
            titleEn: "Balance",
            description: "柔軟な働き方を推進し、仕事とプライベートの充実をサポートします。",
            icon: <Heart className="w-6 h-6" strokeWidth={1.5} />,
            details: [
                "フレックスタイム制",
                "リモートワーク可",
                "有給取得率85%以上",
                "育児・介護支援制度"
            ]
        }
    ]

    const benefits = [
        { icon: <Award className="w-5 h-5" strokeWidth={1.5} />, title: "社会保険完備", desc: "健康保険、厚生年金、雇用保険、労災保険" },
        { icon: <DollarSign className="w-5 h-5" strokeWidth={1.5} />, title: "賞与年2回", desc: "業績連動型賞与（6月・12月）" },
        { icon: <Calendar className="w-5 h-5" strokeWidth={1.5} />, title: "年間休日125日", desc: "完全週休2日制、祝日、年末年始、夏季休暇" },
        { icon: <Building2 className="w-5 h-5" strokeWidth={1.5} />, title: "オフィス環境", desc: "最新設備、フリードリンク、リフレッシュスペース" },
        { icon: <Sparkles className="w-5 h-5" strokeWidth={1.5} />, title: "自己啓発支援", desc: "書籍購入費補助、セミナー参加費補助" },
        { icon: <Target className="w-5 h-5" strokeWidth={1.5} />, title: "キャリア支援", desc: "キャリア相談、社内公募制度" }
    ]

    const positions = [
        {
            id: "01",
            category: "コンサルタント",
            title: "DXコンサルタント",
            department: "戦略企画部門",
            type: "正社員",
            location: "東京本社",
            experience: "3年以上",
            salary: "800万円〜1200万円",
            description: "地方自治体のDX戦略立案から実行までを支援。課題特定、ソリューション提案、プロジェクト推進を担当。",
            requirements: [
                "コンサルティング経験3年以上",
                "自治体向けプロジェクト経験",
                "DXに関する深い知識",
                "ビジネスレベルの文書作成能力"
            ],
            idealCandidate: "論理的思考力と高いコミュニケーション能力を持ち、顧客の真のニーズを理解できる方",
            team: "10名（マネージャー2名、シニア3名、ジュニア5名）"
        },
        {
            id: "02",
            category: "エンジニア",
            title: "AIエンジニア",
            department: "技術開発部門",
            type: "正社員",
            location: "東京本社／リモート可",
            experience: "2年以上",
            salary: "600万円〜1000万円",
            description: "AIモデルの開発、データ分析、機械学習システムの構築。自治体データの活用による新たな価値創造を担う。",
            requirements: [
                "Python, R等での開発経験",
                "機械学習・深層学習の実装経験",
                "大規模データ処理経験",
                "論文読解能力"
            ],
            idealCandidate: "最新技術への好奇心が強く、実装力と研究力を兼ね備えた方",
            team: "15名（リードエンジニア3名、エンジニア12名）"
        },
        {
            id: "03",
            category: "エンジニア",
            title: "クラウドアーキテクト",
            department: "インフラ部門",
            type: "正社員",
            location: "東京本社／大阪支社",
            experience: "5年以上",
            salary: "700万円〜1100万円",
            description: "AWS, Azure, GCPを用いたクラウドインフラの設計、構築、運用。セキュアでスケーラブルなシステム基盤を構築。",
            requirements: [
                "クラウド構築経験5年以上",
                "ネットワーク・セキュリティ知識",
                "IaC（Infrastructure as Code）経験",
                "認定資格保有者優遇"
            ],
            idealCandidate: "大規模システムの設計経験があり、コスト最適化の視点を持った方",
            team: "8名（アーキテクト3名、エンジニア5名）"
        },
        {
            id: "04",
            category: "マネジメント",
            title: "プロジェクトマネージャー",
            department: "プロジェクト管理部門",
            type: "正社員",
            location: "東京本社",
            experience: "5年以上",
            salary: "900万円〜1300万円",
            description: "自治体DXプロジェクト全体の計画、実行、管理。チームをリードし、プロジェクトを成功に導く。",
            requirements: [
                "PM経験5年以上",
                "20名以上のチームマネジメント経験",
                "予算管理経験",
                "PMP資格保有者優遇"
            ],
            idealCandidate: "ステークホルダー管理に長け、困難な状況でも冷静に対処できる方",
            team: "プロジェクトにより5〜30名規模"
        }
    ]

    const employeeVoices = [
        {
            name: "山田 太郎",
            position: "DXコンサルタント",
            years: "入社3年目",
            department: "戦略企画部門",
            message: "自治体の課題を最新技術で解決する瞬間にやりがいを感じます。チームの支援も手厚く、成長を実感できる環境です。",
            career: "大手コンサルティングファーム → AEGIS LLP",
            image: "/placeholder.svg?height=300&width=300",
        },
        {
            name: "鈴木 花子",
            position: "AIエンジニア",
            years: "入社2年目",
            department: "技術開発部門",
            message: "最先端のAI技術を社会課題解決に活用できることが魅力。リモートワークも活用し、ワークライフバランスも充実しています。",
            career: "AI研究所 → AEGIS LLP",
            image: "/placeholder.svg?height=300&width=300",
        },
        {
            name: "佐藤 次郎",
            position: "プロジェクトマネージャー",
            years: "入社5年目",
            department: "プロジェクト管理部門",
            message: "多様な専門家とのチームワークで大規模プロジェクトを成功に導く。地域社会への貢献を実感できる仕事です。",
            career: "SIer → AEGIS LLP",
            image: "/placeholder.svg?height=300&width=300",
        },
    ]

    return (
        <div className="min-h-screen bg-white pt-20">
            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    letter-spacing: 0.1em;
                }
            `}</style>

            {/* Hero Section - Clean Design */}
            <section className="relative h-[80vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/placeholder.svg?height=1080&width=1920)`,
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">
                                キャリア
                            </h1>
                            <p className="text-2xl text-gray-200 mb-6">採用情報</p>
                            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                                AEGIS LLPで、あなたの技術と情熱を社会の変革に活かしませんか？<br />
                                最先端のDXプロジェクトを通じて、地域社会の未来を共に創造しましょう。
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#positions"
                                    className="inline-block bg-white text-primary font-bold px-8 py-4 text-lg hover:bg-gray-100 transition-all duration-300"
                                >
                                    募集職種を見る →
                                </Link>
                                <Link
                                    href="#culture"
                                    className="inline-block bg-transparent text-white font-bold px-8 py-4 text-lg border-2 border-white hover:bg-white hover:text-primary transition-all duration-300"
                                >
                                    会社を知る
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values - Tabbed Section */}
            <section id="culture" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                            私たちの価値観
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            AEGIS LLPで働く魅力と、私たちが大切にしている価値観
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-gray-100 p-1 inline-flex">
                            {companyValues.map((value, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveValueTab(index)}
                                    className={`px-8 py-3 font-medium transition-all duration-200 ${activeValueTab === index
                                        ? "bg-white text-primary shadow-md"
                                        : "text-gray-600 hover:text-gray-800"
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {value.icon}
                                        <span>{value.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white border border-gray-200 shadow-lg p-8 md:p-12">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-black mb-2">
                                    {companyValues[activeValueTab].title}
                                </h3>
                                <p className="text-gray-500">{companyValues[activeValueTab].titleEn}</p>
                            </div>
                            <p className="text-lg text-gray-600 mb-8 text-center">
                                {companyValues[activeValueTab].description}
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {companyValues[activeValueTab].details.map((detail, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50">
                                        <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                                        <span className="text-gray-700">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            福利厚生
                        </h2>
                        <p className="text-lg text-gray-600">
                            充実した福利厚生で、あなたの生活をサポートします
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions - Japanese Style */}
            <section id="positions" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                            募集職種
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            あなたのスキルと情熱を活かせるポジションがここにあります
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    {/* Position Categories */}
                    <div className="mb-12">
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-6 py-3 bg-gray-100 text-gray-700 font-medium">
                                コンサルタント: 1件
                            </span>
                            <span className="px-6 py-3 bg-gray-100 text-gray-700 font-medium">
                                エンジニア: 2件
                            </span>
                            <span className="px-6 py-3 bg-gray-100 text-gray-700 font-medium">
                                マネジメント: 1件
                            </span>
                        </div>
                    </div>

                    {/* Positions List */}
                    <div className="space-y-8">
                        {positions.map((position) => (
                            <div key={position.id} className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left Side - Position Number */}
                                    <div className="lg:w-24 bg-primary text-white p-6 flex items-center justify-center">
                                        <div className="text-4xl font-black">{position.id}</div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 p-8">
                                        <div className="flex flex-wrap items-start justify-between mb-6">
                                            <div>
                                                <div className="text-sm text-gray-500 mb-2">{position.category}</div>
                                                <h3 className="text-2xl font-bold text-black mb-2">{position.title}</h3>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Building2 className="w-4 h-4" strokeWidth={1.5} />
                                                        {position.department}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" strokeWidth={1.5} />
                                                        {position.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" strokeWidth={1.5} />
                                                        経験{position.experience}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right mt-4 lg:mt-0">
                                                <div className="text-2xl font-bold text-primary">{position.salary}</div>
                                                <div className="text-sm text-gray-500">{position.type}</div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6">{position.description}</p>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-3">必須要件</h4>
                                                <ul className="space-y-2">
                                                    {position.requirements.map((req, index) => (
                                                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                                            <span className="block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-3">求める人物像</h4>
                                                <p className="text-sm text-gray-600">{position.idealCandidate}</p>
                                                <div className="mt-4">
                                                    <span className="text-sm font-medium text-gray-700">チーム規模: </span>
                                                    <span className="text-sm text-gray-600">{position.team}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/careers/${position.id}`}
                                            className="inline-flex items-center bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90 transition-all duration-200"
                                        >
                                            この職種に応募する
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Employee Testimonials - Carousel */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            社員インタビュー
                        </h2>
                        <p className="text-lg text-gray-600">
                            実際に働く社員たちのリアルな声をお届けします
                        </p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                                {employeeVoices.map((voice, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-white shadow-xl p-8 md:p-12">
                                            <div className="grid md:grid-cols-3 gap-8">
                                                <div className="md:col-span-1">
                                                    <div className="relative w-48 h-48 mx-auto mb-6">
                                                        <Image
                                                            src={voice.image}
                                                            alt={voice.name}
                                                            fill
                                                            className="object-cover rounded-full"
                                                        />
                                                    </div>
                                                    <div className="text-center">
                                                        <h3 className="font-bold text-xl text-black">{voice.name}</h3>
                                                        <p className="text-gray-600">{voice.position}</p>
                                                        <p className="text-sm text-gray-500">{voice.years}</p>
                                                        <p className="text-sm text-gray-500 mt-2">{voice.department}</p>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-2">
                                                    <div className="text-4xl text-gray-200 mb-4">"</div>
                                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                                        {voice.message}
                                                    </p>
                                                    <div className="border-t pt-4">
                                                        <span className="text-sm font-medium text-gray-600">キャリアパス: </span>
                                                        <span className="text-sm text-gray-600">{voice.career}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {employeeVoices.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 transition-all duration-300 ${index === currentTestimonial ? "bg-primary w-8" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruitment Process */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            採用プロセス
                        </h2>
                        <p className="text-lg text-gray-600">
                            エントリーから内定まで、約1ヶ月のプロセスです
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="relative">
                        {/* Process Steps */}
                        <div className="space-y-0">
                            {[
                                {
                                    step: "STEP 01",
                                    title: "エントリー・書類選考",
                                    duration: "1週間",
                                    description: "オンラインフォームからエントリー。履歴書・職務経歴書をご提出いただきます。",
                                },
                                {
                                    step: "STEP 02",
                                    title: "一次面接（オンライン）",
                                    duration: "2週間",
                                    description: "現場社員との面接。業務内容の詳細説明と、技術的な質疑応答を行います。",
                                },
                                {
                                    step: "STEP 03",
                                    title: "二次面接（対面/オンライン）",
                                    duration: "3週間",
                                    description: "部門責任者との面接。キャリアビジョンやカルチャーフィットを確認します。",
                                },
                                {
                                    step: "STEP 04",
                                    title: "最終面接・内定",
                                    duration: "4週間",
                                    description: "役員との最終面接。条件面談を経て、内定通知をお送りします。",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex">
                                    <div className="w-32 text-right pr-8 pt-6">
                                        <div className="text-sm text-gray-500">{item.duration}</div>
                                    </div>
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-primary rounded-full" />
                                        {index < 3 && <div className="absolute top-4 left-1.5 w-0.5 h-full bg-gray-300" />}
                                    </div>
                                    <div className="flex-1 pl-8 pb-12">
                                        <div className="bg-gray-50 p-6 -mt-2">
                                            <h3 className="font-bold text-lg text-black mb-1">{item.step}</h3>
                                            <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        一緒に未来を創造しましょう
                    </h2>
                    <p className="text-xl mb-10 text-white/90">
                        AEGIS LLPは、あなたの挑戦を全力でサポートします。<br />
                        最先端技術と社会貢献の両立を、私たちと共に実現しませんか？
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/careers/entry"
                            className="inline-block bg-white text-primary font-bold px-10 py-4 text-lg hover:bg-gray-100 transition-all duration-300"
                        >
                            エントリーする →
                        </Link>
                        <Link
                            href="/careers/seminar"
                            className="inline-block bg-transparent text-white font-bold px-10 py-4 text-lg border-2 border-white hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            採用説明会に参加
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}