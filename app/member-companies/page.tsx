"use client"

import { ArrowRight, Award, BarChart3, Brain, Building2, ChevronRight, Cloud, Layers, Lightbulb, Network, Shield, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MemberCompaniesPage() {
    const [selectedCompany, setSelectedCompany] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    const [activeCategory, setActiveCategory] = useState("すべて")

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const memberCompanies = [
        {
            id: "01",
            name: "株式会社デジタルソリューションズ",
            nameEn: "Digital Solutions Inc.",
            description:
                "AI・機械学習を活用したデータ分析、予測モデル構築、自動化ソリューションを提供。自治体の業務効率化と意思決定支援を強力に推進します。",
            expertise: "AI・データ分析",
            category: "技術",
            established: "2015年",
            employees: "50名",
            projects: "25件",
            specialties: ["自然言語処理", "画像認識", "予測分析", "業務自動化"],
            achievements: [
                "市民問い合わせ対応時間を80%削減",
                "行政文書処理の自動化率95%達成",
                "AI予測モデルによる政策効果向上"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <Brain className="w-6 h-6" strokeWidth={1.5} />,
        },
        {
            id: "02",
            name: "スマートインフラテック株式会社",
            nameEn: "Smart InfraTech Co., Ltd.",
            description:
                "IoTセンサーネットワークの設計・構築・運用。スマートシティ構想におけるインフラのデジタル化を支援し、都市の持続可能性を高めます。",
            expertise: "IoT・スマートシティ",
            category: "インフラ",
            established: "2016年",
            employees: "35名",
            projects: "30件",
            specialties: ["センサーネットワーク", "データ収集基盤", "リアルタイム監視", "予防保全"],
            achievements: [
                "10,000台以上のIoTセンサー導入",
                "インフラ保守コスト30%削減",
                "災害予測精度90%以上"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <Network className="w-6 h-6" strokeWidth={1.5} />,
        },
        {
            id: "03",
            name: "クラウドコネクト株式会社",
            nameEn: "Cloud Connect Corporation",
            description:
                "クラウドプラットフォームの導入・移行・最適化。セキュアでスケーラブルなクラウド環境を構築し、自治体システムの柔軟性を向上させます。",
            expertise: "クラウドインフラ",
            category: "技術",
            established: "2014年",
            employees: "45名",
            projects: "40件",
            specialties: ["AWS", "Azure", "Google Cloud", "ハイブリッドクラウド"],
            achievements: [
                "99.99%の稼働率保証",
                "システム運用コスト40%削減",
                "災害復旧時間を1/10に短縮"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <Cloud className="w-6 h-6" strokeWidth={1.5} />,
        },
        {
            id: "04",
            name: "株式会社セキュリティガード",
            nameEn: "Security Guard Inc.",
            description:
                "サイバーセキュリティ対策のコンサルティングからシステム導入、24時間監視まで一貫したサービスを提供。自治体の情報資産を強固に守ります。",
            expertise: "サイバーセキュリティ",
            category: "セキュリティ",
            established: "2013年",
            employees: "60名",
            projects: "50件",
            specialties: ["脅威検知", "インシデント対応", "セキュリティ監査", "職員教育"],
            achievements: [
                "重大インシデント0件継続中",
                "24時間365日監視体制",
                "セキュリティ認証100%取得支援"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <Shield className="w-6 h-6" strokeWidth={1.5} />,
        },
        {
            id: "05",
            name: "地域DX推進機構",
            nameEn: "Regional DX Promotion Organization",
            description:
                "地域に特化したデジタル変革のコンサルティング。住民サービスの向上、地域経済の活性化に向けた戦略立案と実行をサポートします。",
            expertise: "地域コンサルティング",
            category: "コンサルティング",
            established: "2017年",
            employees: "30名",
            projects: "35件",
            specialties: ["地域戦略立案", "住民サービス設計", "地域経済分析", "官民連携"],
            achievements: [
                "住民満足度平均20%向上",
                "地域経済効果100億円創出",
                "DX推進自治体15団体支援"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
        },
        {
            id: "06",
            name: "株式会社データビジョン",
            nameEn: "Data Vision Co., Ltd.",
            description:
                "ビッグデータの収集・分析・可視化ソリューション。複雑なデータを分かりやすく提示し、自治体のデータ駆動型意思決定を支援します。",
            expertise: "データ可視化",
            category: "技術",
            established: "2015年",
            employees: "40名",
            projects: "45件",
            specialties: ["BI開発", "ダッシュボード設計", "データ統合", "レポート自動化"],
            achievements: [
                "意思決定速度5倍向上",
                "データ活用率90%達成",
                "リアルタイムダッシュボード50件構築"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <BarChart3 className="w-6 h-6" strokeWidth={1.5} />,
        },
        {
            id: "07",
            name: "次世代システム開発合同会社",
            nameEn: "Next Generation Systems LLC",
            description:
                "最新技術を用いたシステム開発。レガシーシステムのモダナイゼーションや、新たな行政サービスのシステム構築を担います。",
            expertise: "システム開発",
            category: "技術",
            established: "2016年",
            employees: "55名",
            projects: "60件",
            specialties: ["アジャイル開発", "マイクロサービス", "API設計", "UI/UX"],
            achievements: [
                "開発期間平均50%短縮",
                "システム満足度95%以上",
                "モダナイゼーション20件完了"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <Lightbulb className="w-6 h-6" strokeWidth={1.5} />,
        },
        {
            id: "08",
            name: "株式会社インフラマネジメント",
            nameEn: "Infrastructure Management Inc.",
            description:
                "公共インフラの老朽化対策、維持管理のデジタル化。ドローンやAIを活用した点検・診断システムで、効率的なインフラ管理を実現します。",
            expertise: "インフラ管理",
            category: "インフラ",
            established: "2014年",
            employees: "45名",
            projects: "55件",
            specialties: ["ドローン点検", "AI診断", "予防保全", "アセットマネジメント"],
            achievements: [
                "点検コスト60%削減",
                "インフラ寿命20%延長",
                "事故予防率99%達成"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <Building2 className="w-6 h-6" strokeWidth={1.5} />,
        },
        {
            id: "09",
            name: "教育DXパートナーズ",
            nameEn: "Education DX Partners",
            description:
                "教育分野におけるデジタル変革を支援。オンライン学習プラットフォームの導入や、教育データの活用により、質の高い教育環境を構築します。",
            expertise: "教育DX",
            category: "教育",
            established: "2018年",
            employees: "25名",
            projects: "20件",
            specialties: ["eラーニング", "学習分析", "個別最適化", "教員支援"],
            achievements: [
                "学習効果30%向上",
                "教員負担40%軽減",
                "オンライン授業満足度85%"
            ],
            image: "/placeholder.svg?height=400&width=600",
            icon: <Award className="w-6 h-6" strokeWidth={1.5} />,
        },
    ]

    const categories = ["すべて", "技術", "インフラ", "コンサルティング", "セキュリティ", "教育"]

    const filteredCompanies = activeCategory === "すべて"
        ? memberCompanies
        : memberCompanies.filter(company => company.category === activeCategory)

    return (
        <div className="min-h-screen bg-white pt-20">
            <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.1em;
        }
      `}</style>

            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/placeholder.svg?height=800&width=1920)`,
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                グループ連携企業
                            </h1>
                            <p className="text-xl text-gray-200 leading-relaxed">
                                AEGIS LLPを構成する9社の専門企業。<br />
                                各社の独自の強みと専門性を結集し、包括的なデジタル変革を実現します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network Visualization Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                            連携ネットワーク
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            9社が有機的に連携し、シナジー効果を生み出します
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    {/* Network Diagram */}
                    <div className="relative w-full max-w-4xl mx-auto h-96 mb-16">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary text-white flex items-center justify-center z-20">
                            <div className="text-center">
                                <Layers className="w-8 h-8 mx-auto mb-2" strokeWidth={1.5} />
                                <div className="font-bold">AEGIS LLP</div>
                            </div>
                        </div>
                        {memberCompanies.slice(0, 8).map((company, index) => {
                            const angle = (index * 45) * Math.PI / 180
                            const radius = 150
                            const x = Math.cos(angle) * radius
                            const y = Math.sin(angle) * radius

                            return (
                                <div
                                    key={index}
                                    className="absolute w-20 h-20 bg-white border-2 border-gray-300 shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                                    style={{
                                        left: `calc(50% + ${x}px - 40px)`,
                                        top: `calc(50% + ${y}px - 40px)`,
                                    }}
                                    onClick={() => setSelectedCompany(index)}
                                >
                                    <div className="text-center">
                                        {company.icon}
                                        <div className="text-xs font-bold mt-1">{company.id}</div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                            {memberCompanies.slice(0, 8).map((_, index) => {
                                const angle = (index * 45) * Math.PI / 180
                                const radius = 150
                                const x = Math.cos(angle) * radius
                                const y = Math.sin(angle) * radius

                                return (
                                    <line
                                        key={index}
                                        x1="50%"
                                        y1="50%"
                                        x2={`calc(50% + ${x}px)`}
                                        y2={`calc(50% + ${y}px)`}
                                        stroke="#e5e7eb"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                    />
                                )
                            })}
                        </svg>
                    </div>

                    {/* Selected Company Details */}
                    <div className="bg-white border border-gray-200 shadow-lg p-8">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-2">
                                    {memberCompanies[selectedCompany].name}
                                </h3>
                                <p className="text-gray-500">{memberCompanies[selectedCompany].nameEn}</p>
                            </div>
                            <div className="text-4xl font-black text-gray-200">
                                {memberCompanies[selectedCompany].id}
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">
                            {memberCompanies[selectedCompany].description}
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-bold text-gray-700 mb-2">企業情報</h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>設立: {memberCompanies[selectedCompany].established}</p>
                                    <p>従業員数: {memberCompanies[selectedCompany].employees}</p>
                                    <p>実績: {memberCompanies[selectedCompany].projects}</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700 mb-2">専門分野</h4>
                                <div className="flex flex-wrap gap-2">
                                    {memberCompanies[selectedCompany].specialties.map((specialty, idx) => (
                                        <span key={idx} className="bg-gray-100 px-3 py-1 text-xs text-gray-700">
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700 mb-2">主な成果</h4>
                                <ul className="space-y-1">
                                    {memberCompanies[selectedCompany].achievements.map((achievement, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                                            <span className="block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Member Companies Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                            メンバー企業一覧
                        </h2>
                        <div className="w-24 h-1 mx-auto bg-primary" />
                    </div>

                    {/* Category Filter */}
                    <div className="mb-12">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-3 font-medium transition-all duration-200 ${activeCategory === category
                                        ? "bg-primary text-white"
                                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="text-center mt-4 text-gray-600">
                            表示中: <span className="font-bold text-black">{filteredCompanies.length}社</span>
                        </div>
                    </div>

                    {/* Companies List */}
                    <div className="space-y-8">
                        {filteredCompanies.map((company) => (
                            <div key={company.id} className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Company Number */}
                                    <div className="lg:w-24 bg-gray-100 p-6 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl font-black text-gray-300">{company.id}</div>
                                            {company.icon}
                                        </div>
                                    </div>

                                    {/* Company Details */}
                                    <div className="flex-1 p-8">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-black mb-2">{company.name}</h3>
                                            <p className="text-gray-500 mb-1">{company.nameEn}</p>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <span className="bg-primary/10 text-primary px-3 py-1">{company.expertise}</span>
                                                <span>設立: {company.established}</span>
                                                <span>従業員: {company.employees}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6">{company.description}</p>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-gray-700 mb-3">専門分野</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {company.specialties.map((specialty, idx) => (
                                                        <span key={idx} className="bg-gray-100 px-3 py-1 text-xs text-gray-700">
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-700 mb-3">主な実績</h4>
                                                <ul className="space-y-1">
                                                    {company.achievements.slice(0, 2).map((achievement, idx) => (
                                                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                                                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 mr-1 flex-shrink-0" strokeWidth={1.5} />
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <span className="text-sm text-gray-500">
                                                プロジェクト実績: <span className="font-bold text-black">{company.projects}</span>
                                            </span>
                                            <Link
                                                href={`/member-companies/${company.id}`}
                                                className="inline-flex items-center text-primary font-medium hover:gap-3 transition-all duration-200"
                                            >
                                                詳細を見る
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Synergy Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            AEGIS LLPの総合力
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            各社の専門性を結集し、お客様に最適なソリューションを提供します
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 shadow-lg border-t-4 border-primary">
                            <h3 className="text-xl font-bold text-black mb-4">包括的ソリューション</h3>
                            <p className="text-gray-600 mb-4">
                                9社の専門企業が連携し、AI、IoT、クラウド、セキュリティなど多岐にわたる分野に対応
                            </p>
                            <div className="text-3xl font-bold text-primary">200+</div>
                            <div className="text-sm text-gray-500">完了プロジェクト</div>
                        </div>

                        <div className="bg-white p-8 shadow-lg border-t-4 border-primary">
                            <h3 className="text-xl font-bold text-black mb-4">最先端技術</h3>
                            <p className="text-gray-600 mb-4">
                                各分野のエキスパートが最新技術を駆使し、革新的なアプローチで課題を解決
                            </p>
                            <div className="text-3xl font-bold text-primary">400+</div>
                            <div className="text-sm text-gray-500">専門技術者</div>
                        </div>

                        <div className="bg-white p-8 shadow-lg border-t-4 border-primary">
                            <h3 className="text-xl font-bold text-black mb-4">豊富な実績</h3>
                            <p className="text-gray-600 mb-4">
                                全国の自治体で培った経験とノウハウを活かし、確実な成果を提供
                            </p>
                            <div className="text-3xl font-bold text-primary">50+</div>
                            <div className="text-sm text-gray-500">自治体パートナー</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        総合力で、自治体DXを成功へ導きます
                    </h2>
                    <p className="text-xl mb-10 text-white/90">
                        9社の専門性を結集したAEGIS LLPが、<br />
                        あなたの自治体のデジタル変革を全面的にサポートします。
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-primary font-bold px-10 py-4 text-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        お問い合わせ・ご相談 →
                    </Link>
                </div>
            </section>
        </div>
    )
}