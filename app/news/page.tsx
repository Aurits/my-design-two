"use client"

import { ArrowRight, Award, Building2, Calendar, ChevronLeft, ChevronRight, Clock, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { JSX, useEffect, useState } from "react"

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて")
  const [currentPage, setCurrentPage] = useState(1)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [email, setEmail] = useState("")
  const itemsPerPage = 5 // Reduced for new layout

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-carousel for featured news
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featuredNews = [
    {
      id: 1,
      date: "2024.03.15",
      category: "プロジェクト",
      title: "G市スマート農業DXプロジェクト開始",
      description: "AIとIoTを活用した次世代農業システムで、持続可能な地域農業の実現へ",
      image: "/placeholder.svg?height=800&width=1200",
      impact: "生産性40%向上見込み"
    },
    {
      id: 2,
      date: "2024.03.01",
      category: "パートナーシップ",
      title: "エッジAI分野で戦略的提携",
      description: "リアルタイム処理による革新的なソリューション提供を開始",
      image: "/placeholder.svg?height=800&width=1200",
      impact: "処理速度10倍高速化"
    },
    {
      id: 3,
      date: "2024.02.20",
      category: "受賞",
      title: "地域貢献大賞を受賞",
      description: "自治体DXへの長年の貢献が認められ、栄誉ある賞を受賞しました",
      image: "/placeholder.svg?height=800&width=1200",
      impact: "50自治体の変革に貢献"
    }
  ]

  type NewsCategory = "プロジェクト" | "パートナーシップ" | "イベント" | "受賞" | "メディア";

  const newsItems: {
    id: number;
    date: string;
    category: NewsCategory;
    title: string;
    excerpt: string;
    image: string;
    tags: string[];
    readTime: string;
  }[] = [
      {
        id: 1,
        date: "2024.03.15",
        category: "プロジェクト",
        title: "G市スマート農業DXプロジェクト開始",
        excerpt: "AIを活用したスマート農業システムを導入し、生産性向上と持続可能な農業を支援します。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["AI", "IoT", "農業DX"],
        readTime: "3分"
      },
      {
        id: 2,
        date: "2024.03.01",
        category: "パートナーシップ",
        title: "新たな技術パートナーシップ締結のお知らせ",
        excerpt: "エッジAI分野のリーディングカンパニーと提携し、より高度なソリューションを提供します。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["エッジAI", "提携"],
        readTime: "2分"
      },
      {
        id: 3,
        date: "2024.02.20",
        category: "イベント",
        title: "自治体DX EXPO 2024に出展",
        excerpt: "最新のデジタル変革ソリューションを展示し、多くの自治体関係者と交流しました。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["イベント", "展示会"],
        readTime: "4分"
      },
      {
        id: 4,
        date: "2024.02.10",
        category: "受賞",
        title: "「地域貢献大賞」を受賞しました",
        excerpt: "長年の地方自治体DXへの貢献が評価され、栄誉ある賞をいただきました。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["受賞", "地域貢献"],
        readTime: "2分"
      },
      {
        id: 5,
        date: "2024.01.25",
        category: "プロジェクト",
        title: "H県観光DXプラットフォーム構築完了",
        excerpt: "観光客向け情報提供と地域経済活性化を目的としたデジタルプラットフォームが完成しました。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["観光DX", "プラットフォーム"],
        readTime: "5分"
      },
      {
        id: 6,
        date: "2024.01.15",
        category: "メディア",
        title: "日経新聞に当社の取り組みが掲載",
        excerpt: "地方創生における当社のDX推進事例が、主要経済紙で紹介されました。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["メディア掲載", "地方創生"],
        readTime: "3分"
      },
      {
        id: 7,
        date: "2023.12.05",
        category: "プロジェクト",
        title: "I市スマート防災システム導入",
        excerpt: "AIとIoTを活用した災害予測・情報伝達システムを構築し、市民の安全確保に貢献。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["防災", "AI", "IoT"],
        readTime: "4分"
      },
      {
        id: 8,
        date: "2023.11.20",
        category: "パートナーシップ",
        title: "セキュリティ分野で戦略的提携",
        excerpt: "サイバーセキュリティの専門企業と連携し、より強固な情報保護体制を構築します。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["セキュリティ", "提携"],
        readTime: "3分"
      },
      {
        id: 9,
        date: "2023.10.10",
        category: "イベント",
        title: "DX推進セミナー開催のお知らせ",
        excerpt: "自治体職員向けに、最新のDXトレンドと導入事例を紹介するセミナーを開催します。",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["セミナー", "教育"],
        readTime: "2分"
      },
    ]

  const categories = ["すべて", "プロジェクト", "パートナーシップ", "イベント", "受賞", "メディア"]

  type CategoryIconsType = {
    [key in "プロジェクト" | "パートナーシップ" | "イベント" | "受賞" | "メディア"]: JSX.Element;
  };

  const categoryIcons: CategoryIconsType = {
    "プロジェクト": <Building2 className="w-4 h-4" strokeWidth={1.5} />,
    "パートナーシップ": <Users className="w-4 h-4" strokeWidth={1.5} />,
    "イベント": <Calendar className="w-4 h-4" strokeWidth={1.5} />,
    "受賞": <Award className="w-4 h-4" strokeWidth={1.5} />,
    "メディア": <TrendingUp className="w-4 h-4" strokeWidth={1.5} />
  }

  const filteredNews = newsItems.filter((item) => selectedCategory === "すべて" || item.category === selectedCategory)

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const currentItems = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 500, behavior: "smooth" })
  }

  const handleSubscribe = () => {
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.1em;
        }
        
        .timeline-line {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            #e5e7eb 10%,
            #e5e7eb 90%,
            transparent 100%
          );
        }
      `}</style>

      {/* Hero Section with Featured News Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        {featuredNews.map((news, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${news.image})`,
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-white text-primary px-4 py-2 text-sm font-bold">
                      {news.category}
                    </span>
                    <span className="text-white/80 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" strokeWidth={1.5} />
                      {news.date}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                    {news.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-100">
                    {news.description}
                  </p>

                  <Link
                    href={`/news/${news.id}`}
                    className="inline-block bg-white text-primary font-bold px-8 py-4 text-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    詳細を読む →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {featuredNews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`transition-all duration-300 ${index === currentHeroSlide ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      {/* News Section - Japanese Timeline Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              最新情報
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>

          {/* Category Filter - Vertical Tab Style */}
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-64">
              <div className="sticky top-24">
                <h3 className="text-lg font-bold text-gray-700 mb-6">カテゴリー</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category)
                        setCurrentPage(1)
                      }}
                      className={`w-full text-left px-6 py-4 font-medium transition-all duration-200 flex items-center gap-3 border-l-4 ${selectedCategory === category
                          ? "bg-primary/5 text-primary border-primary"
                          : "bg-white text-gray-700 hover:bg-gray-50 border-transparent"
                        }`}
                    >
                      {category !== "すべて" && categoryIcons[category as keyof CategoryIconsType]}
                      <span>{category}</span>
                      <span className="ml-auto text-sm">
                        ({newsItems.filter(item => category === "すべて" || item.category === category).length})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* News Timeline Layout */}
            <div className="flex-1">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line" />

                {/* News Items */}
                <div className="space-y-8">
                  {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                      <div
                        key={item.id}
                        className={`relative flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                          }`}
                      >
                        {/* Timeline Marker */}
                        <div className={`absolute left-8 top-8 w-4 h-4 bg-white border-4 border-primary transform -translate-x-1/2 z-10`} />

                        {/* Date - Vertical Text */}
                        <div className={`w-16 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <div className="vertical-text text-sm text-gray-500 font-medium">
                            {item.date}
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className={`flex-1 ${index % 2 === 0 ? 'ml-12' : 'mr-12'}`}>
                          <div className="bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="flex flex-col md:flex-row">
                              {/* Image */}
                              <div className="relative md:w-1/3 h-48 md:h-auto">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center gap-2">
                                  {categoryIcons[item.category]}
                                  <span className="text-xs font-bold text-gray-700">{item.category}</span>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 p-6">
                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" strokeWidth={1.5} />
                                    {item.readTime}
                                  </span>
                                </div>

                                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors duration-200">
                                  {item.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                  {item.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                  {item.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="bg-gray-100 text-gray-700 px-3 py-1 text-xs"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <Link
                                  href={`/news/${item.id}`}
                                  className="inline-flex items-center text-primary font-medium hover:gap-3 transition-all duration-200 group"
                                >
                                  <span>続きを読む</span>
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20">
                      <div className="text-6xl text-gray-200 mb-4">📰</div>
                      <p className="text-xl text-gray-600 mb-2">該当するニュースが見つかりませんでした</p>
                      <p className="text-gray-500">別のカテゴリーをお試しください</p>
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-16 space-x-2">
                    <button
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`w-10 h-10 flex items-center justify-center ${currentPage === 1
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                        } transition-all duration-200`}
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center font-medium transition-all duration-200 ${currentPage === page
                            ? "bg-primary text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`w-10 h-10 flex items-center justify-center ${currentPage === totalPages
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                        } transition-all duration-200`}
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates - Minimal List Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-8">更新履歴</h2>
          <div className="space-y-4">
            {newsItems.slice(0, 5).map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="block bg-white p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1">{item.category}</span>
                    <span className="font-medium text-gray-800 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            最新情報をお届けします
          </h2>
          <p className="text-xl mb-10 text-white/90">
            AEGIS LLPの最新ニュースやイベント情報をメールでお知らせします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 text-gray-800 text-lg focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="px-8 py-4 bg-white text-primary font-bold hover:bg-gray-100 transition-colors duration-200"
            >
              登録する
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}