"use client"

import {
  ArrowRight,
  Building2,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AegisHomepage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentSuccessSlide, setCurrentSuccessSlide] = useState(0)
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0)
  const [currentStatSlide, setCurrentStatSlide] = useState(0)
  const [currentAdvantageSlide, setCurrentAdvantageSlide] = useState(0)
  const [currentWorksSlide, setCurrentWorksSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-carousel effects
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(heroInterval)
  }, [])

  useEffect(() => {
    const successInterval = setInterval(() => {
      setCurrentSuccessSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(successInterval)
  }, [])

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsSlide((prev) => (prev + 1) % 3)
    }, 7000)
    return () => clearInterval(newsInterval)
  }, [])

  useEffect(() => {
    const statInterval = setInterval(() => {
      setCurrentStatSlide((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(statInterval)
  }, [])

  useEffect(() => {
    const advantageInterval = setInterval(() => {
      setCurrentAdvantageSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(advantageInterval)
  }, [])

  useEffect(() => {
    const worksInterval = setInterval(() => {
      setCurrentWorksSlide((prev) => (prev + 1) % 3)
    }, 4500)
    return () => clearInterval(worksInterval)
  }, [])

  // Translation content (JP only)
  const content = {
    heroSlides: [
      {
        bg: "/placeholder.svg?height=1200&width=1920",
        headline: "地方自治体の未来を\nデジタルで変革する",
        subline: "AEGIS LLP - 信頼できる技術パートナー",
        cta: "お問い合わせ",
      },
      {
        bg: "/placeholder.svg?height=1200&width=1920",
        headline: "最先端技術で\n課題を解決",
        subline: "AI・IoT・クラウドを活用した総合ソリューション",
        cta: "技術詳細を見る",
      },
      {
        bg: "/placeholder.svg?height=1200&width=1920",
        headline: "9社の専門性で\nトータルサポート",
        subline: "連携による包括的な自治体DX推進",
        cta: "実績を見る",
      },
    ],
    boardMessage: {
      title: "理事長からのメッセージ",
      quote: "AEGIS LLPは、地方自治体の皆様と共に持続可能な社会の実現を目指しています。",
      name: "田中 太郎",
      position: "代表理事・CEO",
      description:
        "私たちは、最新のデジタル技術と豊富な経験を活かし、地方自治体の皆様の課題解決に全力で取り組んでまいります。9社の専門企業が連携することで、包括的で質の高いサービスを提供し、地域社会の発展に貢献いたします。",
    },
    services: {
      title: "サービス・ソリューション",
      subtitle: "包括的なデジタル変革支援で自治体の未来を創造",
    },
    whyChoose: {
      title: "AEGIS LLPが選ばれる理由",
      subtitle: "確かな実績と革新的な技術で、自治体の課題解決をサポート",
    },
    memberCompanies: {
      title: "グループ連携",
      subtitle: "9社の専門企業が結集した総合力",
      description:
        "各分野のエキスパートが持つ専門性を結集し、包括的なソリューションを提供。お客様のあらゆるニーズにワンストップでお応えします。",
    },
    works: {
      title: "施工実績",
      subtitle: "私たちの技術とサービスの実例",
    },
    recruit: {
      title: "RECRUIT",
      subtitle: "採用情報/スタッフインタビュー",
    },
  }

  const successStories = [
    {
      title: "A市デジタル化プロジェクト",
      image: "/placeholder.svg?height=500&width=800",
      result: "処理時間80%短縮、市民満足度92%",
    },
    {
      title: "B県スマートシティ構想",
      image: "/placeholder.svg?height=500&width=800",
      result: "エネルギー効率25%向上、運営コスト20%削減",
    },
    {
      title: "C市セキュリティ強化",
      image: "/placeholder.svg?height=500&width=800",
      result: "サイバー攻撃検知率99.9%、ダウンタイム0分",
    },
  ]

  const newsItems = [
    {
      date: "2024.01.15",
      category: "プロジェクト",
      title: "新プロジェクト開始のお知らせ",
      excerpt:
        "D市との包括的デジタル変革プロジェクトを開始いたします。最新のAI技術を活用し、市民サービスの向上を目指します。",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      date: "2024.01.10",
      category: "パートナーシップ",
      title: "技術パートナーシップ締結",
      excerpt:
        "AI技術分野での新たなパートナーシップを締結いたしました。これにより、より高度なソリューション提供が可能になります。",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      date: "2024.01.05",
      category: "受賞",
      title: "業界表彰受賞",
      excerpt:
        "自治体DX推進における貢献が評価され、業界賞を受賞いたしました。今後もより一層のサービス向上に努めてまいります。",
      image: "/placeholder.svg?height=800&width=1200",
    },
  ]

  const worksData = [
    {
      date: "2025年5月施工",
      title: "防球ネット設置工事",
      tags: ["防護欄工事", "一般土木・外構工事"],
      location: ["愛知県", "清須市"],
      image: "/placeholder.svg?height=600&width=900",
    },
    {
      date: "2025年6月施工",
      title: "ごみ集積所フェンス設置修繕",
      tags: ["一般土木・外構工事", "その他"],
      location: ["愛知県", "小牧市"],
      image: "/placeholder.svg?height=600&width=900",
    },
    {
      date: "2025年6月施工",
      title: "PCフェンス設置工事",
      tags: ["防護欄工事"],
      location: ["愛知県"],
      image: "/placeholder.svg?height=600&width=900",
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

      {/* Hero Carousel with Parallax */}
      <section id="home" className="relative h-screen overflow-hidden">
        {content.heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Parallax Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.bg})`,
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            />
            {/* Subtle Geometric Overlay Shapes */}
            <div className="absolute inset-0">
              <div
                className="absolute top-20 right-20 w-32 h-32 bg-white/5 animate-float"
                style={{
                  transform: `translateY(${scrollY * 0.3}px) rotate(45deg)`,
                }}
              />
              <div
                className="absolute bottom-40 left-40 w-24 h-24 bg-white/5 animate-pulse-slow"
                style={{
                  transform: `translateY(${scrollY * 0.7}px)`,
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Content - Text Only */}
                <div
                  className="max-w-4xl"
                  style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                  }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white whitespace-pre-line leading-tight">
                    {slide.headline}
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed">{slide.subline}</p>
                  <div className="space-y-4">
                    <Link
                      href="#contact"
                      className="inline-block bg-white text-primary font-bold px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl hover:bg-gray-100 transition-all duration-300"
                    >
                      {slide.cta}
                    </Link>
                    <p className="text-base text-gray-200">専門チームが対応いたします</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {content.heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 transition-all duration-300 ${index === currentHeroSlide ? "bg-white w-8" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Works Section - Horizontal Carousel with Vertical Text */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-2">
              施工実績
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="relative h-[600px]">
              <div
                className="flex absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentWorksSlide * 100}%)` }}
              >
                {worksData.map((work, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-6xl mx-auto h-full">
                      <div className="bg-white overflow-hidden shadow-2xl h-full flex">
                        {/* Left Side - Image (Taking more space) */}
                        <div className="relative w-2/3">
                          <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            className="object-cover"
                          />
                          {/* Overlay with Date */}
                          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3">
                            <p className="text-sm font-bold text-gray-700">
                              {work.date}
                            </p>
                          </div>
                        </div>

                        {/* Right Side - Content with Vertical Text */}
                        <div className="w-1/3 p-8 lg:p-12 bg-gray-50 flex flex-col justify-between">
                          {/* Vertical Title */}
                          <div className="flex-1 flex items-center justify-center">
                            <h3 className="text-3xl lg:text-4xl font-black text-black vertical-text">
                              {work.title}
                            </h3>
                          </div>

                          {/* Tags and Location */}
                          <div className="space-y-6">
                            {/* Tags */}
                            <div className="space-y-3">
                              <p className="text-sm font-bold text-gray-500">施工内容</p>
                              <div className="flex flex-wrap gap-2">
                                {work.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="bg-white border border-gray-300 px-3 py-1 text-sm text-gray-700"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Location */}
                            <div className="space-y-3">
                              <p className="text-sm font-bold text-gray-500">施工場所</p>
                              <div className="flex gap-2">
                                {work.location.map((loc, locIndex) => (
                                  <span
                                    key={locIndex}
                                    className="bg-primary text-white px-3 py-1 text-sm"
                                  >
                                    {loc}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentWorksSlide((prev) => (prev - 1 + worksData.length) % worksData.length)}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 text-gray-700 shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentWorksSlide((prev) => (prev + 1) % worksData.length)}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 text-gray-700 shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {worksData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentWorksSlide(index)}
                  className={`transition-all duration-300 ${index === currentWorksSlide
                    ? "w-16 h-3 bg-primary"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              20年以上の実績と信頼で、安全・安心な施工をお約束します
            </p>
            <button className="text-primary font-bold hover:underline">
              全ての施工実績を見る →
            </button>
          </div>
        </div>
      </section>

      {/* Board Message - Enhanced with more content */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              {content.boardMessage.title}
            </h2>
            <div className="w-24 h-1 mx-auto bg-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-6xl font-bold opacity-5 text-gray-900">
                理念
              </div>
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Board Chairman"
                  fill
                  className="object-cover border border-gray-200"
                />
              </div>
              {/* Additional visual element */}
              <div className="mt-6 p-6 bg-white border-l-4 border-primary">
                <h4 className="font-bold text-lg mb-2 text-black">経営理念</h4>
                <p className="text-gray-600">
                  技術革新を通じて、すべての地域住民が安心して暮らせる社会インフラの構築を目指します。
                </p>
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <blockquote className="text-xl md:text-2xl leading-relaxed border-l-4 border-primary pl-6 md:pl-8 text-gray-700">
                "{content.boardMessage.quote}"
              </blockquote>
              <div className="space-y-2">
                <p className="font-bold text-xl text-black">{content.boardMessage.name}</p>
                <p className="text-lg text-gray-600">{content.boardMessage.position}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                {content.boardMessage.description}
              </p>

              {/* Additional content */}
              <div className="space-y-4 pt-6">
                <h4 className="font-bold text-lg text-black">私たちの約束</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">
                      最新技術の継続的な研究開発により、常に最適なソリューションを提供します
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">
                      地域の特性を深く理解し、カスタマイズされた支援を実現します
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">
                      長期的なパートナーシップを通じて、持続可能な成長を支援します
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Enhanced Design - Visual Cards */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">{content.services.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{content.services.subtitle}</p>
            <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
              自治体の規模や課題に応じて、最適なデジタルソリューションを組み合わせ、段階的な導入計画から運用サポートまで一貫して支援いたします。
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Main Service Card */}
            <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group relative border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="relative">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Digital Transformation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Visual overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-5xl font-black mb-2">01</div>
                      <h3 className="text-2xl font-bold">デジタル変革支援</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    最新のAI技術とクラウドインフラを活用し、行政サービスの効率化と市民満足度の向上を実現します。
                    既存システムとの連携を考慮した段階的な移行計画により、リスクを最小限に抑えながら確実な成果を提供します。
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-4 bg-gray-50">
                      <span className="text-gray-700">業務効率化</span>
                      <span className="font-bold text-2xl text-black">50%向上</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50">
                      <span className="text-gray-700">処理時間短縮</span>
                      <span className="font-bold text-2xl text-black">80%削減</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50">
                      <span className="text-gray-700">市民満足度</span>
                      <span className="font-bold text-2xl text-black">92%達成</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white font-medium py-3 hover:bg-primary/90 transition-colors">
                    詳細を見る →
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Services Grid */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4 text-black">包括的なサービスラインナップ</h3>
                <p className="text-gray-600 mb-6">
                  9社の専門企業が連携し、自治体のあらゆるニーズに対応する総合的なソリューションを提供します。
                </p>
              </div>

              {[
                {
                  number: "02",
                  title: "スマートシティ構築",
                  description: "IoTセンサーとビッグデータ分析により、都市インフラの最適化と住民サービスの向上を実現。エネルギー管理、交通流動、防災システムを統合的に管理します。",
                  metric: "15都市導入",
                  result: "運営コスト25%削減",
                },
                {
                  number: "03",
                  title: "システム統合・最適化",
                  description: "分散した行政システムを統合し、データの一元管理と業務プロセスの標準化を推進。レガシーシステムの現代化により、将来的な拡張性も確保します。",
                  metric: "統合実績50+",
                  result: "メンテナンスコスト30%削減",
                },
                {
                  number: "04",
                  title: "セキュリティ・コンプライアンス",
                  description: "最新のサイバーセキュリティ技術と24時間365日の監視体制により、重要な行政データを保護。定期的な脆弱性診断と職員研修も実施します。",
                  metric: "稼働率99.9%",
                  result: "インシデント0件達成",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-3xl font-black text-gray-200 mb-2">{service.number}</div>
                      <h3 className="text-xl font-bold text-black">{service.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{service.metric}</div>
                      <div className="text-lg font-bold text-primary">{service.result}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-black">
              目指すのは、<br />「皆が安心して<br />住める<br />まちの創造」
            </h2>
            <p className="text-gray-700 text-lg leading-loose mb-10">
              誰もが安心して日々の生活を送るために欠かせない交通安全。<br /><br />
              私たちは2000年の創業から20年以上にわたり、交通安全事業に特化したプロフェッショナル集団として「皆が安心して住めるまちの創造」に取り組んでいます。
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-white font-extrabold text-lg px-8 py-3 hover:bg-primary/90 transition-all duration-300"
            >
              サンケイの強みへ
              <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="relative h-64 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="安全な街づくり1"
                fill
                className="object-cover shadow-xl border border-gray-200"
              />
            </div>
            <div className="relative h-48 mt-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
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

      {/* Why Choose AEGIS - Horizontal Moving Carousel */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">{content.whyChoose.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.whyChoose.subtitle}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
          </div>

          {/* Visual Statistics Banner */}
          <div className="bg-white p-8 md:p-12 mb-16 border border-gray-200">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-black text-primary mb-2">50+</div>
                <p className="text-gray-600">完了プロジェクト</p>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">99%</div>
                <p className="text-gray-600">顧客満足度</p>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">24/7</div>
                <p className="text-gray-600">サポート体制</p>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">200+</div>
                <p className="text-gray-600">専門技術者</p>
              </div>
            </div>
          </div>

          {/* Horizontal Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="relative h-[600px]">
              <div
                className="flex absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentAdvantageSlide * 100}%)` }}
              >
                {[
                  {
                    number: "01",
                    title: "豊富な実績",
                    titleEn: "Proven Track Record",
                    description:
                      "多数の成功事例と高い成功率を誇る実績。お客様のニーズに応える確かな技術力で、継続的な価値を提供します。",
                    details: [
                      "全国15都道府県での導入実績",
                      "平均プロジェクト期間6ヶ月での完遂",
                      "導入後の運用コスト平均30%削減",
                    ],
                    bgImage: "/placeholder.svg?height=400&width=300",
                  },
                  {
                    number: "02",
                    title: "技術革新",
                    titleEn: "Technical Innovation",
                    description:
                      "最先端技術による革新的なソリューション提供。AI、IoT、クラウドを駆使した次世代システムで課題を解決します。",
                    details: [
                      "最新AI技術の積極的な活用",
                      "独自開発の統合プラットフォーム",
                      "継続的な研究開発投資（売上の15%）",
                    ],
                    bgImage: "/placeholder.svg?height=400&width=300",
                  },
                  {
                    number: "03",
                    title: "総合サポート",
                    titleEn: "Comprehensive Support",
                    description:
                      "包括的なサポート体制による安心のサービス。9社の専門企業が連携し、ワンストップで全てのニーズに対応します。",
                    details: [
                      "計画から運用まで一貫サポート",
                      "専門チームによる24時間対応",
                      "定期的な改善提案とアップデート",
                    ],
                    bgImage: "/placeholder.svg?height=400&width=300",
                  },
                ].map((advantage, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-2xl mx-auto">
                      {/* Visual Card Design */}
                      <div className="bg-white border border-gray-200 overflow-hidden shadow-xl">
                        <div className="relative h-64">
                          <Image
                            src={advantage.bgImage}
                            alt={advantage.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute top-6 left-6">
                            <div className="text-6xl font-black text-white/20">{advantage.number}</div>
                          </div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{advantage.title}</h3>
                            <p className="text-sm text-gray-200">{advantage.titleEn}</p>
                          </div>
                        </div>

                        <div className="p-8">
                          <p className="text-gray-600 leading-relaxed mb-6">{advantage.description}</p>

                          {/* Details List */}
                          <div className="space-y-3 mb-6">
                            {advantage.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <p className="text-sm text-gray-700">{detail}</p>
                              </div>
                            ))}
                          </div>

                          <button className="w-full bg-gray-100 text-gray-700 font-medium py-3 hover:bg-primary hover:text-white transition-all duration-300">
                            詳細を見る →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAdvantageSlide(index)}
                  className={`transition-all duration-300 ${index === currentAdvantageSlide
                    ? "w-12 h-3 bg-primary"
                    : "w-3 h-3 bg-gray-300"
                    }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentAdvantageSlide((prev) => (prev - 1 + 3) % 3)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 text-gray-700 rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentAdvantageSlide((prev) => (prev + 1) % 3)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 text-gray-700 rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">成功事例</h2>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSuccessSlide * 100}%)` }}
            >
              {successStories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white shadow-xl max-w-4xl mx-auto border border-gray-100">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-black">{story.title}</h3>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-100 flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="font-semibold text-primary text-lg">{story.result}</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSuccessSlide(index)}
                  className={`w-3 h-3 transition-all duration-300 ${index === currentSuccessSlide ? "bg-primary w-8" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Innovation - Enhanced Visual Design */}
      <section id="technology" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">技術・イノベーション</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              最先端技術を活用し、自治体の課題解決と市民サービスの向上を実現する革新的なソリューションを提供します。
            </p>
          </div>

          {/* Technology Grid with Visual Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">AI・機械学習</h3>
                  <p className="text-gray-600">Artificial Intelligence & Machine Learning</p>
                </div>
                <div className="text-5xl font-black text-gray-100">AI</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                自然言語処理と画像認識技術により、市民からの問い合わせ対応を自動化。
                過去のデータから学習し、より精度の高いサービス提供を実現します。
              </p>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50">
                  <span className="text-gray-600">導入効果</span>
                  <span className="font-bold">応答時間90%短縮</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50">
                  <span className="text-gray-600">精度</span>
                  <span className="font-bold">98.5%の正答率</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">IoTセンサーネットワーク</h3>
                  <p className="text-gray-600">Internet of Things Network</p>
                </div>
                <div className="text-5xl font-black text-gray-100">IoT</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                都市インフラ全体にセンサーを配置し、リアルタイムでデータを収集・分析。
                交通渋滞の解消、エネルギー効率の改善、災害時の迅速な対応を可能にします。
              </p>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50">
                  <span className="text-gray-600">センサー数</span>
                  <span className="font-bold">10,000+設置</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50">
                  <span className="text-gray-600">データ処理</span>
                  <span className="font-bold">リアルタイム分析</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">クラウドプラットフォーム</h3>
                  <p className="text-gray-600">Cloud Computing Platform</p>
                </div>
                <div className="text-5xl font-black text-gray-100">☁</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                高可用性と拡張性を備えたクラウド基盤により、行政システムの安定稼働を保証。
                災害時でもサービスを継続し、市民への影響を最小限に抑えます。
              </p>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50">
                  <span className="text-gray-600">稼働率</span>
                  <span className="font-bold">99.99%保証</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50">
                  <span className="text-gray-600">コスト削減</span>
                  <span className="font-bold">40%のIT費用削減</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">データ分析・可視化</h3>
                  <p className="text-gray-600">Data Analytics & Visualization</p>
                </div>
                <div className="text-5xl font-black text-gray-100">📊</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                膨大な行政データを分析し、直感的なダッシュボードで可視化。
                データに基づいた政策立案と効果測定により、より良い行政運営を支援します。
              </p>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50">
                  <span className="text-gray-600">処理データ量</span>
                  <span className="font-bold">1TB/日</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50">
                  <span className="text-gray-600">意思決定速度</span>
                  <span className="font-bold">5倍高速化</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Roadmap */}
          <div className="bg-primary text-white p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-center">技術ロードマップ</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black mb-2">2024</div>
                <p className="text-white/80">AI基盤の強化とIoT展開</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">2025</div>
                <p className="text-white/80">統合プラットフォームの完成</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">2026</div>
                <p className="text-white/80">次世代スマートシティの実現</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Companies Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              {content.memberCompanies.title}
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
              {content.memberCompanies.subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {content.memberCompanies.description}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-20">
            {/* Company Information Card */}
            <div>
              <div className="bg-white border border-gray-200 overflow-hidden shadow-lg">
                <div className="h-1 w-full bg-primary" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary text-white flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">本社所在地</h3>
                      <p className="text-sm text-gray-600">本社</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-black">AEGIS LLP</h4>
                      <p className="text-lg text-gray-600">
                        〒100-0001<br />
                        東京都千代田区千代田1-1-1
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-2xl md:text-3xl font-bold mb-2 text-primary">
                        <a href="tel:03-1234-5678">TEL: 03-1234-5678</a>
                      </div>
                      <p className="text-sm text-gray-600">[受付時間] 平日 9:00-17:00</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <div className="text-lg font-bold text-gray-700">設立</div>
                        <div className="text-2xl font-bold text-black">2020年</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-700">従業員数</div>
                        <div className="text-2xl font-bold text-black">200名</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Cards - Vertical Carousel */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-700">グループ統計</h3>
              <div className="relative h-48 overflow-hidden">
                <div className="relative h-full">
                  {[
                    {
                      number: "2020年",
                      label: "LLP設立年",
                      percentage: "100%",
                      value: 100,
                    },
                    {
                      number: "200名",
                      label: "専門技術者",
                      percentage: "100%",
                      value: 100,
                    },
                    {
                      number: "50+",
                      label: "完了プロジェクト",
                      percentage: "99%",
                      value: 99,
                    },
                    {
                      number: "15",
                      label: "自治体パートナー",
                      percentage: "全国展開",
                      value: 100,
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`absolute w-full h-full p-6 bg-white shadow-md transition-all duration-700 ease-in-out ${index === currentStatSlide
                        ? "opacity-100 translate-y-0"
                        : index === (currentStatSlide - 1 + 4) % 4
                          ? "opacity-0 -translate-y-full"
                          : "opacity-0 translate-y-full"
                        }`}
                    >
                      <div className="text-center h-full flex flex-col justify-center">
                        <div className="text-4xl font-bold mb-2 text-black">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-600 mb-4">{stat.label}</div>
                        <div className="relative">
                          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-3 bg-gray-400 rounded-full transition-all ease-out ${index === currentStatSlide ? "duration-2000" : "duration-0"
                                }`}
                              style={{
                                width: index === currentStatSlide ? `${stat.value}%` : "0%",
                                transitionDelay: index === currentStatSlide ? "200ms" : "0ms",
                              }}
                            />
                          </div>
                          <div className="text-sm font-bold mt-2 text-gray-600">
                            {stat.percentage}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Carousel Indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStatSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentStatSlide ? "bg-gray-600 w-4" : "bg-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Block */}
          <div id="contact" className="mb-12 md:mb-16">
            <div className="border border-gray-200 overflow-hidden bg-white shadow-lg">
              <div className="grid md:grid-cols-3">
                <div className="p-6 md:p-8 text-center bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                    <a href="tel:0575-28-3313">0575-28-3313</a>
                  </div>
                  <div className="text-gray-600 text-sm">[受付時間] 平日8:10-17:30</div>
                  <div className="text-sm mt-2 text-gray-500">緊急サポート: 24時間対応</div>
                </div>
                <div className="p-6 md:p-8 text-center bg-white border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-xl md:text-2xl font-bold mb-2 text-black">緊急連絡先</div>
                  <div className="text-lg font-bold text-primary">03-1234-5679</div>
                  <div className="text-sm text-gray-600 mt-2">システム障害・セキュリティ</div>
                </div>
                <div className="p-6 md:p-8 text-center bg-gray-50">
                  <Link
                    href="#contact"
                    className="block w-full bg-primary text-white font-bold py-4 text-lg md:text-xl hover:bg-primary/90 transition-colors"
                  >
                    お問い合わせ
                  </Link>
                  <div className="text-sm text-gray-600 mt-2">専門チームが対応いたします</div>
                </div>
              </div>
            </div>
          </div>

          {/* Member Companies Circular Layout */}
          <div className="relative">
            <h3 className="text-2xl font-bold mb-8 text-center text-black">メンバー企業連携</h3>
            <div className="relative w-96 h-96 mx-auto hidden md:block">
              {/* Background connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {Array.from({ length: 8 }, (_, i) => {
                  const angle = (i * 45 - 90) * (Math.PI / 180)
                  const centerX = 192
                  const centerY = 192
                  const radius = 140
                  const endX = centerX + Math.cos(angle) * radius
                  const endY = centerY + Math.sin(angle) * radius

                  return (
                    <line
                      key={i}
                      x1={centerX}
                      y1={centerY}
                      x2={endX}
                      y2={endY}
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                  )
                })}
              </svg>
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary text-white flex items-center justify-center font-bold text-sm z-20 shadow-lg">
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-1" strokeWidth={1.5} />
                  <div className="text-xs">AEGIS</div>
                </div>
              </div>
              {/* Member Company Circles */}
              {[
                { id: "C1", angle: 0 },
                { id: "C2", angle: 45 },
                { id: "C3", angle: 90 },
                { id: "C4", angle: 135 },
                { id: "C5", angle: 180 },
                { id: "C6", angle: 225 },
                { id: "C7", angle: 270 },
                { id: "C8", angle: 315 },
              ].map((company) => {
                const angleRad = ((company.angle - 90) * Math.PI) / 180
                const radius = 140
                const x = Math.cos(angleRad) * radius
                const y = Math.sin(angleRad) * radius
                return (
                  <div
                    key={company.id}
                    className="absolute w-16 h-16 border border-gray-300 bg-white flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer z-10"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                  >
                    <div className="text-center">
                      <Building2
                        className="w-5 h-5 mx-auto mb-1 text-gray-600"
                        strokeWidth={1.5}
                      />
                      <div className="text-xs font-bold text-gray-700">{company.id}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* Mobile version */}
            <div className="grid grid-cols-4 gap-4 md:hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 border border-gray-300 bg-white flex items-center justify-center shadow-sm"
                >
                  <div className="text-center">
                    <Building2 className="w-4 h-4 mx-auto mb-1 text-gray-600" strokeWidth={1.5} />
                    <div className="text-xs font-bold">C{i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-8 max-w-2xl mx-auto">
              各企業の専門性が中央で統合され、シナジー効果を生み出します。専門分野の異なる9社が連携することで、お客様のあらゆるニーズにワンストップで対応いたします。
            </p>
          </div>

          {/* Collaboration Process */}
          <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-primary mt-12 md:mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-black">連携プロセス</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { step: "０１", title: "課題分析", desc: "各社の専門知識を結集" },
                { step: "０２", title: "ソリューション設計", desc: "最適なチーム編成" },
                { step: "０３", title: "実装・展開", desc: "協調的プロジェクト実行" },
                { step: "０４", title: "継続サポート", desc: "統合サポート体制" },
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-primary text-white flex items-center justify-center font-bold text-lg md:text-xl jp-numbers">
                    {process.step}
                  </div>
                  <h4 className="font-bold mb-2 text-black text-sm md:text-base">{process.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{process.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 md:top-8 -right-4 w-8 h-0.5 bg-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Carousel */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">最新情報</h2>
            <div className="w-24 h-1 mx-auto bg-primary" />
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
              >
                {newsItems.map((news, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white border border-gray-200 overflow-hidden shadow-xl">
                      <div className="relative">
                        <div className="relative h-64 md:h-96">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute top-8 left-8">
                          <div
                            className="px-4 py-2 bg-white text-primary text-sm font-medium mb-4"
                          >
                            {news.category}
                          </div>
                          <div className="text-white text-lg mb-2">{news.date}</div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-4">
                            {news.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-8 md:p-12">
                        <p className="text-gray-600 text-base md:text-xl leading-relaxed mb-8">
                          {news.excerpt}
                        </p>
                        <button
                          className="bg-primary text-white font-medium px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:bg-primary/90 transition-colors"
                        >
                          続きを読む
                          <ArrowRight className="w-5 h-5 ml-3 inline" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation */}
            <button
              onClick={() => setCurrentNewsSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length)}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white text-primary border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 z-10 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setCurrentNewsSlide((prev) => (prev + 1) % newsItems.length)}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white text-primary border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 z-10 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <div className="flex justify-center mt-8 space-x-3">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsSlide(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 transition-all duration-300 ${index === currentNewsSlide ? "bg-primary w-8 md:w-10" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  )
}