"use client"

import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Building2,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Lightbulb,
  Network,
  Shield,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AegisHomepage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentSuccessSlide, setCurrentSuccessSlide] = useState(0)
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0)
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
      tags: ["防護欄工事", "一般土木・外構工事", "愛知県", "清須市"],
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      date: "2025年6月施工",
      title: "ごみ集積所フェンス設置修繕",
      tags: ["一般土木・外構工事", "その他", "愛知県", "小牧市"],
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      date: "2025年6月施工",
      title: "PCフェンス設置工事",
      tags: ["防護欄工事", "愛知県"],
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
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
            {/* Geometric Overlay Shapes */}
            <div className="absolute inset-0">
              <div
                className="absolute top-20 right-20 w-32 h-32 bg-secondary/10 animate-float"
                style={{
                  transform: `translateY(${scrollY * 0.3}px) rotate(45deg)`,
                }}
              />
              <div
                className="absolute bottom-40 left-40 w-24 h-24 bg-cta/10 animate-pulse-slow"
                style={{
                  transform: `translateY(${scrollY * 0.7}px)`,
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Content */}
                <div
                  className="p-8 md:p-12 max-w-2xl bg-black/30 backdrop-blur-sm border-l-4 border-secondary"
                  style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                  }}
                >
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white whitespace-pre-line">
                    {slide.headline}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">{slide.subline}</p>
                  <div className="space-y-2">
                    <Link
                      href="#contact"
                      className="inline-block bg-cta text-white font-medium px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                    >
                      {slide.cta}
                    </Link>
                    <p className="text-sm text-gray-200 mt-2">専門チームが対応いたします</p>
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

      {/* Works Grid Section - NEW from construction site */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 relative pb-5">
            {content.works.title}
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-primary to-secondary animate-expandWidth"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {worksData.map((work, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-8 relative z-20">
                  <div className="text-sm text-secondary mb-2 font-semibold tracking-wider">
                    {work.date}
                  </div>
                  <h3 className="text-2xl font-extrabold mb-5 text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 text-primary px-4 py-2 text-sm font-semibold border-2 border-transparent hover:border-primary hover:text-white transition-all duration-300 relative overflow-hidden hover-fill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Message */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {content.boardMessage.title}
            </h2>
            <div className="w-24 h-1 mx-auto bg-cta" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 text-4xl md:text-6xl font-bold opacity-10 text-gray-600">
                理念
              </div>
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Board Chairman"
                  fill
                  className="object-cover border-2 border-secondary"
                />
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <blockquote className="text-xl md:text-2xl leading-relaxed border-l-4 border-cta pl-6 md:pl-8 text-gray-600">
                "{content.boardMessage.quote}"
              </blockquote>
              <div className="space-y-2">
                <p className="font-bold text-xl text-primary">{content.boardMessage.name}</p>
                <p className="text-lg text-gray-600">{content.boardMessage.position}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                {content.boardMessage.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Enhanced Design */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{content.services.title}</h2>
            <p className="text-lg md:text-xl text-gray-600">{content.services.subtitle}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Main Service Card with gradient background */}
            <div className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group relative animated-bg">
              <div className="absolute top-0 left-0 w-full h-2 bg-cta" />
              <div className="relative">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Digital Transformation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-6 left-6 w-16 h-16 bg-cta flex items-center justify-center text-white font-bold text-2xl jp-numbers">
                  ０１
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                    デジタル変革支援 / Digital Transformation
                  </h3>
                  <ul className="space-y-2 mb-4 text-gray-700">
                    <li>• AI活用による業務自動化</li>
                    <li>• 市民向けデジタルサービス</li>
                    <li>• データ駆動型意思決定支援</li>
                  </ul>
                  <div className="inline-block px-4 py-2 bg-secondary text-white font-medium mb-4">
                    業務効率50%向上実績
                  </div>
                  <div>
                    <button className="font-medium text-cta hover:opacity-80 transition-opacity liquid-button relative overflow-hidden px-4 py-2">
                      詳細を見る →
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Secondary Services */}
            <div className="space-y-6">
              {[
                {
                  number: "０２",
                  title: "スマートシティ構築",
                  image: "/placeholder.svg?height=250&width=400",
                  metric: "15都市導入実績",
                  description: "IoT・センサーネットワーク構築",
                  color: "bg-secondary",
                },
                {
                  number: "０３",
                  title: "システム統合",
                  image: "/placeholder.svg?height=250&width=400",
                  metric: "コスト30%削減",
                  description: "レガシーシステム現代化",
                  color: "bg-primary",
                },
                {
                  number: "０４",
                  title: "セキュリティ強化",
                  image: "/placeholder.svg?height=250&width=400",
                  metric: "99.9%稼働率保証",
                  description: "24/7監視・対応体制",
                  color: "bg-gray-600",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex">
                    <div className="relative w-32 flex-shrink-0">
                      <div className="relative w-32 h-32">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div
                        className={`absolute top-2 left-2 w-10 h-10 ${service.color} flex items-center justify-center text-white font-bold text-sm jp-numbers`}
                      >
                        {service.number}
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold mb-2 text-primary">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      <div
                        className={`inline-block px-2 py-1 text-xs font-medium text-white ${service.color}`}
                      >
                        {service.metric}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section - NEW from construction site */}
      <section className="bg-gradient-to-br from-primary to-secondary py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full w-full h-full animate-rotate-slow"></div>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-white drop-shadow-lg">
              目指すのは、<br />「皆が安心して<br />住める<br />まちの創造」
            </h2>
            <p className="text-white/90 text-lg leading-loose mb-10">
              誰もが安心して日々の生活を送るために欠かせない交通安全。<br /><br />
              私たちは2000年の創業から20年以上にわたり、交通安全事業に特化したプロフェッショナル集団として「皆が安心して住めるまちの創造」に取り組んでいます。
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-primary font-extrabold text-lg px-8 py-3 hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              サンケイの強みへ
              <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="安全な街づくり1"
                fill
                className="object-cover shadow-2xl transform -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="安全な街づくり2"
                fill
                className="object-cover shadow-2xl transform translate-x-2 translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AEGIS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{content.whyChoose.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.whyChoose.subtitle}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 bg-cta" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Award className="w-16 h-16" strokeWidth={1.5} />,
                title: "豊富な実績",
                titleEn: "Proven Track Record",
                description:
                  "多数の成功事例と高い成功率を誇る実績。お客様のニーズに応える確かな技術力で、継続的な価値を提供します。",
                color: "bg-cta",
                bgImage: "/placeholder.svg?height=400&width=300",
              },
              {
                icon: <Lightbulb className="w-16 h-16" strokeWidth={1.5} />,
                title: "技術革新",
                titleEn: "Technical Innovation",
                description:
                  "最先端技術による革新的なソリューション提供。AI、IoT、クラウドを駆使した次世代システムで課題を解決します。",
                color: "bg-secondary",
                bgImage: "/placeholder.svg?height=400&width=300",
              },
              {
                icon: <Shield className="w-16 h-16" strokeWidth={1.5} />,
                title: "総合サポート",
                titleEn: "Comprehensive Support",
                description:
                  "包括的なサポート体制による安心のサービス。9社の専門企業が連携し、ワンストップで全てのニーズに対応します。",
                color: "bg-primary",
                bgImage: "/placeholder.svg?height=400&width=300",
              },
            ].map((advantage, index) => (
              <div key={index} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={advantage.bgImage}
                    alt={advantage.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className={`w-20 h-20 ${advantage.color} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}>
                      {advantage.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{advantage.title}</h3>
                    <p className="text-sm text-gray-200">{advantage.titleEn}</p>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <p className="text-gray-600 leading-relaxed mb-6">{advantage.description}</p>
                  <button className="w-full bg-cta text-white font-medium py-3 hover:opacity-90 transition-all duration-300 group-hover:shadow-lg">
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">成功事例</h2>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSuccessSlide * 100}%)` }}
            >
              {successStories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white shadow-xl max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-primary">{story.title}</h3>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-secondary/20 flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-secondary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="font-semibold text-cta text-lg">{story.result}</p>
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
                  className={`w-3 h-3 transition-all duration-300 ${index === currentSuccessSlide ? "bg-cta w-8" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Innovation */}
      <section id="technology" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">技術・イノベーション</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" strokeWidth={1.5} />,
                title: "AI・機械学習",
                color: "text-cta",
              },
              {
                icon: <Network className="w-8 h-8" strokeWidth={1.5} />,
                title: "IoTセンサーネットワーク",
                color: "text-secondary",
              },
              {
                icon: <Cloud className="w-8 h-8" strokeWidth={1.5} />,
                title: "クラウドプラットフォーム",
                color: "text-cta",
              },
              {
                icon: <BarChart3 className="w-8 h-8" strokeWidth={1.5} />,
                title: "データ分析・可視化",
                color: "text-secondary",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 text-center shadow group hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className={`flex justify-center mb-4 ${tech.color}`}>{tech.icon}</div>
                <h3 className="text-sm md:text-lg font-bold text-primary">{tech.title}</h3>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-sm">詳細</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruit Section - NEW from construction site */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-32 text-center relative overflow-hidden">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-gradient-radial from-primary/5 to-transparent animate-float"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-gradient-radial from-primary/5 to-transparent animate-float" style={{ animationDirection: "reverse" }}></div>

        <h2 className="text-6xl md:text-7xl font-thin tracking-widest mb-5 gradient-text-animated animate-shimmer">
          {content.recruit.title}
        </h2>
        <p className="text-lg text-gray-600 mb-16 tracking-wider">{content.recruit.subtitle}</p>

        <div className="flex justify-center gap-8 mb-16 flex-wrap max-w-5xl mx-auto">
          <div className="relative w-52 h-80">
            <Image
              src="/placeholder.svg?height=300&width=200"
              alt="スタッフ1"
              fill
              className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-primary/30 transition-all duration-500 gradient-border animate-bobble-1"
            />
          </div>
          <div className="relative w-52 h-80 mt-10">
            <Image
              src="/placeholder.svg?height=300&width=200"
              alt="スタッフ2"
              fill
              className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-primary/30 transition-all duration-500 gradient-border animate-bobble-2"
            />
          </div>
          <div className="relative w-52 h-80 mt-5">
            <Image
              src="/placeholder.svg?height=300&width=200"
              alt="スタッフ3"
              fill
              className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-primary/30 transition-all duration-500 gradient-border animate-bobble-3"
            />
          </div>
          <div className="relative w-52 h-80 mt-16">
            <Image
              src="/placeholder.svg?height=300&width=200"
              alt="スタッフ4"
              fill
              className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-primary/30 transition-all duration-500 gradient-border animate-bobble-4"
            />
          </div>
        </div>

        <Link
          href="/careers"
          className="inline-block bg-white text-primary px-12 py-4 border-4 border-primary font-extrabold text-lg tracking-wide hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden liquid-button"
        >
          詳しくはこちら →
        </Link>
      </section>

      {/* Member Companies Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {content.memberCompanies.title}
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-secondary">
              {content.memberCompanies.subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {content.memberCompanies.description}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 bg-cta" />
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-20">
            {/* Company Information Card */}
            <div>
              <div className="bg-white border-2 border-secondary overflow-hidden shadow-xl">
                <div className="h-3 w-full bg-secondary" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">本社所在地</h3>
                      <p className="text-sm text-gray-600">本社</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-primary">AEGIS LLP</h4>
                      <p className="text-lg text-gray-600">
                        〒100-0001<br />
                        東京都千代田区千代田1-1-1
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-2xl md:text-3xl font-bold mb-2 text-secondary">
                        <a href="tel:03-1234-5678">TEL: 03-1234-5678</a>
                      </div>
                      <p className="text-sm text-gray-600">[受付時間] 平日 9:00-17:00</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <div className="text-lg font-bold text-primary">設立</div>
                        <div className="text-2xl font-bold text-cta">2020年</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary">従業員数</div>
                        <div className="text-2xl font-bold text-secondary">200名</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-primary">グループ統計</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    number: "2020年",
                    label: "LLP設立年",
                    percentage: "100%",
                    color: "text-primary",
                    borderColor: "border-primary",
                    bgColor: "bg-primary",
                  },
                  {
                    number: "200名",
                    label: "専門技術者",
                    percentage: "100%",
                    color: "text-secondary",
                    borderColor: "border-secondary",
                    bgColor: "bg-secondary",
                  },
                  {
                    number: "50+",
                    label: "完了プロジェクト",
                    percentage: "99%",
                    color: "text-cta",
                    borderColor: "border-cta",
                    bgColor: "bg-cta",
                  },
                  {
                    number: "15",
                    label: "自治体パートナー",
                    percentage: "全国展開",
                    color: "text-gray-600",
                    borderColor: "border-gray-600",
                    bgColor: "bg-gray-600",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`p-4 md:p-6 border-2 ${stat.borderColor} bg-gray-50 group hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="text-center">
                      <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-gray-600 mb-3">{stat.label}</div>
                      <div className="relative">
                        <div className="w-full h-2 bg-gray-200">
                          <div
                            className={`h-2 ${stat.bgColor} transition-all duration-1000`}
                            style={{
                              width: stat.percentage.includes("%") ? stat.percentage : "100%",
                            }}
                          />
                        </div>
                        <div className={`text-xs font-bold mt-1 ${stat.color}`}>
                          {stat.percentage}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information Block */}
          <div id="contact" className="mb-12 md:mb-16">
            <div className="border-2 border-cta overflow-hidden bg-white shadow-xl">
              <div className="grid md:grid-cols-3">
                <div className="p-6 md:p-8 text-center bg-primary border-b md:border-b-0 md:border-r border-cta">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">
                    <a href="tel:0575-28-3313">0575-28-3313</a>
                  </div>
                  <div className="text-white text-sm">[受付時間] 平日8:10-17:30</div>
                  <div className="text-sm mt-2 text-secondary">緊急サポート: 24時間対応</div>
                </div>
                <div className="p-6 md:p-8 text-center bg-white border-b md:border-b-0 md:border-r border-cta">
                  <div className="text-xl md:text-2xl font-bold mb-2 text-cta">緊急連絡先</div>
                  <div className="text-lg font-bold text-primary">03-1234-5679</div>
                  <div className="text-sm text-gray-600 mt-2">システム障害・セキュリティ</div>
                </div>
                <div className="p-6 md:p-8 text-center bg-gray-50">
                  <Link
                    href="#contact"
                    className="block w-full bg-cta text-white font-bold py-4 text-lg md:text-xl hover:opacity-90 transition-opacity"
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
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">メンバー企業連携</h3>
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
                      stroke="hsl(var(--secondary))"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  )
                })}
              </svg>
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-secondary flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg">
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-1" strokeWidth={1.5} />
                  <div className="text-xs">AEGIS</div>
                </div>
              </div>
              {/* Member Company Circles */}
              {[
                { id: "C1", angle: 0, color: "border-secondary bg-secondary" },
                { id: "C2", angle: 45, color: "border-primary bg-primary" },
                { id: "C3", angle: 90, color: "border-gray-600 bg-gray-600" },
                { id: "C4", angle: 135, color: "border-secondary bg-secondary" },
                { id: "C5", angle: 180, color: "border-primary bg-primary" },
                { id: "C6", angle: 225, color: "border-gray-600 bg-gray-600" },
                { id: "C7", angle: 270, color: "border-secondary bg-secondary" },
                { id: "C8", angle: 315, color: "border-primary bg-primary" },
              ].map((company) => {
                const angleRad = ((company.angle - 90) * Math.PI) / 180
                const radius = 140
                const x = Math.cos(angleRad) * radius
                const y = Math.sin(angleRad) * radius
                return (
                  <div
                    key={company.id}
                    className={`absolute w-16 h-16 border-4 ${company.color.split(' ')[0]} bg-white flex items-center justify-center group hover:shadow-lg transition-all duration-300 cursor-pointer z-10`}
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                  >
                    <div className="text-center">
                      <Building2
                        className={`w-5 h-5 mx-auto mb-1 ${company.color.split(' ')[1].replace('bg-', 'text-')}`}
                        strokeWidth={1.5}
                      />
                      <div className="text-xs font-bold text-gray-700">{company.id}</div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        詳細
                      </div>
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
                  className="w-16 h-16 border-2 border-secondary bg-white flex items-center justify-center shadow"
                >
                  <div className="text-center">
                    <Building2 className="w-4 h-4 mx-auto mb-1 text-secondary" strokeWidth={1.5} />
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
          <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-secondary mt-12 md:mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">連携プロセス</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { step: "０１", title: "課題分析", desc: "各社の専門知識を結集" },
                { step: "０２", title: "ソリューション設計", desc: "最適なチーム編成" },
                { step: "０３", title: "実装・展開", desc: "協調的プロジェクト実行" },
                { step: "０４", title: "継続サポート", desc: "統合サポート体制" },
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-secondary flex items-center justify-center text-white font-bold text-lg md:text-xl jp-numbers">
                    {process.step}
                  </div>
                  <h4 className="font-bold mb-2 text-primary text-sm md:text-base">{process.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{process.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 md:top-8 -right-4 w-8 h-0.5 bg-secondary" />
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">最新情報</h2>
            <div className="w-24 h-1 mx-auto bg-cta" />
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
              >
                {newsItems.map((news, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white border-2 border-secondary overflow-hidden shadow-2xl">
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
                            className="px-4 py-2 bg-secondary text-white text-sm font-medium mb-4"
                            style={{
                              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
                            }}
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
                          className="bg-cta text-white font-medium px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          style={{
                            clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
                          }}
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
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 z-10 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setCurrentNewsSlide((prev) => (prev + 1) % newsItems.length)}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 z-10 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <div className="flex justify-center mt-8 space-x-3">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsSlide(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 transition-all duration-300 ${index === currentNewsSlide ? "bg-cta w-8 md:w-10" : "bg-gray-300"
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
          className="fixed bottom-8 right-8 w-12 h-12 bg-cta text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center animate-pulse-slow"
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