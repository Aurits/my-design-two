"use client"

import { Building2, Calendar, ChevronRight, Filter, MapPin, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("すべて")
    const [currentSlide, setCurrentSlide] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [videoProgress, setVideoProgress] = useState(0)
    const [isVideoPlaying, setIsVideoPlaying] = useState(true)

    // Parallax scroll effect and video progress
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)

            // Calculate video progress based on scroll
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollProgress = window.scrollY / scrollHeight
            setVideoProgress(scrollProgress * 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Auto-carousel for featured projects
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const featuredProjects = [
        {
            id: 1,
            title: "A市デジタル行政システム構築",
            subtitle: "最先端AIによる市民サービスの革新",
            description: "処理時間80%短縮、市民満足度92%達成",
            image: "/placeholder.svg?height=800&width=1200",
            stats: { efficiency: "+80%", satisfaction: "92%", cost: "-40%" }
        },
        {
            id: 2,
            title: "B県スマートシティ構想",
            subtitle: "IoTが創る持続可能な都市",
            description: "エネルギー効率25%向上、運営コスト20%削減",
            image: "/placeholder.svg?height=800&width=1200",
            stats: { sensors: "10,000+", dataPoints: "1TB/日", response: "リアルタイム" }
        },
        {
            id: 3,
            title: "C市セキュリティ強化",
            subtitle: "次世代サイバーセキュリティ",
            description: "サイバー攻撃検知率99.9%、ダウンタイム0分",
            image: "/placeholder.svg?height=800&width=1200",
            stats: { detection: "99.9%", uptime: "100%", incidents: "0件" }
        }
    ]

    const projects = [
        {
            id: 1,
            title: "A市デジタル行政システム構築",
            description:
                "市民サービスの向上と業務効率化を目指し、AIを活用した総合行政システムを構築。申請手続きのオンライン化、データ連携基盤の整備を行いました。",
            category: "デジタル変革",
            tags: ["AI", "クラウド", "市民サービス", "業務効率化"],
            image: "/placeholder.svg?height=400&width=600",
            date: "2023年10月",
            location: "愛知県",
            scale: "人口: 15万人",
            result: "処理時間80%短縮",
        },
        {
            id: 2,
            title: "B県スマートシティ構想支援",
            description:
                "IoTセンサーネットワークを導入し、交通量、環境データ、エネルギー消費をリアルタイムで可視化。データに基づいた都市計画を支援しました。",
            category: "スマートシティ",
            tags: ["IoT", "データ分析", "環境", "都市計画"],
            image: "/placeholder.svg?height=400&width=600",
            date: "2023年8月",
            location: "東京都",
            scale: "対象エリア: 50km²",
            result: "エネルギー効率25%向上",
        },
        {
            id: 3,
            title: "C市情報セキュリティ強化プロジェクト",
            description:
                "自治体システムのサイバー攻撃対策として、多層防御システムを導入。24時間365日の監視体制を構築し、情報資産の安全性を確保しました。",
            category: "セキュリティ",
            tags: ["サイバーセキュリティ", "情報保護", "リスク管理"],
            image: "/placeholder.svg?height=400&width=600",
            date: "2023年6月",
            location: "大阪府",
            scale: "システム数: 200+",
            result: "インシデント0件達成",
        },
        {
            id: 4,
            title: "D町地域活性化DX推進",
            description:
                "観光振興と地域経済活性化のため、地域情報プラットフォームを構築。観光客向けアプリ開発や、地域産品のECサイト連携を行いました。",
            category: "地域活性化",
            tags: ["地域創生", "観光DX", "ECサイト"],
            image: "/placeholder.svg?height=400&width=600",
            date: "2023年4月",
            location: "岐阜県",
            scale: "利用者数: 5万人",
            result: "観光収入30%増加",
        },
        {
            id: 5,
            title: "E市レガシーシステム刷新",
            description:
                "老朽化した基幹システムをクラウドベースの最新システムへ移行。運用コスト削減とシステムパフォーマンスの大幅な向上を実現しました。",
            category: "システム統合",
            tags: ["クラウド移行", "コスト削減", "システム最適化"],
            image: "/placeholder.svg?height=400&width=600",
            date: "2023年2月",
            location: "千葉県",
            scale: "移行データ: 10TB",
            result: "運用コスト40%削減",
        },
        {
            id: 6,
            title: "F県防災情報システム高度化",
            description:
                "災害発生時の情報収集・共有を迅速化するため、AIを活用した防災情報システムを開発。避難経路の最適化や被害予測を支援します。",
            category: "防災",
            tags: ["AI", "防災", "情報共有", "危機管理"],
            image: "/placeholder.svg?height=400&width=600",
            date: "2022年12月",
            location: "福岡県",
            scale: "カバー人口: 50万人",
            result: "情報伝達速度5倍向上",
        },
    ]

    const categories = ["すべて", "デジタル変革", "スマートシティ", "セキュリティ", "地域活性化", "システム統合", "防災"]

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = selectedCategory === "すべて" || project.category === selectedCategory
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-white relative pt-20">
            <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.1em;
        }
        
        .video-mask {
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 20%,
            black 80%,
            transparent 100%
          );
        }
        
        .video-frame {
          clip-path: inset(${Math.min(videoProgress * 0.5, 25)}% ${Math.min(videoProgress * 0.3, 15)}%);
          transform: scale(${1 + (videoProgress * 0.0005)});
        }
      `}</style>

            {/* Fixed Video Background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="video-frame absolute inset-0 transition-all duration-100 ease-out">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover video-mask"
                        style={{
                            filter: `brightness(${0.3 + (videoProgress * 0.007)}) contrast(${1.2 - (videoProgress * 0.002)})`,
                            transform: `translateY(${scrollY * 0.5}px)`
                        }}
                    >
                        <source src="/sample.mp4" type="video/mp4" />
                        {/* Fallback image */}
                        <img src="/placeholder.svg?height=1080&width=1920" alt="Projects Background" className="w-full h-full object-cover" />
                    </video>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-10 left-10 text-white z-10">
                    <div className="text-xs font-bold mb-2 opacity-70">スクロール進行度</div>
                    <div className="w-32 h-1 bg-white/20">
                        <div
                            className="h-full bg-white transition-all duration-100"
                            style={{ width: `${videoProgress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Content Wrapper with higher z-index */}
            <div className="relative z-10">

                {/* Hero Section with Featured Projects Carousel */}
                <section className="relative h-screen overflow-hidden bg-transparent">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {/* Semi-transparent overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />

                            {/* Content */}
                            <div className="relative h-full flex items-center">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="max-w-4xl">
                                        <div className="text-sm font-bold text-white/80 mb-4 tracking-widest">
                                            FEATURED PROJECT
                                        </div>
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                                            {project.title}
                                        </h1>
                                        <p className="text-xl md:text-2xl mb-6 text-gray-100 drop-shadow">
                                            {project.subtitle}
                                        </p>
                                        <p className="text-lg mb-10 text-gray-200 drop-shadow">
                                            {project.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-8 mb-10 max-w-2xl">
                                            {Object.entries(project.stats).map(([key, value]) => (
                                                <div key={key} className="text-white">
                                                    <div className="text-3xl font-bold mb-1 drop-shadow">{value}</div>
                                                    <div className="text-sm text-gray-300 capitalize">{key}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={`#project-${project.id}`}
                                            className="inline-block bg-white text-primary font-bold px-8 py-4 text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                                        >
                                            詳細を見る →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Carousel Controls */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {featuredProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </section>

                {/* Projects Overview Section */}
                <section className="py-20 bg-white/95 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                                プロジェクト実績
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                AEGIS LLPがこれまでに手掛けた、地方自治体におけるデジタル変革の成功事例をご紹介します
                            </p>
                            <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                        </div>

                        {/* Search and Filter Bar */}
                        <div className="mb-12 bg-white/90 backdrop-blur-sm p-6 border border-gray-200 shadow-lg">
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Search */}
                                <div className="flex-1">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="プロジェクト名、技術、地域で検索..."
                                            className="w-full px-6 py-4 border border-gray-300 text-lg focus:outline-none focus:border-primary transition-colors duration-200 bg-white/90"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                                    </div>
                                </div>

                                {/* Filter Toggle */}
                                <button
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className="px-6 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
                                >
                                    <Filter className="w-5 h-5" />
                                    カテゴリで絞り込む
                                </button>
                            </div>

                            {/* Category Filters */}
                            {isFilterOpen && (
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="flex flex-wrap gap-3">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`px-6 py-3 font-medium transition-all duration-200 ${selectedCategory === category
                                                    ? "bg-primary text-white"
                                                    : "bg-white/80 border border-gray-300 text-gray-700 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Results Count */}
                        <div className="mb-8 text-gray-600 bg-white/80 backdrop-blur-sm inline-block px-4 py-2">
                            <span className="font-bold text-black">{filteredProjects.length}件</span>のプロジェクトが見つかりました
                        </div>

                        {/* Project Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="bg-white/95 backdrop-blur-sm border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="flex flex-col md:flex-row h-full">
                                            {/* Image */}
                                            <div className="relative md:w-2/5 h-64 md:h-auto">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-md">
                                                    <p className="text-sm font-bold text-gray-700">{project.category}</p>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 p-6 md:p-8 flex flex-col">
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors duration-200">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-6 line-clamp-3">
                                                        {project.description}
                                                    </p>

                                                    {/* Meta Info */}
                                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{project.date}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>{project.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                                            <Building2 className="w-4 h-4" />
                                                            <span>{project.scale}</span>
                                                        </div>
                                                        <div className="text-sm font-bold text-primary">
                                                            {project.result}
                                                        </div>
                                                    </div>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {project.tags.map((tag, tagIndex) => (
                                                            <span
                                                                key={tagIndex}
                                                                className="bg-gray-100 text-gray-700 px-3 py-1 text-sm"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* CTA */}
                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="inline-flex items-center justify-between bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 transition-all duration-200 group"
                                                >
                                                    <span>詳細を見る</span>
                                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20 bg-white/90 backdrop-blur-sm">
                                    <div className="text-6xl text-gray-200 mb-4">🔍</div>
                                    <p className="text-xl text-gray-600 mb-2">該当するプロジェクトが見つかりませんでした</p>
                                    <p className="text-gray-500">検索条件を変更してお試しください</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Impact Statistics Section */}
                <section className="py-20 bg-white/90 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                                プロジェクトの成果
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                AEGIS LLPのプロジェクトがもたらした具体的な成果と影響
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "50+", label: "完了プロジェクト", sublabel: "全国展開" },
                                { number: "80%", label: "業務効率向上", sublabel: "平均改善率" },
                                { number: "15", label: "自治体パートナー", sublabel: "継続的連携" },
                                { number: "99.9%", label: "システム稼働率", sublabel: "安定運用" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center bg-white/80 backdrop-blur-sm p-6 shadow-md">
                                    <div className="text-5xl font-black text-primary mb-2">{stat.number}</div>
                                    <div className="text-lg font-medium text-black">{stat.label}</div>
                                    <div className="text-sm text-gray-600">{stat.sublabel}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-white relative">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            あなたの自治体でも、デジタル変革を始めませんか？
                        </h2>
                        <p className="text-xl mb-10 text-white/90">
                            AEGIS LLPは、各自治体の課題に合わせた最適なソリューションを提供します。
                            まずはお気軽にご相談ください。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-primary font-bold px-10 py-4 text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                        >
                            無料相談を申し込む →
                        </Link>
                    </div>
                </section>

            </div>{/* End of content wrapper */}
        </div>
    )
}