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
  Layers,
  Lightbulb,
  Network,
  Shield,
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
  const [selectedCompany, setSelectedCompany] = useState(0)

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
    <div className="min-h-screen bg-white pt-20">
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.1em;
        }
        
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
      `}</style>

      {/* Hero Carousel with Balanced Layout */}
      <section id="home" className="relative h-screen overflow-hidden">
        {content.heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.bg})`,
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight jp-heading">
                    {slide.headline}
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 text-gray-100 jp-body-text">
                    {slide.subline}
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="#contact"
                      className="inline-block bg-primary text-white font-bold px-10 py-4 text-lg hover:bg-primary/90 transition-all duration-300"
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

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {content.heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`h-2 transition-all duration-300 ${index === currentHeroSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Works Section - Refined Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 jp-heading">
              施工実績
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
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
                        {/* Left Side - Image */}
                        <div className="relative w-3/5">
                          <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            className="object-cover"
                          />
                          {/* Date overlay */}
                          <div className="absolute top-8 left-8 bg-white px-6 py-3">
                            <p className="text-sm font-bold text-gray-700">
                              {work.date}
                            </p>
                          </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-2/5 p-8 lg:p-12 bg-gray-50 flex flex-col justify-between">
                          {/* Title */}
                          <div className="mb-8">
                            <h3 className="text-2xl lg:text-3xl font-bold text-black jp-heading">
                              {work.title}
                            </h3>
                          </div>

                          {/* Tags and Location */}
                          <div className="space-y-6">
                            {/* Tags */}
                            <div>
                              <p className="text-sm font-bold text-gray-500 mb-3">施工内容</p>
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
                            <div>
                              <p className="text-sm font-bold text-gray-500 mb-3">施工場所</p>
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
                  className={`h-2 transition-all duration-300 ${index === currentWorksSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              20年以上の実績と信頼で、安全・安心な施工をお約束します
            </p>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
            >
              全ての施工実績を見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Board Message - Balanced Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black jp-heading">
              {content.boardMessage.title}
            </h2>
            <div className="w-24 h-1 mx-auto bg-primary" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Board Chairman"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 p-6 bg-white border-l-4 border-primary">
                <h4 className="font-bold text-lg mb-2 text-black">経営理念</h4>
                <p className="text-gray-600 jp-body-text">
                  技術革新を通じて、すべての地域住民が安心して暮らせる社会インフラの構築を目指します。
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <blockquote className="text-2xl leading-relaxed border-l-4 border-primary pl-8 text-gray-700 jp-body-text">
                "{content.boardMessage.quote}"
              </blockquote>

              <div>
                <p className="font-bold text-xl text-black">{content.boardMessage.name}</p>
                <p className="text-gray-600">{content.boardMessage.position}</p>
              </div>

              <p className="text-gray-600 leading-relaxed jp-body-text">
                {content.boardMessage.description}
              </p>

              <div className="space-y-4 pt-6">
                <h4 className="font-bold text-lg text-black">私たちの約束</h4>
                <ul className="space-y-3">
                  {[
                    "最新技術の継続的な研究開発により、常に最適なソリューションを提供します",
                    "地域の特性を深く理解し、カスタマイズされた支援を実現します",
                    "長期的なパートナーシップを通じて、持続可能な成長を支援します"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Structured Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black jp-heading">{content.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto jp-body-text">{content.services.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Service Card */}
            <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100">
              <div className="h-1 w-full bg-primary" />
              <div className="relative">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Digital Transformation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-5xl font-bold mb-2">01</div>
                      <h3 className="text-2xl font-bold">デジタル変革支援</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed jp-body-text">
                    最新のAI技術とクラウドインフラを活用し、行政サービスの効率化と市民満足度の向上を実現します。
                  </p>
                  <div className="space-y-4 mb-6">
                    {[
                      { label: "業務効率化", value: "50%向上" },
                      { label: "処理時間短縮", value: "80%削減" },
                      { label: "市民満足度", value: "92%達成" }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-gray-50">
                        <span className="text-gray-700">{stat.label}</span>
                        <span className="font-bold text-2xl text-black">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="block w-full bg-primary text-white font-medium py-3 text-center hover:bg-primary/90 transition-colors"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary Services */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4 text-black">包括的なサービスラインナップ</h3>
                <p className="text-gray-600">
                  9社の専門企業が連携し、自治体のあらゆるニーズに対応する総合的なソリューションを提供します。
                </p>
              </div>

              {[
                {
                  number: "02",
                  title: "スマートシティ構築",
                  description: "IoTセンサーとビッグデータ分析により、都市インフラの最適化と住民サービスの向上を実現。",
                  metric: "15都市導入",
                  result: "運営コスト25%削減",
                },
                {
                  number: "03",
                  title: "システム統合・最適化",
                  description: "分散した行政システムを統合し、データの一元管理と業務プロセスの標準化を推進。",
                  metric: "統合実績50+",
                  result: "メンテナンスコスト30%削減",
                },
                {
                  number: "04",
                  title: "セキュリティ・コンプライアンス",
                  description: "最新のサイバーセキュリティ技術と24時間365日の監視体制により、重要な行政データを保護。",
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
                      <div className="text-3xl font-bold text-gray-200 mb-2">{service.number}</div>
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
                誰もが安心して日々の生活を送るために欠かせない交通安全。<br /><br />
                私たちは2000年の創業から20年以上にわたり、交通安全事業に特化したプロフェッショナル集団として「皆が安心して住めるまちの創造」に取り組んでいます。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-lg px-8 py-3 hover:bg-primary/90 transition-all duration-300"
              >
                AEGIS LLPの強みへ
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

      {/* Why Choose AEGIS - Structured Carousel */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black jp-heading">{content.whyChoose.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto jp-body-text">
              {content.whyChoose.subtitle}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
          </div>

          {/* Statistics Banner */}
          <div className="bg-white p-12 mb-16 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "完了プロジェクト" },
                { number: "99%", label: "顧客満足度" },
                { number: "24/7", label: "サポート体制" },
                { number: "200+", label: "専門技術者" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel */}
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
                    <div className="max-w-3xl mx-auto">
                      <div className="bg-white shadow-xl overflow-hidden">
                        <div className="relative h-64">
                          <Image
                            src={advantage.bgImage}
                            alt={advantage.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute top-6 left-6">
                            <div className="text-6xl font-bold text-white/20">{advantage.number}</div>
                          </div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{advantage.title}</h3>
                            <p className="text-sm text-gray-200">{advantage.titleEn}</p>
                          </div>
                        </div>

                        <div className="p-8">
                          <p className="text-gray-600 leading-relaxed mb-6 jp-body-text">{advantage.description}</p>

                          <div className="space-y-3 mb-6">
                            {advantage.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <p className="text-sm text-gray-700">{detail}</p>
                              </div>
                            ))}
                          </div>

                          <Link
                            href="/about"
                            className="block w-full bg-gray-100 text-gray-700 font-medium py-3 text-center hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            詳細を見る →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAdvantageSlide(index)}
                  className={`h-2 transition-all duration-300 ${index === currentAdvantageSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300"
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

      {/* Success Stories */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black jp-heading">成功事例</h2>
            <div className="w-24 h-1 mx-auto bg-primary" />
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
                        <h3 className="text-2xl font-bold mb-6 text-black jp-heading">{story.title}</h3>
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

            <div className="flex justify-center mt-8 space-x-3">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSuccessSlide(index)}
                  className={`h-2 transition-all duration-300 ${index === currentSuccessSlide ? "w-8 bg-primary" : "w-2 bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Innovation */}
      <section id="technology" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black jp-heading">技術・イノベーション</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto jp-body-text">
              最先端技術を活用し、自治体の課題解決と市民サービスの向上を実現する革新的なソリューションを提供します。
            </p>
            <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "AI・機械学習",
                subtitle: "Artificial Intelligence & Machine Learning",
                icon: "AI",
                description: "自然言語処理と画像認識技術により、市民からの問い合わせ対応を自動化。",
                stats: [
                  { label: "導入効果", value: "応答時間90%短縮" },
                  { label: "精度", value: "98.5%の正答率" }
                ]
              },
              {
                title: "IoTセンサーネットワーク",
                subtitle: "Internet of Things Network",
                icon: "IoT",
                description: "都市インフラ全体にセンサーを配置し、リアルタイムでデータを収集・分析。",
                stats: [
                  { label: "センサー数", value: "10,000+設置" },
                  { label: "データ処理", value: "リアルタイム分析" }
                ]
              },
              {
                title: "クラウドプラットフォーム",
                subtitle: "Cloud Computing Platform",
                icon: "☁",
                description: "高可用性と拡張性を備えたクラウド基盤により、行政システムの安定稼働を保証。",
                stats: [
                  { label: "稼働率", value: "99.99%保証" },
                  { label: "コスト削減", value: "40%のIT費用削減" }
                ]
              },
              {
                title: "データ分析・可視化",
                subtitle: "Data Analytics & Visualization",
                icon: "📊",
                description: "膨大な行政データを分析し、直感的なダッシュボードで可視化。",
                stats: [
                  { label: "処理データ量", value: "1TB/日" },
                  { label: "意思決定速度", value: "5倍高速化" }
                ]
              }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{tech.title}</h3>
                    <p className="text-gray-600">{tech.subtitle}</p>
                  </div>
                  <div className="text-5xl font-bold text-gray-100">{tech.icon}</div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed jp-body-text">
                  {tech.description}
                </p>
                <div className="space-y-3">
                  {tech.stats.map((stat, statIdx) => (
                    <div key={statIdx} className="flex justify-between p-3 bg-gray-50">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Roadmap */}
          <div className="bg-primary text-white p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">技術ロードマップ</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { year: "2024", desc: "AI基盤の強化とIoT展開" },
                { year: "2025", desc: "統合プラットフォームの完成" },
                { year: "2026", desc: "次世代スマートシティの実現" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold mb-2">{item.year}</div>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Member Companies Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black jp-heading">
              {content.memberCompanies.title}
            </h2>
            <p className="text-2xl font-semibold mb-4 text-gray-700">
              {content.memberCompanies.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed jp-body-text">
              {content.memberCompanies.description}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
          </div>

          {/* Company Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Company Information Card */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-1 w-full bg-primary" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-6">本社所在地</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-black">AEGIS LLP</h4>
                    <p className="text-lg text-gray-600">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-3xl font-bold mb-2 text-primary">
                      03-1234-5678
                    </div>
                    <p className="text-sm text-gray-600">[受付時間] 平日 9:00-17:00</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-gray-700">設立</div>
                      <div className="text-2xl font-bold text-black">2020年</div>
                    </div>
                    <div>
                      <div className="text-gray-700">従業員数</div>
                      <div className="text-2xl font-bold text-black">200名</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-black">グループ統計</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "2020年", label: "LLP設立年" },
                  { number: "200名", label: "専門技術者" },
                  { number: "50+", label: "完了プロジェクト" },
                  { number: "15", label: "自治体パートナー" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 text-center">
                    <div className="text-3xl font-bold mb-2 text-black">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA Block */}
          <div id="contact" className="mb-16">
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="p-8 text-center bg-gray-50 border-r border-gray-200">
                  <div className="text-4xl font-bold mb-2 text-primary">
                    0575-28-3313
                  </div>
                  <div className="text-gray-600 text-sm">[受付時間] 平日8:10-17:30</div>
                </div>
                <div className="p-8 text-center bg-white border-r border-gray-200">
                  <div className="text-2xl font-bold mb-2 text-black">緊急連絡先</div>
                  <div className="text-lg font-bold text-primary">03-1234-5679</div>
                  <div className="text-sm text-gray-600 mt-2">24時間対応</div>
                </div>
                <div className="p-8 bg-primary text-white text-center">
                  <Link
                    href="/contact"
                    className="text-xl font-bold hover:underline"
                  >
                    お問い合わせ →
                  </Link>
                  <div className="text-sm mt-2">専門チームが対応</div>
                </div>
              </div>
            </div>
          </div>

          {/* Member Companies Network */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-12 text-black">メンバー企業連携</h3>
            <div className="relative w-96 h-96 mx-auto">
              {/* Network visualization */}

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
            </div>

            <p className="text-sm text-gray-600 mt-8 max-w-2xl mx-auto">
              各企業の専門性が中央で統合され、シナジー効果を生み出します。
            </p>
          </div>

          {/* link to member-companies */}
          <div className="text-center mt-12">
            <Link
              href="/member-companies"
              className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              メンバー企業一覧を見る →
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>


          {/* Collaboration Process */}
          <div className="bg-gray-50 p-12 mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-black">連携プロセス</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "課題分析", desc: "各社の専門知識を結集" },
                { step: "02", title: "ソリューション設計", desc: "最適なチーム編成" },
                { step: "03", title: "実装・展開", desc: "協調的プロジェクト実行" },
                { step: "04", title: "継続サポート", desc: "統合サポート体制" },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white flex items-center justify-center font-bold text-xl">
                    {process.step}
                  </div>
                  <h4 className="font-bold mb-2 text-black">{process.title}</h4>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black jp-heading">最新情報</h2>
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
                    <div className="bg-white shadow-xl overflow-hidden">
                      <div className="relative h-64 md:h-96">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute top-8 left-8">
                          <div className="px-4 py-2 bg-white text-primary text-sm font-medium mb-4">
                            {news.category}
                          </div>
                          <div className="text-white text-lg mb-2">{news.date}</div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                            {news.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-8 md:p-12">
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 jp-body-text">
                          {news.excerpt}
                        </p>
                        <Link
                          href="/news"
                          className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 hover:bg-primary/90 transition-colors"
                        >
                          続きを読む
                          <ArrowRight className="w-5 h-5 ml-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setCurrentNewsSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white text-primary shadow-lg hover:shadow-xl transition-all duration-300 z-10 flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentNewsSlide((prev) => (prev + 1) % newsItems.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white text-primary shadow-lg hover:shadow-xl transition-all duration-300 z-10 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-3">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsSlide(index)}
                  className={`h-2 transition-all duration-300 ${index === currentNewsSlide ? "w-8 bg-primary" : "w-2 bg-gray-300"
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
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
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