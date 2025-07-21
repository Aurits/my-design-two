"use client"

import { BarChart3, Brain, Cloud, Cpu, Database, Lightbulb, Lock, Network, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function TechnologyPage() {
    const [currentTechSlide, setCurrentTechSlide] = useState(0)
    const [currentInnovationSlide, setCurrentInnovationSlide] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    const [activeTab, setActiveTab] = useState(0)

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Auto-carousel for featured technologies
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTechSlide((prev) => (prev + 1) % 3)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const featuredTechnologies = [
        {
            title: "次世代AI技術",
            subtitle: "深層学習で行政サービスを革新",
            description: "自然言語処理と画像認識で市民対応を自動化",
            image: "/placeholder.svg?height=800&width=1200",
            stats: { accuracy: "98.5%", speed: "90%短縮", satisfaction: "92%" }
        },
        {
            title: "スマートIoTネットワーク",
            subtitle: "都市をリアルタイムで可視化",
            description: "10,000+のセンサーで都市データを収集・分析",
            image: "/placeholder.svg?height=800&width=1200",
            stats: { sensors: "10,000+", data: "1TB/日", response: "リアルタイム" }
        },
        {
            title: "クラウドインフラ",
            subtitle: "高可用性・高セキュリティ基盤",
            description: "99.99%の稼働率を保証する次世代インフラ",
            image: "/placeholder.svg?height=800&width=1200",
            stats: { uptime: "99.99%", cost: "-40%", scalability: "無限大" }
        }
    ]

    const technologies = [
        {
            number: "01",
            title: "AI・機械学習",
            titleEn: "Artificial Intelligence",
            description:
                "深層学習、自然言語処理、画像認識など、最先端のAI技術を活用し、自治体業務の自動化、データ分析、予測モデル構築を支援します。",
            icon: <Brain className="w-8 h-8" strokeWidth={1.5} />,
            image: "/placeholder.svg?height=400&width=600",
            applications: [
                "住民からの問い合わせ対応（チャットボット）",
                "防犯カメラ映像解析による異常検知",
                "行政文書の自動分類・要約",
                "需要予測による資源最適化"
            ],
            stats: { efficiency: "+80%", accuracy: "98.5%", time: "-90%" }
        },
        {
            number: "02",
            title: "IoTセンサーネットワーク",
            titleEn: "Internet of Things",
            description:
                "都市インフラ、環境、交通など、様々な分野にセンサーを配置し、リアルタイムデータを収集。スマートシティの基盤を構築します。",
            icon: <Network className="w-8 h-8" strokeWidth={1.5} />,
            image: "/placeholder.svg?height=400&width=600",
            applications: [
                "交通量・渋滞状況のリアルタイム監視",
                "河川水位・土砂災害リスクのモニタリング",
                "ゴミ収集の最適化",
                "エネルギー消費の可視化"
            ],
            stats: { sensors: "10,000+", data: "1TB/日", coverage: "100%" }
        },
        {
            number: "03",
            title: "クラウドプラットフォーム",
            titleEn: "Cloud Computing",
            description:
                "AWS, Azure, Google Cloudなどの主要クラウドサービスを活用し、柔軟性、拡張性、コスト効率に優れた自治体システムを構築・運用します。",
            icon: <Cloud className="w-8 h-8" strokeWidth={1.5} />,
            image: "/placeholder.svg?height=400&width=600",
            applications: [
                "行政システムのクラウド移行",
                "データバックアップ・災害対策",
                "サーバーレスアーキテクチャ導入",
                "マルチクラウド環境の構築"
            ],
            stats: { uptime: "99.99%", cost: "-40%", scale: "∞" }
        },
        {
            number: "04",
            title: "データ分析・可視化",
            titleEn: "Data Analytics",
            description:
                "ビッグデータ分析ツールとBI（ビジネスインテリジェンス）ツールを駆使し、複雑な行政データを分かりやすく可視化。データ駆動型意思決定を支援します。",
            icon: <BarChart3 className="w-8 h-8" strokeWidth={1.5} />,
            image: "/placeholder.svg?height=400&width=600",
            applications: [
                "人口動態・税収データの分析",
                "住民ニーズの傾向分析",
                "政策効果の評価",
                "予算最適化シミュレーション"
            ],
            stats: { insights: "5倍", speed: "+70%", accuracy: "95%" }
        },
        {
            number: "05",
            title: "サイバーセキュリティ",
            titleEn: "Cyber Security",
            description:
                "情報漏洩、サイバー攻撃から自治体システムを守るため、最新のセキュリティ技術と専門知識を提供。強固な防御体制を構築します。",
            icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
            image: "/placeholder.svg?height=400&width=600",
            applications: [
                "多要素認証・アクセス管理",
                "脆弱性診断・ペネトレーションテスト",
                "セキュリティインシデント対応",
                "ゼロトラストアーキテクチャ"
            ],
            stats: { detection: "99.9%", incidents: "0件", response: "24/7" }
        },
        {
            number: "06",
            title: "ブロックチェーン",
            titleEn: "Blockchain",
            description:
                "透明性と信頼性の高いデータ管理を実現するブロックチェーン技術。行政手続きの簡素化や、地域通貨システムへの応用を研究・開発しています。",
            icon: <Lightbulb className="w-8 h-8" strokeWidth={1.5} />,
            image: "/placeholder.svg?height=400&width=600",
            applications: [
                "公文書の電子署名・真正性証明",
                "地域ポイント・通貨システム",
                "投票システムの透明性向上",
                "サプライチェーン管理"
            ],
            stats: { transparency: "100%", trust: "完全", efficiency: "+60%" }
        }
    ]

    const researchAreas = [
        {
            title: "量子コンピューティング",
            description: "次世代の計算能力で複雑な都市問題を解決",
            icon: <Cpu className="w-6 h-6" strokeWidth={1.5} />,
            progress: 35
        },
        {
            title: "エッジAI",
            description: "リアルタイム処理で即座に価値を提供",
            icon: <Brain className="w-6 h-6" strokeWidth={1.5} />,
            progress: 65
        },
        {
            title: "デジタルツイン",
            description: "仮想空間で都市をシミュレーション",
            icon: <Database className="w-6 h-6" strokeWidth={1.5} />,
            progress: 50
        },
        {
            title: "次世代セキュリティ",
            description: "AIを活用した予測的セキュリティ",
            icon: <Lock className="w-6 h-6" strokeWidth={1.5} />,
            progress: 80
        }
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

            {/* Hero Section with Carousel */}
            <section className="relative h-screen overflow-hidden">
                {featuredTechnologies.map((tech, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentTechSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Parallax Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${tech.image})`,
                                transform: `translateY(${scrollY * 0.5}px)`,
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

                        {/* Animated Overlay Elements */}
                        <div className="absolute inset-0">
                            <div
                                className="absolute top-20 right-20 w-48 h-48 bg-white/5 animate-float"
                                style={{
                                    transform: `translateY(${scrollY * 0.3}px) rotate(45deg)`,
                                }}
                            />
                            <div
                                className="absolute bottom-40 left-40 w-32 h-32 bg-white/5 animate-pulse-slow"
                                style={{
                                    transform: `translateY(${scrollY * 0.7}px)`,
                                }}
                            />
                        </div>

                        <div className="relative h-full flex items-center">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-4xl">
                                    <div className="text-sm font-bold text-white/80 mb-4 tracking-widest">
                                        TECHNOLOGY & INNOVATION
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                        {tech.title}
                                    </h1>
                                    <p className="text-2xl md:text-3xl mb-6 text-gray-100">
                                        {tech.subtitle}
                                    </p>
                                    <p className="text-xl mb-10 text-gray-200">
                                        {tech.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-8 mb-10 max-w-2xl">
                                        {Object.entries(tech.stats).map(([key, value]) => (
                                            <div key={key} className="text-white">
                                                <div className="text-4xl font-bold mb-1">{value}</div>
                                                <div className="text-sm text-gray-300 capitalize">{key}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="bg-white text-primary font-bold px-10 py-4 text-lg hover:bg-gray-100 transition-all duration-300">
                                        技術詳細を見る →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Carousel Controls */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {featuredTechnologies.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTechSlide(index)}
                            className={`transition-all duration-300 ${index === currentTechSlide ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Technology Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                            技術ソリューション
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            AEGIS LLPが提供する6つの主要技術で、自治体のデジタル変革を実現します
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    {/* Technology Grid - Staggered Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className={`group relative ${index % 2 === 1 ? "md:mt-16" : ""
                                    }`}
                            >
                                <div className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                    {/* Header with solid color */}
                                    <div className="h-2 bg-primary" />

                                    <div className="p-8">
                                        {/* Number and Icon */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <div className="text-5xl font-black text-gray-200 mb-2">{tech.number}</div>
                                                <h3 className="text-2xl font-bold text-black">{tech.title}</h3>
                                                <p className="text-sm text-gray-500">{tech.titleEn}</p>
                                            </div>
                                            <div className="w-16 h-16 bg-gray-100 text-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {tech.description}
                                        </p>

                                        {/* Applications */}
                                        <div className="mb-6">
                                            <h4 className="font-bold text-gray-700 mb-3">主な応用例：</h4>
                                            <div className="space-y-2">
                                                {tech.applications.map((app, appIndex) => (
                                                    <div key={appIndex} className="flex items-start">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                                        <span className="text-sm text-gray-600">{app}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                            {Object.entries(tech.stats).map(([key, value]) => (
                                                <div key={key} className="text-center">
                                                    <div className="text-xl font-bold">{value}</div>
                                                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Deep Dive - Tabbed Interface */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            技術詳細
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            各技術の詳細な仕組みと実装例をご紹介します
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {technologies.map((tech, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 font-medium transition-all duration-200 ${activeTab === index
                                    ? "bg-primary text-white"
                                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {tech.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white border border-gray-200 shadow-xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-black mb-6">
                                    {technologies[activeTab].title}
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {technologies[activeTab].description}
                                </p>
                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-6">
                                        <h4 className="font-bold text-black mb-3">技術スタック</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"].map((tech) => (
                                                <span key={tech} className="bg-white px-3 py-1 text-sm border border-gray-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-block bg-primary text-white font-bold px-8 py-3 hover:bg-primary/90 transition-colors duration-200"
                                    >
                                        導入相談をする →
                                    </Link>
                                </div>
                            </div>
                            <div className="relative h-96">
                                <Image
                                    src={technologies[activeTab].image}
                                    alt={technologies[activeTab].title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research & Development */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            研究開発への取り組み
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            常に未来を見据え、新たな技術の可能性を追求しています
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    {/* Research Areas with Progress Bars */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {researchAreas.map((area, index) => (
                            <div key={index} className="bg-gray-50 p-6 border border-gray-200">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">{area.title}</h3>
                                        <p className="text-gray-600">{area.description}</p>
                                    </div>
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center">
                                        {area.icon}
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>研究進捗</span>
                                        <span>{area.progress}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200">
                                        <div
                                            className="h-2 bg-primary transition-all duration-1000"
                                            style={{ width: `${area.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Innovation Partners */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 shadow-lg border-l-4 border-primary">
                            <h3 className="text-2xl font-bold text-black mb-4">オープンイノベーション</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                大学、研究機関、スタートアップ企業との連携を積極的に行い、新たな技術やソリューションの共同開発に取り組んでいます。
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    <span className="text-gray-600">産学連携プロジェクト: 15件</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    <span className="text-gray-600">共同研究パートナー: 8機関</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 shadow-lg border-l-4 border-primary">
                            <h3 className="text-2xl font-bold text-black mb-4">未来技術への投資</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                量子コンピューティング、エッジAI、デジタルツインなど、将来的に自治体DXに大きな影響を与える可能性のある技術分野への研究開発投資を強化しています。
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    <span className="text-gray-600">R&D投資額: 売上の15%</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                    <span className="text-gray-600">特許申請数: 23件</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Roadmap */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        技術ロードマップ
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-black mb-4">2024</div>
                            <h3 className="text-xl font-bold mb-2">基盤強化</h3>
                            <p className="text-white/80">AI基盤の強化とIoT展開の加速</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-black mb-4">2025</div>
                            <h3 className="text-xl font-bold mb-2">統合プラットフォーム</h3>
                            <p className="text-white/80">全技術を統合したプラットフォーム完成</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-black mb-4">2026</div>
                            <h3 className="text-xl font-bold mb-2">次世代都市OS</h3>
                            <p className="text-white/80">完全自律型スマートシティの実現</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        最先端技術で、自治体の未来を創造しませんか？
                    </h2>
                    <p className="text-xl text-gray-600 mb-10">
                        AEGIS LLPの技術力を活用して、住民サービスの向上と業務効率化を実現します。
                        まずは技術デモンストレーションからご体験ください。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-primary text-white font-bold px-10 py-4 text-lg hover:bg-primary/90 transition-all duration-300"
                        >
                            技術相談を申し込む →
                        </Link>
                        <Link
                            href="/demo"
                            className="inline-block bg-white text-primary font-bold px-10 py-4 text-lg border-2 border-primary hover:bg-gray-50 transition-all duration-300"
                        >
                            デモを体験する
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}