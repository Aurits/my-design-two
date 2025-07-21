"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
    const services = [
        {
            number: "01",
            title: "デジタル変革支援",
            subtitle: "Digital Transformation",
            description:
                "AI、IoT、クラウド技術を活用し、自治体の業務プロセスを最適化。市民サービスの向上と行政効率の大幅な改善を実現します。",
            image: "/placeholder.svg?height=400&width=600",
            features: ["AIによる業務自動化", "市民向けデジタルサービス開発", "データ駆動型意思決定支援"],
            results: {
                efficiency: "業務効率50%向上",
                time: "処理時間80%短縮",
                satisfaction: "市民満足度92%達成"
            }
        },
        {
            number: "02",
            title: "スマートシティ構築",
            subtitle: "Smart City Development",
            description:
                "IoTセンサーネットワークとデータ分析を組み合わせ、持続可能で快適な都市環境を創造。交通、環境、防災など多岐にわたる分野で貢献します。",
            image: "/placeholder.svg?height=400&width=600",
            features: ["IoTインフラ構築", "都市データプラットフォーム", "エネルギー効率化ソリューション"],
            results: {
                cities: "15都市導入実績",
                cost: "運営コスト25%削減",
                energy: "エネルギー効率30%改善"
            }
        },
        {
            number: "03",
            title: "サイバーセキュリティ強化",
            subtitle: "Cybersecurity Enhancement",
            description:
                "自治体の情報資産を脅威から守るため、最新のセキュリティ対策を提供。リスク評価からシステム導入、運用監視まで一貫してサポートします。",
            image: "/placeholder.svg?height=400&width=600",
            features: ["多層防御システム導入", "24時間365日監視体制", "インシデント対応・復旧支援"],
            results: {
                uptime: "稼働率99.9%保証",
                incidents: "インシデント0件達成",
                response: "平均対応時間15分"
            }
        },
    ]

    return (
        <div className="min-h-screen bg-white pt-20">
            <style jsx>{`
                .gradient-text {
                    background: linear-gradient(45deg, #0066cc, #00a0e9);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .service-number-gradient {
                    background: linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }

                .animated-bg::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -50%;
                    width: 200%;
                    height: 100%;
                    background: linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.02) 50%, transparent 70%);
                    animation: slide 15s linear infinite;
                }

                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(50%); }
                }
            `}</style>

            {/* Hero Section with Background Image */}
            <section className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/placeholder.svg?height=800&width=1920)` }} />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
                                サービス・ソリューション
                                <span className="block text-2xl md:text-3xl mt-4 font-normal text-gray-200">Services & Solutions</span>
                            </h1>
                            <p className="text-xl text-gray-200 mb-8">
                                最先端技術で地方自治体のデジタル変革を実現
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Introduction */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-3xl text-gray-600 tracking-wide leading-relaxed font-light mb-12">
                        AI、IoT、クラウド技術を駆使し、<br />
                        地方自治体の課題解決と<br />
                        市民サービスの向上を実現。
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        AEGIS LLPは、9社の専門企業が結集した総合力で、お客様のニーズに最適なソリューションを提供します。
                        デジタル変革から運用保守まで、ワンストップでサポートいたします。
                    </p>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-5xl font-black text-black mb-12 relative pb-5">
                        主要サービス
                        <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary"></span>
                    </h2>

                    {/* Service Cards - Horizontal Layout */}
                    {services.map((service, index) => (
                        <div key={index} className={`mb-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={`bg-white relative overflow-hidden animated-bg ${index === 0 ? 'shadow-xl' : 'shadow-lg'}`}>
                                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12">
                                    <div className="flex-1 relative">
                                        <div className="absolute -top-16 right-0 text-9xl font-black opacity-5 text-gray-400">
                                            {service.number}
                                        </div>
                                        <div className="text-gray-500 text-sm mb-4 font-bold tracking-widest uppercase">SERVICE</div>
                                        <h2 className="text-4xl font-black mb-2 text-black">{service.title}</h2>
                                        <p className="text-lg text-gray-500 mb-6">{service.subtitle}</p>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="mb-8">
                                            <h4 className="font-bold text-black mb-4">主な機能</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span className="text-gray-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Results */}
                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {Object.entries(service.results).map(([key, value]) => (
                                                <div key={key} className="text-center p-4 bg-gray-50 border border-gray-200">
                                                    <p className="font-bold text-lg text-black">{value}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all duration-300"
                                        >
                                            詳細を見る
                                            <span>→</span>
                                        </Link>
                                    </div>
                                    <div className="flex-1 max-w-lg relative group">
                                        <div className="absolute -inset-5 bg-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            className="w-full shadow-lg relative z-10 border border-gray-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-4xl font-black text-black mb-12 text-center">その他のサービス</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "クラウドインフラ構築",
                                description: "セキュアで柔軟なクラウド環境の設計、構築、移行、運用を支援",
                                metric: "コスト40%削減"
                            },
                            {
                                title: "データ分析・可視化",
                                description: "膨大な行政データを分析し、政策立案に役立つインサイトを提供",
                                metric: "意思決定5倍高速化"
                            },
                            {
                                title: "AI・機械学習ソリューション",
                                description: "AIを活用した業務自動化と市民サービスの向上を実現",
                                metric: "応答時間90%短縮"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="text-black font-bold bg-gray-100 p-3 text-center">{service.metric}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="bg-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-20 relative z-10">
                    <div className="flex-1">
                        <h2 className="text-5xl font-black mb-10 leading-tight text-black">
                            目指すのは、<br />「皆が安心して<br />住める<br />まちの創造」
                        </h2>
                        <p className="text-gray-700 text-lg leading-loose mb-10">
                            デジタル技術の力で、すべての市民が安心して暮らせる社会を実現。<br /><br />
                            私たちは地方自治体のパートナーとして、持続可能な地域社会の発展に貢献し続けます。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary text-white font-bold text-lg px-8 py-3 hover:bg-primary/90 transition-all duration-300"
                        >
                            お問い合わせはこちら
                            <span className="ml-2">→</span>
                        </Link>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-8">
                        <div className="relative h-56 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="安全な街づくり1"
                                fill
                                className="object-cover shadow-xl border border-gray-200"
                            />
                        </div>
                        <div className="relative h-56 mt-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="安全な街づくり2"
                                fill
                                className="object-cover shadow-xl border border-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">導入プロセス</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            お客様の課題解決に向けた、AEGIS LLPの標準的な導入プロセスです。
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "ヒアリング・課題分析",
                                description: "お客様の現状と課題を深く理解し、デジタル変革の可能性を特定します。",
                            },
                            {
                                step: "02",
                                title: "ソリューション提案",
                                description: "分析結果に基づき、最適な技術とサービスを組み合わせた具体的なソリューションを提案します。",
                            },
                            {
                                step: "03",
                                title: "設計・開発・導入",
                                description: "合意されたソリューションを設計し、開発・テストを経て、お客様の環境に導入します。",
                            },
                            {
                                step: "04",
                                title: "運用・保守・改善",
                                description: "導入後も継続的な運用サポートと保守を提供し、必要に応じて改善提案を行います。",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative p-6 bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-5xl font-black text-gray-100 mb-4 text-center">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3 text-center">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed text-center">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-4xl mx-auto px-5">
                    <h2 className="text-3xl font-bold text-black mb-6">
                        デジタル変革のパートナーをお探しですか？
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        AEGIS LLPは、お客様のニーズに合わせた最適なソリューションをご提案します。<br />
                        まずはお気軽にご相談ください。
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-primary text-white font-bold px-12 py-4 text-lg hover:bg-primary/90 transition-all duration-300"
                    >
                        無料相談を申し込む →
                    </Link>
                </div>
            </section>
        </div>
    )
}