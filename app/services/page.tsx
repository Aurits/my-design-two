"use client"

import {
    Activity,
    ArrowRight,
    CheckCircle,
    Cloud,
    Cpu,
    Database,
    Shield,
    Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0

    const services = [
        {
            number: "01",
            title: "デジタル変革支援",
            subtitle: "Digital Transformation",
            description:
                "AI、IoT、クラウド技術を活用し、自治体の業務プロセスを最適化。市民サービスの向上と行政効率の大幅な改善を実現します。",
            image: "/placeholder.svg?height=600&width=800",
            icon: <Cpu className="w-8 h-8" />,
            features: [
                "AIによる業務自動化",
                "市民向けデジタルサービス開発",
                "データ駆動型意思決定支援",
                "レガシーシステムの現代化"
            ],
            results: {
                efficiency: { label: "業務効率", value: "50%向上" },
                time: { label: "処理時間", value: "80%短縮" },
                satisfaction: { label: "市民満足度", value: "92%達成" }
            },
            caseStudy: "A市では窓口業務のデジタル化により、市民の待ち時間を平均30分から5分に短縮"
        },
        {
            number: "02",
            title: "スマートシティ構築",
            subtitle: "Smart City Development",
            description:
                "IoTセンサーネットワークとデータ分析を組み合わせ、持続可能で快適な都市環境を創造。交通、環境、防災など多岐にわたる分野で貢献します。",
            image: "/placeholder.svg?height=600&width=800",
            icon: <Activity className="w-8 h-8" />,
            features: [
                "IoTインフラ構築",
                "都市データプラットフォーム",
                "エネルギー効率化ソリューション",
                "リアルタイム都市モニタリング"
            ],
            results: {
                cities: { label: "導入実績", value: "15都市" },
                cost: { label: "運営コスト", value: "25%削減" },
                energy: { label: "エネルギー効率", value: "30%改善" }
            },
            caseStudy: "B県では交通流量最適化により、通勤時間の渋滞を40%削減"
        },
        {
            number: "03",
            title: "サイバーセキュリティ強化",
            subtitle: "Cybersecurity Enhancement",
            description:
                "自治体の情報資産を脅威から守るため、最新のセキュリティ対策を提供。リスク評価からシステム導入、運用監視まで一貫してサポートします。",
            image: "/placeholder.svg?height=600&width=800",
            icon: <Shield className="w-8 h-8" />,
            features: [
                "多層防御システム導入",
                "24時間365日監視体制",
                "インシデント対応・復旧支援",
                "職員向けセキュリティ研修"
            ],
            results: {
                uptime: { label: "稼働率", value: "99.9%保証" },
                incidents: { label: "重大インシデント", value: "0件達成" },
                response: { label: "平均対応時間", value: "15分以内" }
            },
            caseStudy: "C市では包括的セキュリティ対策により、3年連続でインシデント0を達成"
        }
    ]

    const additionalServices = [
        {
            title: "クラウドインフラ構築",
            description: "セキュアで柔軟なクラウド環境の設計、構築、移行、運用を支援",
            icon: <Cloud className="w-6 h-6" />,
            metric: "コスト40%削減"
        },
        {
            title: "データ分析・可視化",
            description: "膨大な行政データを分析し、政策立案に役立つインサイトを提供",
            icon: <Database className="w-6 h-6" />,
            metric: "意思決定5倍高速化"
        },
        {
            title: "システム統合・最適化",
            description: "分散した行政システムを統合し、業務効率を最大化",
            icon: <Users className="w-6 h-6" />,
            metric: "メンテナンス30%削減"
        }
    ]

    const processSteps = [
        {
            step: "01",
            title: "ヒアリング・課題分析",
            description: "お客様の現状と課題を深く理解し、デジタル変革の可能性を特定します。",
            duration: "2-4週間"
        },
        {
            step: "02",
            title: "ソリューション提案",
            description: "分析結果に基づき、最適な技術とサービスを組み合わせた具体的なソリューションを提案します。",
            duration: "1-2週間"
        },
        {
            step: "03",
            title: "設計・開発・導入",
            description: "合意されたソリューションを設計し、開発・テストを経て、お客様の環境に導入します。",
            duration: "3-6ヶ月"
        },
        {
            step: "04",
            title: "運用・保守・改善",
            description: "導入後も継続的な運用サポートと保守を提供し、必要に応じて改善提案を行います。",
            duration: "継続的"
        }
    ]

    return (
        <div className="min-h-screen bg-white pt-20">
            <style jsx>{`
        .jp-heading {
          font-feature-settings: "palt";
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .jp-body-text {
          font-feature-settings: "palt";
          line-height: 1.8;
          letter-spacing: 0.04em;
        }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.1em;
        }
      `}</style>

            {/* Hero Section with Background Image */}

            <section className="relative h-[80vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/placeholder.svg?height=1080&width=1920)`,
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative h-full flex items-center z-10 pt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <div className="mb-8">
                                <span className="text-white/80 text-sm font-medium tracking-widest"> SERVICES & SOLUTIONS</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                会社概要
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16 jp-body-text">
                                最先端技術で地方自治体のデジタル変革を実現し、<br />
                                より良い社会の実現を目指します
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Service Introduction */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-light leading-relaxed text-gray-700 mb-8 jp-heading">
                                AI、IoT、クラウド技術を駆使し、<br />
                                地方自治体の課題解決と<br />
                                市民サービスの向上を実現。
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-gray-600 jp-body-text mb-6">
                                AEGIS LLPは、9社の専門企業が結集した総合力で、お客様のニーズに最適なソリューションを提供します。
                                デジタル変革から運用保守まで、ワンストップでサポートいたします。
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary">50+</div>
                                    <div className="text-sm text-gray-600">導入実績</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary">99%</div>
                                    <div className="text-sm text-gray-600">満足度</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary">24/7</div>
                                    <div className="text-sm text-gray-600">サポート</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4 jp-heading">主要サービス</h2>
                        <div className="w-24 h-1 mx-auto bg-primary" />
                    </div>

                    {/* Service Cards */}
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-xl overflow-hidden"
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                <div className="h-1 w-full bg-primary" />
                                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                    {/* Image Side */}
                                    <div className={`relative h-[500px] ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        <div className="absolute top-8 left-8">
                                            <div className="w-16 h-16 bg-white/90 flex items-center justify-center text-primary">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="text-6xl font-bold text-white/20 mb-4">{service.number}</div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <div className="mb-8">
                                            <h3 className="text-3xl font-bold text-black mb-2 jp-heading">{service.title}</h3>
                                            <p className="text-gray-600">{service.subtitle}</p>
                                        </div>

                                        <p className="text-gray-700 text-lg leading-relaxed mb-8 jp-body-text">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="mb-8">
                                            <h4 className="font-bold text-black mb-4">主な機能</h4>
                                            <div className="grid grid-cols-2 gap-3">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                                                        <span className="text-sm text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Results */}
                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {Object.entries(service.results).map(([key, result]) => (
                                                <div key={key} className="text-center">
                                                    <div className="text-2xl font-bold text-primary">{result.value}</div>
                                                    <div className="text-sm text-gray-600">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Case Study */}
                                        <div className="bg-gray-50 p-4 mb-8">
                                            <p className="text-sm text-gray-700">
                                                <span className="font-bold">導入事例: </span>
                                                {service.caseStudy}
                                            </p>
                                        </div>

                                        <Link
                                            href={`/services/${service.number}`}
                                            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 hover:bg-primary/90 transition-all duration-300"
                                        >
                                            詳細を見る
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4 jp-heading">その他のサービス</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto jp-body-text">
                            お客様のニーズに合わせて、幅広いサービスをご提供しています
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {additionalServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-black jp-heading">{service.title}</h3>
                                <p className="text-gray-600 mb-6 jp-body-text">{service.description}</p>
                                <div className="bg-gray-50 p-3 text-center">
                                    <div className="text-lg font-bold text-primary">{service.metric}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-black mb-4 jp-heading">導入プロセス</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto jp-body-text">
                            お客様の課題解決に向けた、AEGIS LLPの標準的な導入プロセスです
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="relative">
                        {/* Process Line */}
                        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-300" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="w-16 h-16 bg-primary text-white font-bold text-xl flex items-center justify-center mb-6 relative z-10">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-3 jp-heading">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 jp-body-text">
                                            {item.description}
                                        </p>
                                        <div className="text-sm text-primary font-medium">
                                            期間: {item.duration}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-black jp-heading">
                                目指すのは、<br />
                                「皆が安心して<br />
                                住める<br />
                                まちの創造」
                            </h2>
                            <p className="text-gray-700 text-lg leading-loose mb-10 jp-body-text">
                                デジタル技術の力で、すべての市民が安心して暮らせる社会を実現。<br /><br />
                                私たちは地方自治体のパートナーとして、持続可能な地域社会の発展に貢献し続けます。
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-lg px-8 py-3 hover:bg-primary/90 transition-all duration-300"
                            >
                                お問い合わせはこちら
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative h-64">
                                <Image
                                    src="/placeholder.svg?height=250&width=350"
                                    alt="安全な街づくり1"
                                    fill
                                    className="object-cover shadow-lg"
                                />
                            </div>
                            <div className="relative h-48 mt-8">
                                <Image
                                    src="/placeholder.svg?height=200&width=300"
                                    alt="安全な街づくり2"
                                    fill
                                    className="object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-black mb-6 jp-heading">
                        デジタル変革のパートナーをお探しですか？
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 jp-body-text">
                        AEGIS LLPは、お客様のニーズに合わせた最適なソリューションをご提案します。<br />
                        まずはお気軽にご相談ください。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-primary text-white font-bold px-12 py-4 text-lg hover:bg-primary/90 transition-all duration-300"
                        >
                            無料相談を申し込む
                        </Link>
                        <Link
                            href="/works"
                            className="inline-block bg-white text-primary border-2 border-primary font-bold px-12 py-4 text-lg hover:bg-gray-50 transition-all duration-300"
                        >
                            導入事例を見る
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}