"use client";
import { useState, useEffect } from 'react'

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
  Zap,
  Menu,
  X
} from 'lucide-react'

export default function AegisHomepage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentSuccessSlide, setCurrentSuccessSlide] = useState(0)
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0)
  const [language, setLanguage] = useState("JP")
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Color scheme: Primary Gold, Secondary Cyan, Accent Blue
  const colors = {
    primary: "#D4AF37", // Gold
    secondary: "#00bcd4", // Cyan
    accent: "#1B2951", // Navy Blue
    light: "#F8F9FA",
    dark: "#2c3e50"
  }

  // Translation content
  const content = {
    JP: {
      heroSlides: [
        {
          bg: "https://placehold.co/1200x600/F8F9FA/6C757D?text=Municipal+DX+Innovation",
          headline: "地方自治体の未来を / デジタルで変革する",
          subline: "AEGIS LLP - 信頼できる技術パートナー",
          cta: "お問い合わせ",
        },
        {
          bg: "https://placehold.co/1200x600/2F3349/ffffff?text=Advanced+Technology",
          headline: "最先端技術で / 課題を解決",
          subline: "AI・IoT・クラウドを活用した総合ソリューション",
          cta: "技術詳細を見る",
        },
        {
          bg: "https://placehold.co/1200x600/1B2951/ffffff?text=Team+Collaboration",
          headline: "9社の専門性で / トータルサポート",
          subline: "連携による包括的な自治体DX推進",
          cta: "実績を見る",
        },
      ],
      boardMessage: {
        title: "理事長からのメッセージ / Message from the Board",
        quote: "AEGIS LLPは、地方自治体の皆様と共に持続可能な社会の実現を目指しています。",
        name: "田中 太郎",
        position: "代表理事・CEO",
        description: "私たちは、最新のデジタル技術と豊富な経験を活かし、地方自治体の皆様の課題解決に全力で取り組んでまいります。9社の専門企業が連携することで、包括的で質の高いサービスを提供し、地域社会の発展に貢献いたします。",
      },
      services: {
        title: "サービス・ソリューション / Services & Solutions",
        subtitle: "包括的なデジタル変革支援で自治体の未来を創造",
      },
      whyChoose: {
        title: "AEGIS LLPが選ばれる理由 / Why Choose AEGIS",
        subtitle: "確かな実績と革新的な技術で、自治体の課題解決をサポート",
      },
      memberCompanies: {
        title: "グループ連携 / Group Collaboration",
        subtitle: "9社の専門企業が結集した総合力",
        description: "各分野のエキスパートが持つ専門性を結集し、包括的なソリューションを提供。お客様のあらゆるニーズにワンストップでお応えします。",
      },
    },
    EN: {
      heroSlides: [
        {
          bg: "https://placehold.co/1200x600/F8F9FA/6C757D?text=Municipal+DX+Innovation",
          headline: "Transforming the Future / of Local Government",
          subline: "AEGIS LLP - Your Trusted Technology Partner",
          cta: "Contact Us",
        },
        {
          bg: "https://placehold.co/1200x600/2F3349/ffffff?text=Advanced+Technology",
          headline: "Solving Challenges / with Advanced Technology",
          subline: "Comprehensive Solutions Using AI, IoT, and Cloud",
          cta: "Technology Details",
        },
        {
          bg: "https://placehold.co/1200x600/1B2951/ffffff?text=Team+Collaboration",
          headline: "Total Support / with 9 Companies' Expertise",
          subline: "Comprehensive Municipal DX Promotion through Collaboration",
          cta: "View Results",
        },
      ],
      boardMessage: {
        title: "Message from the Board",
        quote: "AEGIS LLP aims to realize a sustainable society together with local governments.",
        name: "Taro Tanaka",
        position: "Representative Director & CEO",
        description: "We leverage cutting-edge digital technology and extensive experience to tackle challenges faced by local governments. Through collaboration of 9 specialized companies, we provide comprehensive, high-quality services and contribute to regional development.",
      },
      services: {
        title: "Services & Solutions",
        subtitle: "Creating the future of municipalities through comprehensive digital transformation support",
      },
      whyChoose: {
        title: "Why Choose AEGIS LLP",
        subtitle: "Supporting municipal problem-solving with proven results and innovative technology",
      },
      memberCompanies: {
        title: "Group Collaboration",
        subtitle: "Combined strength of 9 specialized companies",
        description: "We bring together the expertise of specialists in each field to provide comprehensive solutions. We respond to all customer needs with one-stop service.",
      },
    },
  }

  const currentContent = content[language]

  const successStories = [
    {
      title: language === "JP" ? "A市デジタル化プロジェクト" : "City A Digital Project",
      image: "https://placehold.co/500x400/F8F9FA/6C757D?text=City+A+Digital+Project",
      result: language === "JP" ? "処理時間80%短縮、市民満足度92%" : "80% reduction in processing time, 92% citizen satisfaction",
    },
    {
      title: language === "JP" ? "B県スマートシティ構想" : "Prefecture B Smart City",
      image: "https://placehold.co/400x300/00bcd4/ffffff?text=Prefecture+B+Smart+City",
      result: language === "JP" ? "エネルギー効率25%向上、運営コスト20%削減" : "25% energy efficiency improvement, 20% operational cost reduction",
    },
    {
      title: language === "JP" ? "C市セキュリティ強化" : "City C Security Enhancement",
      image: "https://placehold.co/350x250/2F3349/ffffff?text=City+C+Security",
      result: language === "JP" ? "サイバー攻撃検知率99.9%、ダウンタイム0分" : "99.9% cyber attack detection rate, 0 minutes downtime",
    },
  ]

  const newsItems = [
    {
      date: "2024.01.15",
      category: language === "JP" ? "プロジェクト" : "Project",
      title: language === "JP" ? "新プロジェクト開始のお知らせ" : "New Project Launch Announcement",
      excerpt: language === "JP" ? "D市との包括的デジタル変革プロジェクトを開始いたします。最新のAI技術を活用し、市民サービスの向上を目指します。" : "We are launching a comprehensive digital transformation project with City D. Using the latest AI technology to improve citizen services.",
      image: "https://placehold.co/800x500/1B2951/ffffff?text=New+Project+Launch",
      color: colors.secondary,
    },
    {
      date: "2024.01.10",
      category: language === "JP" ? "パートナーシップ" : "Partnership",
      title: language === "JP" ? "技術パートナーシップ締結" : "Technical Partnership Agreement",
      excerpt: language === "JP" ? "AI技術分野での新たなパートナーシップを締結いたしました。これにより、より高度なソリューション提供が可能になります。" : "We have signed a new partnership in the AI technology field. This enables us to provide more advanced solutions.",
      image: "https://placehold.co/800x500/00bcd4/ffffff?text=Partnership+Agreement",
      color: colors.accent,
    },
    {
      date: "2024.01.05",
      category: language === "JP" ? "受賞" : "Award",
      title: language === "JP" ? "業界表彰受賞" : "Industry Award Recognition",
      excerpt: language === "JP" ? "自治体DX推進における貢献が評価され、業界賞を受賞いたしました。今後もより一層のサービス向上に努めてまいります。" : "We received an industry award for our contribution to municipal DX promotion. We will continue to strive for further service improvement.",
      image: "https://placehold.co/800x500/6C757D/ffffff?text=Industry+Award",
      color: colors.primary,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold" style={{ color: colors.accent }}>
              AEGIS LLP
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {[
                { jp: "ホーム", en: "HOME", active: true },
                { jp: "会社概要", en: "ABOUT" },
                { jp: "サービス", en: "SERVICES" },
                { jp: "プロジェクト", en: "PROJECTS" },
                { jp: "技術・DX", en: "TECHNOLOGY" },
                { jp: "お問い合わせ", en: "CONTACT" },
              ].map((item, index) => (
                <div key={index} className="text-center cursor-pointer group">
                  <div className="text-sm text-gray-600 group-hover:text-yellow-600 transition-colors">
                    {language === "JP" ? item.jp : item.en}
                  </div>
                  <div className={`text-sm group-hover:text-yellow-600 transition-colors ${item.active ? "border-b-2" : ""}`}
                       style={{ 
                         color: colors.accent,
                         borderColor: item.active ? colors.primary : 'transparent'
                       }}>
                    {language === "JP" ? item.en : item.jp}
                  </div>
                </div>
              ))}
            </nav>

            {/* Right Side - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <button
                onClick={() => setLanguage(language === "JP" ? "EN" : "JP")}
                className="text-sm font-medium px-3 py-1 border border-gray-300 hover:border-yellow-500 transition-colors"
                style={{ color: colors.accent }}
              >
                {language === "JP" ? "EN" : "JP"}
              </button>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{ color: colors.secondary }}>
                  <a href="tel:03-1234-5678">TEL: 03-1234-5678</a>
                </div>
                <div className="text-sm text-gray-600">
                  {language === "JP" ? "(受付時間) 9:00〜17:00" : "(Business Hours) 9:00-17:00"}
                </div>
              </div>
              {/* Gold CTA Button */}
              <div className="relative">
                <button 
                  className="text-white font-medium px-6 py-3 text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    backgroundColor: colors.primary,
                    clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
                  }}
                >
                  {language === "JP" ? "お問い合わせ" : "Contact Us"}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setLanguage(language === "JP" ? "EN" : "JP")}
                className="text-sm font-medium px-2 py-1 border border-gray-300"
                style={{ color: colors.accent }}
              >
                {language === "JP" ? "EN" : "JP"}
              </button>
              <button onClick={() => setMobileMenuOpen(true)} className="p-2" style={{ color: colors.accent }}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-2xl font-bold" style={{ color: colors.accent }}>AEGIS LLP</div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2" style={{ color: colors.accent }}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4">
              {[
                { jp: "ホーム", en: "HOME" },
                { jp: "会社概要", en: "ABOUT" },
                { jp: "サービス", en: "SERVICES" },
                { jp: "プロジェクト", en: "PROJECTS" },
                { jp: "技術・DX", en: "TECHNOLOGY" },
                { jp: "お問い合わせ", en: "CONTACT" },
              ].map((item, index) => (
                <div key={index} className="py-4 border-b border-gray-200">
                  <div className="text-lg font-medium" style={{ color: colors.accent }}>
                    {language === "JP" ? item.jp : item.en}
                  </div>
                  <div className="text-sm text-gray-600">{language === "JP" ? item.en : item.jp}</div>
                </div>
              ))}
              <div className="mt-8">
                <button
                  className="w-full text-white font-medium py-3 text-lg mb-4"
                  style={{ backgroundColor: colors.primary }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language === "JP" ? "お問い合わせ" : "Contact Us"}
                </button>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2" style={{ color: colors.secondary }}>
                    <a href="tel:03-1234-5678">TEL: 03-1234-5678</a>
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "JP" ? "(受付時間) 9:00〜17:00" : "(Business Hours) 9:00-17:00"}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Carousel with Parallax */}
      <section className="relative h-screen mt-16 overflow-hidden">
        {currentContent.heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroSlide ? "opacity-100" : "opacity-0"}`}
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
                className="absolute top-20 right-20 w-32 h-32 opacity-10"
                style={{
                  backgroundColor: colors.secondary,
                  transform: `translateY(${scrollY * 0.3}px) rotate(45deg)`,
                }}
              />
              <div
                className="absolute bottom-40 left-40 w-24 h-24 opacity-10"
                style={{
                  backgroundColor: colors.primary,
                  transform: `translateY(${scrollY * 0.7}px)`,
                }}
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Trapezium Hero Card */}
                <div
                  className="bg-white p-12 max-w-2xl border-l-4 relative"
                  style={{
                    borderColor: colors.secondary,
                    transform: `translateY(${scrollY * 0.1}px)`,
                  }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.accent }}>
                    {slide.headline}
                  </h1>
                  <p className="text-xl mb-8 text-gray-600">
                    {slide.subline}
                  </p>
                  <div className="relative">
                    <button 
                      className="text-white font-medium px-8 py-4 text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 relative"
                      style={{ 
                        backgroundColor: colors.primary,
                        clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
                      }}
                    >
                      {slide.cta}
                    </button>
                    <div className="text-sm text-gray-600 mt-2 ml-4">
                      {language === "JP" ? "専門チームが対応いたします" : "Our specialist team will respond"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {currentContent.heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 ${index === currentHeroSlide ? "bg-white" : "bg-white bg-opacity-50"}`}
            />
          ))}
        </div>
      </section>

      {/* Board Message */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.accent }}>
              {currentContent.boardMessage.title}
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: colors.primary }} />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 text-6xl font-bold opacity-10 text-gray-600">
                {language === "JP" ? "理念" : "Vision"}
              </div>
              <img
                src="https://placehold.co/400x500/F8F9FA/6C757D?text=Board+Chairman"
                alt="Board Chairman"
                className="w-full border-2"
                style={{ borderColor: colors.secondary }}
              />
            </div>

            <div className="space-y-8">
              <blockquote 
                className="text-2xl leading-relaxed border-l-4 pl-8 text-gray-600"
                style={{ borderColor: colors.primary }}
              >
                "{currentContent.boardMessage.quote}"
              </blockquote>
              <div className="space-y-2">
                <p className="font-bold text-xl" style={{ color: colors.accent }}>
                  {currentContent.boardMessage.name}
                </p>
                <p className="text-lg text-gray-600">
                  {currentContent.boardMessage.position}
                </p>
              </div>
              <p className="text-lg leading-relaxed text-gray-600">
                {currentContent.boardMessage.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Sharp Edge Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.accent }}>
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600">{currentContent.services.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Service - Sharp Edge Card */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-lg relative">
              <div 
                className="absolute top-0 left-0 w-full h-2"
                style={{ backgroundColor: colors.primary }}
              />
              <div className="relative">
                <img
                  src="https://placehold.co/500x400/1B2951/ffffff?text=Digital+Government+Platform"
                  alt="Digital Transformation"
                  className="w-full h-80 object-cover"
                />
                <div 
                  className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center text-white font-bold text-2xl"
                  style={{ backgroundColor: colors.primary }}
                >
                  01
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white p-6">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.accent }}>
                    {language === "JP" ? "デジタル変革支援 / Digital Transformation" : "Digital Transformation"}
                  </h3>
                  <ul className="space-y-2 mb-4 text-gray-700">
                    <li>• {language === "JP" ? "AI活用による業務自動化" : "Business automation using AI"}</li>
                    <li>• {language === "JP" ? "市民向けデジタルサービス" : "Digital services for citizens"}</li>
                    <li>• {language === "JP" ? "データ駆動型意思決定支援" : "Data-driven decision support"}</li>
                  </ul>
                  <div 
                    className="inline-block px-4 py-2 text-white font-medium mb-4"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    {language === "JP" ? "業務効率50%向上実績" : "50% efficiency improvement"}
                  </div>
                  <div>
                    <button className="font-medium hover:opacity-80" style={{ color: colors.primary }}>
                      {language === "JP" ? "詳細を見る →" : "View Details →"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Services - Sharp Edge Cards */}
            <div className="grid gap-6">
              {[
                {
                  number: "02",
                  title: language === "JP" ? "スマートシティ構築" : "Smart City Development",
                  image: "https://placehold.co/250x200/00bcd4/ffffff?text=Smart+City+IoT",
                  metric: language === "JP" ? "15都市導入実績" : "15 cities implemented",
                  description: language === "JP" ? "IoT・センサーネットワーク構築" : "IoT sensor network construction",
                  color: colors.secondary
                },
                {
                  number: "03",
                  title: language === "JP" ? "システム統合" : "System Integration",
                  image: "https://placehold.co/250x200/1B2951/ffffff?text=System+Integration",
                  metric: language === "JP" ? "コスト30%削減" : "30% cost reduction",
                  description: language === "JP" ? "レガシーシステム現代化" : "Legacy system modernization",
                  color: colors.accent
                },
                {
                  number: "04",
                  title: language === "JP" ? "セキュリティ強化" : "Security Enhancement",
                  image: "https://placehold.co/250x200/6C757D/ffffff?text=Cybersecurity",
                  metric: language === "JP" ? "99.9%稼働率保証" : "99.9% uptime guarantee",
                  description: language === "JP" ? "24/7監視・対応体制" : "24/7 monitoring & response",
                  color: "#6C757D"
                },
              ].map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 overflow-hidden shadow">
                  <div className="flex">
                    <div className="relative w-32 flex-shrink-0">
                      <img src={service.image} alt={service.title} className="w-full h-32 object-cover" />
                      <div 
                        className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: service.color }}
                      >
                        {service.number}
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold mb-2" style={{ color: colors.accent }}>{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      <div 
                        className="inline-block px-2 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: service.color }}
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

      {/* Why Choose AEGIS with Sharp Edge Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.accent }}>
              {currentContent.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{currentContent.whyChoose.subtitle}</p>
            <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: colors.primary }} />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="w-16 h-16" />,
                title: language === "JP" ? "豊富な実績" : "Proven Track Record",
                titleEn: language === "JP" ? "Proven Track Record" : "豊富な実績",
                stats: [
                  { number: "50+", label: language === "JP" ? "完了プロジェクト" : "Completed Projects" },
                  { number: "15", label: language === "JP" ? "自治体パートナー" : "Municipal Partners" },
                  { number: "99.2%", label: language === "JP" ? "顧客満足度" : "Customer Satisfaction" },
                ],
                description: language === "JP" ? "多数の成功事例と高い成功率を誇る実績。お客様のニーズに応える確かな技術力で、継続的な価値を提供します。" : "Proven results with numerous success stories and high success rates. We provide continuous value with reliable technical capabilities that meet customer needs.",
                color: colors.primary,
                bgImage: "https://placehold.co/400x300/D4AF37/ffffff?text=Success+Stories",
                trapezium: true
              },
              {
                icon: <Lightbulb className="w-16 h-16" />,
                title: language === "JP" ? "技術革新" : "Technical Innovation",
                titleEn: language === "JP" ? "Technical Innovation" : "技術革新",
                stats: [
                  { number: "AI/IoT", label: language === "JP" ? "最新技術" : "Latest Technology" },
                  { number: "24/7", label: language === "JP" ? "技術サポート" : "Technical Support" },
                  { number: "独自", label: language === "JP" ? "開発ソリューション" : "Custom Solutions" },
                ],
                description: language === "JP" ? "最先端技術による革新的なソリューション提供。AI、IoT、クラウドを駆使した次世代システムで課題を解決します。" : "Innovative solutions using cutting-edge technology. We solve challenges with next-generation systems utilizing AI, IoT, and cloud technologies.",
                color: colors.secondary,
                bgImage: "https://placehold.co/400x300/00bcd4/ffffff?text=Innovation+Lab",
                trapezium: false
              },
              {
                icon: <Shield className="w-16 h-16" />,
                title: language === "JP" ? "総合サポート" : "Comprehensive Support",
                titleEn: language === "JP" ? "Comprehensive Support" : "総合サポート",
                stats: [
                  { number: "9社", label: language === "JP" ? "連携企業" : "Partner Companies" },
                  { number: "200+", label: language === "JP" ? "専門技術者" : "Specialists" },
                  { number: "即日", label: language === "JP" ? "緊急対応" : "Emergency Response" },
                ],
                description: language === "JP" ? "包括的なサポート体制による安心のサービス。9社の専門企業が連携し、ワンストップで全てのニーズに対応します。" : "Reliable service with comprehensive support system. Nine specialized companies collaborate to meet all needs with one-stop service.",
                color: colors.accent,
                bgImage: "https://placehold.co/400x300/1B2951/ffffff?text=Support+Team",
                trapezium: false
              },
            ].map((advantage, index) => (
              <div key={index} className="group">
                <div 
                  className={`h-full overflow-hidden border-2 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 bg-white relative`}
                  style={{ 
                    borderColor: advantage.color,
                    clipPath: advantage.trapezium ? 'polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)' : 'none'
                  }}
                >
                  {/* Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={advantage.bgImage}
                      alt={advantage.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                    <div className="absolute top-6 left-6">
                      <div 
                        className={`w-20 h-20 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}
                        style={{ 
                          backgroundColor: advantage.color,
                          clipPath: advantage.trapezium ? 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)' : 'none'
                        }}
                      >
                        {advantage.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{advantage.title}</h3>
                      <p className="text-sm text-gray-200">{advantage.titleEn}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Statistics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {advantage.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold mb-1" style={{ color: advantage.color }}>
                            {stat.number}
                          </div>
                          <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{advantage.description}</p>

                    {/* Gold CTA Button */}
                    <button 
                      className="w-full font-medium group-hover:shadow-lg transition-all duration-300 py-3 text-white relative"
                      style={{ 
                        backgroundColor: colors.primary,
                        clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
                      }}
                    >
                      {language === "JP" ? "詳細を見る" : "Learn More"}
                      <ArrowRight className="w-4 h-4 ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.accent }}>
              {language === "JP" ? "Success Stories / 成功事例" : "Success Stories"}
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSuccessSlide * 100}%)` }}
            >
              {successStories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white border border-gray-200 max-w-4xl mx-auto shadow-lg">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4" style={{ color: colors.accent }}>{story.title}</h3>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: colors.secondary + '20' }}>
                            <CheckCircle className="w-8 h-8" style={{ color: colors.secondary }} />
                          </div>
                          <div>
                            <p className="font-semibold" style={{ color: colors.primary }}>{story.result}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
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
                  className={`w-3 h-3 ${index === currentSuccessSlide ? "" : "bg-gray-300"}`}
                  style={{ backgroundColor: index === currentSuccessSlide ? colors.primary : undefined }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Innovation */}
      <section className="py-20" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {language === "JP" ? "技術・イノベーション / Technology & Innovation" : "Technology & Innovation"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: language === "JP" ? "AI・機械学習" : "AI & Machine Learning",
                features: [
                  language === "JP" ? "予測分析機能" : "Predictive Analytics",
                  language === "JP" ? "自治体サービス最適化" : "Municipal Service Optimization",
                ],
                color: colors.primary
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: language === "JP" ? "IoTセンサーネットワーク" : "IoT Sensor Network",
                features: [
                  language === "JP" ? "リアルタイム監視システム" : "Real-time Monitoring",
                  language === "JP" ? "スマートインフラ管理" : "Smart Infrastructure Management",
                ],
                color: colors.secondary
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: language === "JP" ? "クラウドプラットフォーム" : "Cloud Platform",
                features: [
                  language === "JP" ? "スケーラブルアーキテクチャ" : "Scalable Architecture",
                  language === "JP" ? "ハイブリッドクラウド実装" : "Hybrid Cloud Implementation",
                ],
                color: colors.primary
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: language === "JP" ? "データ分析・可視化" : "Data Analytics & Visualization",
                features: [
                  language === "JP" ? "ビジネスインテリジェンス" : "Business Intelligence",
                  language === "JP" ? "パフォーマンス指標追跡" : "Performance Metrics Tracking",
                ],
                color: colors.secondary
              },
            ].map((tech, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 p-6 text-center shadow"
              >
                <div className="flex justify-center mb-4" style={{ color: tech.color }}>{tech.icon}</div>
                <h3 className="text-lg font-bold mb-4" style={{ color: colors.accent }}>{tech.title}</h3>
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="text-sm text-gray-600">{feature}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Member Companies Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.accent }}>
              {currentContent.memberCompanies.title}
            </h2>
            <p className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>
              {currentContent.memberCompanies.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {currentContent.memberCompanies.description}
            </p>
            <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: colors.primary }} />
          </div>

          {/* Main Grid Layout - Company Info and Statistics */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Side - Company Information Card */}
            <div>
              <div 
                className="bg-white border-2 overflow-hidden shadow-lg"
                style={{ borderColor: colors.secondary }}
              >
                <div className="relative">
                  <div className="h-3 w-full" style={{ backgroundColor: colors.secondary }} />
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-12 h-12 flex items-center justify-center mr-4"
                        style={{ backgroundColor: colors.accent }}
                      >
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold" style={{ color: colors.accent }}>
                          {language === "JP" ? "本社所在地" : "Headquarters Location"}
                        </h3>
                        <p className="text-sm text-gray-600">Head Office</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold mb-2" style={{ color: colors.accent }}>
                          AEGIS LLP
                        </h4>
                        <p className="text-lg text-gray-600">
                          〒100-0001<br />
                          {language === "JP"
                            ? "東京都千代田区千代田1-1-1"
                            : "Tokyo, Chiyoda-ku, Chiyoda 1-1-1"
                          }
                        </p>
                      </div>

                      <div className="border-t pt-4">
                        <div className="text-3xl font-bold mb-2" style={{ color: colors.secondary }}>
                          <a href="tel:03-1234-5678">TEL: 03-1234-5678</a>
                        </div>
                        <p className="text-sm text-gray-600">
                          {language === "JP" ? "[受付時間] 平日 9:00-17:00" : "[Business Hours] Weekdays 9:00-17:00"}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <div className="text-lg font-bold" style={{ color: colors.accent }}>
                            {language === "JP" ? "設立" : "Established"}
                          </div>
                          <div className="text-2xl font-bold" style={{ color: colors.primary }}>
                            2020年
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-bold" style={{ color: colors.accent }}>
                            {language === "JP" ? "従業員数" : "Employees"}
                          </div>
                          <div className="text-2xl font-bold" style={{ color: colors.secondary }}>
                            200名
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Statistics Cards Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.accent }}>
                {language === "JP" ? "グループ統計 / Group Statistics" : "Group Statistics"}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    number: "2020年",
                    label: language === "JP" ? "LLP設立年" : "LLP Established",
                    percentage: "100%",
                    color: colors.accent,
                    borderColor: colors.accent
                  },
                  {
                    number: "200名",
                    label: language === "JP" ? "専門技術者" : "Technical Specialists",
                    percentage: "100%",
                    color: colors.secondary,
                    borderColor: colors.secondary
                  },
                  {
                    number: "50+",
                    label: language === "JP" ? "完了プロジェクト" : "Completed Projects",
                    percentage: "99%",
                    color: colors.primary,
                    borderColor: colors.primary
                  },
                  {
                    number: "15",
                    label: language === "JP" ? "自治体パートナー" : "Municipal Partners",
                    percentage: language === "JP" ? "全国展開" : "Nationwide",
                    color: "#6b7280",
                    borderColor: "#6b7280"
                  }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 border-2 group hover:shadow-lg transition-all duration-300 bg-gray-50"
                    style={{ borderColor: stat.borderColor }}
                  >
                    <div className="text-center">
                      <div
                        className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                        style={{ color: stat.color }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-gray-600 mb-3">
                        {stat.label}
                      </div>
                      <div className="relative">
                        <div className="w-full h-2 bg-gray-200">
                          <div
                            className="h-2 transition-all duration-1000"
                            style={{
                              backgroundColor: stat.color,
                              width: typeof stat.percentage === 'string' && stat.percentage.includes('%')
                                ? stat.percentage
                                : "100%"
                            }}
                          />
                        </div>
                        <div
                          className="text-xs font-bold mt-1"
                          style={{ color: stat.color }}
                        >
                          {stat.percentage}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Information Block - Trapezium Style */}
          <div className="mb-16">
            <div 
              className="border-2 overflow-hidden bg-white shadow-lg"
              style={{ 
                borderColor: colors.primary,
                clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)'
              }}
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Phone Contact */}
                <div 
                  className="p-8 text-center border-r"
                  style={{ backgroundColor: colors.accent, borderColor: colors.primary }}
                >
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.secondary }}>
                    <a href="tel:0575-28-3313">0575-28-3313</a>
                  </div>
                  <div className="text-white text-sm">
                    {language === "JP" ? "[受付時間] 平日8:10-17:30" : "[Business Hours] Weekdays 8:10-17:30"}
                  </div>
                  <div className="text-sm mt-2" style={{ color: colors.secondary }}>
                    {language === "JP" ? "緊急サポート: 24時間対応" : "Emergency Support: 24/7"}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div 
                  className="p-8 text-center bg-white border-r"
                  style={{ borderColor: colors.primary }}
                >
                  <div className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>
                    {language === "JP" ? "緊急連絡先" : "Emergency Contact"}
                  </div>
                  <div className="text-lg font-bold" style={{ color: colors.accent }}>
                    03-1234-5679
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {language === "JP" ? "システム障害・セキュリティ" : "System Failure・Security"}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-8 text-center bg-gray-50">
                  <button 
                    className="w-full font-bold py-4 mb-2 text-xl hover:opacity-90 transition-colors text-white relative"
                    style={{ 
                      backgroundColor: colors.primary,
                      clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
                    }}
                  >
                    {language === "JP" ? "お問い合わせ" : "Contact Us"}
                  </button>
                  <div className="text-sm text-gray-600">
                    {language === "JP" ? "専門チームが対応いたします" : "Our specialist team will respond"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Member Companies Circular Layout - Enhanced to match the image */}
          <div className="relative">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.accent }}>
              {language === "JP" ? "メンバー企業連携 / Member Company Collaboration" : "Member Company Collaboration"}
            </h3>

            {/* Central Hub - Matching the provided image */}
            <div className="relative w-96 h-96 mx-auto">
              {/* Background connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {Array.from({ length: 8 }, (_, i) => {
                  const angle = (i * 45 - 90) * (Math.PI / 180) // Start from top, -90 degrees offset
                  const centerX = 192 // half of 384px (w-96)
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
                      stroke={colors.secondary}
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  )
                })}
              </svg>

              {/* Center Circle - AEGIS */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg"
                style={{ backgroundColor: colors.secondary }}
              >
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs">AEGIS</div>
                </div>
              </div>

              {/* Member Company Circles - Positioned to match the image exactly */}
              {[
                { id: "C1", angle: 0, color: colors.secondary },    // Right - Cyan
                { id: "C2", angle: 45, color: colors.accent },      // Bottom Right - Blue
                { id: "C3", angle: 90, color: "#6b7280" },          // Bottom - Gray  
                { id: "C4", angle: 135, color: colors.secondary },  // Bottom Left - Cyan
                { id: "C5", angle: 180, color: colors.accent },     // Left - Blue
                { id: "C6", angle: 225, color: "#6b7280" },         // Top Left - Gray
                { id: "C7", angle: 270, color: colors.secondary },  // Top - Cyan
                { id: "C8", angle: 315, color: colors.accent }      // Top Right - Blue
              ].map((company, index) => {
                const angleRad = ((company.angle - 90) * Math.PI) / 180 // -90 to start from top
                const radius = 140
                const x = Math.cos(angleRad) * radius
                const y = Math.sin(angleRad) * radius

                return (
                  <div
                    key={company.id}
                    className="absolute w-16 h-16 border-3 bg-white flex items-center justify-center group hover:shadow-lg transition-all duration-300 cursor-pointer z-10"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                      borderColor: company.color,
                      borderWidth: '3px'
                    }}
                  >
                    <div className="text-center">
                      <Building2
                        className="w-5 h-5 mx-auto mb-1"
                        style={{ color: company.color }}
                      />
                      <div className="text-xs font-bold text-gray-700">{company.id}</div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {language === "JP" ? "詳細" : "Details"}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-center text-sm text-gray-600 mt-8 max-w-2xl mx-auto">
              {language === "JP"
                ? "各企業の専門性が中央で統合され、シナジー効果を生み出します。専門分野の異なる9社が連携することで、お客様のあらゆるニーズにワンストップで対応いたします。"
                : "Each company's expertise is integrated centrally, creating synergy effects. Nine companies with different specializations collaborate to meet all customer needs with one-stop service."}
            </p>
          </div>

          {/* Collaboration Process */}
          <div 
            className="bg-gray-50 p-12 border-l-4 mt-16"
            style={{ borderColor: colors.secondary }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.accent }}>
              {language === "JP" ? "連携プロセス / Collaboration Process" : "Collaboration Process"}
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: language === "JP" ? "課題分析" : "Problem Analysis",
                  desc: language === "JP" ? "各社の専門知識を結集" : "Combine expertise from all companies",
                },
                {
                  step: "02",
                  title: language === "JP" ? "ソリューション設計" : "Solution Design",
                  desc: language === "JP" ? "最適なチーム編成" : "Optimal team formation",
                },
                {
                  step: "03",
                  title: language === "JP" ? "実装・展開" : "Implementation",
                  desc: language === "JP" ? "協調的プロジェクト実行" : "Collaborative project execution",
                },
                {
                  step: "04",
                  title: language === "JP" ? "継続サポート" : "Ongoing Support",
                  desc: language === "JP" ? "統合サポート体制" : "Integrated support system",
                },
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    {process.step}
                  </div>
                  <h4 className="font-bold mb-2" style={{ color: colors.accent }}>
                    {process.title}
                  </h4>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                  {index < 3 && (
                    <div 
                      className="hidden md:block absolute top-8 -right-4 w-8 h-0.5"
                      style={{ backgroundColor: colors.secondary }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company History Timeline */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.accent }}>
              {language === "JP" ? "AEGIS LLPについて / About AEGIS LLP" : "About AEGIS LLP"}
            </h2>
          </div>

          {/* Company Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: language === "JP" ? "信頼性" : "Reliability",
                desc: language === "JP" ? "確実な実績と継続的なサポート" : "Proven results and continuous support",
                color: colors.secondary,
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: language === "JP" ? "革新性" : "Innovation",
                desc: language === "JP" ? "最新技術による課題解決" : "Problem solving with latest technology",
                color: colors.primary,
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: language === "JP" ? "連携力" : "Collaboration",
                desc: language === "JP" ? "9社の専門性を結集" : "Combining expertise of 9 companies",
                color: colors.accent,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white border-2 p-6 text-center group hover:shadow-lg transition-all duration-300"
                style={{ borderColor: value.color }}
              >
                <div 
                  className="w-12 h-12 mx-auto mb-4 bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <div style={{ color: value.color }}>{value.icon}</div>
                </div>
                <h3 className="font-bold mb-2" style={{ color: colors.accent }}>
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Timeline */}
          <div className="relative max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-16 text-center" style={{ color: colors.accent }}>
              {language === "JP" ? "会社の歩み / Company History" : "Company History"}
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
                style={{ backgroundColor: colors.primary }}
              />

              <div className="space-y-32">
                {[
                  {
                    year: "2020",
                    title: language === "JP" ? "AEGIS LLP設立" : "AEGIS LLP Establishment",
                    description: language === "JP" ? "地方自治体のDX推進を目指し、9社の専門企業が連携してLLPを設立" : "Established LLP with 9 specialized companies collaborating to promote municipal DX",
                    side: "right",
                    color: colors.primary,
                    number: "1",
                  },
                  {
                    year: "2021",
                    title: language === "JP" ? "初の大型プロジェクト受注" : "First Major Project",
                    description: language === "JP" ? "A市において包括的なデジタル行政システムを構築、大幅な効率化を実現" : "Built comprehensive digital government system in City A, achieving significant efficiency improvements",
                    side: "left",
                    color: colors.secondary,
                    number: "2",
                  },
                  {
                    year: "2022",
                    title: language === "JP" ? "メンバー企業拡大・技術力強化" : "Member Expansion & Tech Enhancement",
                    description: language === "JP" ? "AI・IoT専門企業2社が新たに参加、技術領域を大幅に拡充" : "Two AI/IoT specialized companies joined, significantly expanding technical capabilities",
                    side: "right",
                    color: colors.accent,
                    number: "3",
                  },
                  {
                    year: "2023",
                    title: language === "JP" ? "DX専門チーム発足" : "DX Specialist Team Formation",
                    description: language === "JP" ? "自治体DX専門の技術者チームを組織化、専門性をさらに深化" : "Organized specialized technical team for municipal DX, further deepening expertise",
                    side: "left",
                    color: colors.primary,
                    number: "4",
                  },
                  {
                    year: "2024",
                    title: language === "JP" ? "全国展開開始" : "National Expansion",
                    description: language === "JP" ? "全国15自治体との連携協定を締結、サービス提供エリアを拡大" : "Signed collaboration agreements with 15 municipalities nationwide, expanding service areas",
                    side: "right",
                    color: colors.secondary,
                    number: "5",
                  },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${item.side === "left" ? "flex-row-reverse" : ""}`}>
                    {/* Timeline Marker */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-white shadow-lg z-10 flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="text-white font-bold text-xl">{item.number}</div>
                    </div>

                    {/* Content Block */}
                    <div className={`w-5/12 ${item.side === "left" ? "text-right pr-16" : "pl-16"}`}>
                      <div
                        className={`p-8 shadow-lg group hover:shadow-xl transition-all duration-300 relative ${index === 0 || index === 2 ? '' : ''}`}
                        style={{ 
                          backgroundColor: item.color,
                          clipPath: index === 0 || index === 2 ? (
                            item.side === "left" 
                              ? 'polygon(5% 0%, 100% 0%, 100% 85%, 0% 100%)'
                              : 'polygon(0% 0%, 95% 0%, 100% 100%, 0% 85%)'
                          ) : 'none'
                        }}
                      >
                        <div className="text-white">
                          <div className="text-6xl font-bold mb-4 opacity-90">{item.year}</div>
                          <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                          <p className="leading-relaxed opacity-90">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for opposite side */}
                    <div className="w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company Information Table */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.accent }}>
              {language === "JP" ? "会社概要 / Company Overview" : "Company Overview"}
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: colors.primary }} />
          </div>

          <div 
            className="bg-white border-2 shadow-lg"
            style={{ borderColor: colors.primary }}
          >
            <table className="w-full">
              <tbody>
                {[
                  {
                    label: language === "JP" ? "会社名" : "Company Name",
                    labelAlt: language === "JP" ? "Company Name" : "会社名",
                    value: "AEGIS LLP（エイジス エルエルピー）",
                  },
                  {
                    label: language === "JP" ? "設立年月日" : "Establishment Date",
                    labelAlt: language === "JP" ? "Establishment Date" : "設立年月日",
                    value: language === "JP" ? "2020年4月1日" : "April 1, 2020",
                  },
                  {
                    label: language === "JP" ? "所在地" : "Headquarters",
                    labelAlt: language === "JP" ? "Headquarters" : "所在地",
                    value: language === "JP" ? "〒100-0001 東京都千代田区千代田1-1-1\nAEGIS Building 10F" : "AEGIS Building 10F\n1-1-1 Chiyoda, Chiyoda-ku, Tokyo 100-0001",
                  },
                  {
                    label: language === "JP" ? "代表者" : "Representative",
                    labelAlt: language === "JP" ? "Representative" : "代表者",
                    value: language === "JP" ? "代表社員 田中 太郎" : "Representative Partner: Taro Tanaka",
                  },
                  {
                    label: language === "JP" ? "事業内容" : "Business Activities",
                    labelAlt: language === "JP" ? "Business Activities" : "事業内容",
                    value: language === "JP" ? "・地方自治体向けデジタル変革支援\n・スマートシティ構築・運営\n・システム統合・最適化\n・ITコンサルティング" : "・Digital transformation support for local governments\n・Smart city construction & operation\n・System integration & optimization\n・IT consulting",
                  },
                  {
                    label: language === "JP" ? "メンバー企業数" : "Member Companies",
                    labelAlt: language === "JP" ? "Member Companies" : "メンバー企業数",
                    value: language === "JP" ? "9社（専門分野別パートナー企業）" : "9 companies (specialized partner companies)",
                  },
                  {
                    label: language === "JP" ? "従業員数" : "Employees",
                    labelAlt: language === "JP" ? "Employees" : "従業員数",
                    value: language === "JP" ? "200名以上（グループ全体）" : "200+ employees (group total)",
                  },
                  {
                    label: language === "JP" ? "主要取引先" : "Major Clients",
                    labelAlt: language === "JP" ? "Major Clients" : "主要取引先",
                    value: language === "JP" ? "全国15自治体\n各省庁・関連機関" : "15 municipalities nationwide\nGovernment ministries & related agencies",
                  },
                  {
                    label: language === "JP" ? "認定・資格" : "Certifications",
                    labelAlt: language === "JP" ? "Certifications" : "認定・資格",
                    value: language === "JP" ? "・ISO27001認証取得\n・プライバシーマーク取得\n・ISMS認証取得" : "・ISO27001 Certified\n・Privacy Mark Certified\n・ISMS Certified",
                  },
                  {
                    label: language === "JP" ? "年商" : "Annual Revenue",
                    labelAlt: language === "JP" ? "Annual Revenue" : "年商",
                    value: language === "JP" ? "50億円（2023年度実績）" : "¥5 billion (FY2023 results)",
                  },
                  {
                    label: language === "JP" ? "関連会社" : "Affiliated Companies",
                    labelAlt: language === "JP" ? "Affiliated Companies" : "関連会社",
                    value: language === "JP" ? "グループ企業9社\n（詳細は「メンバー企業」ページ参照）" : "9 group companies\n(See 'Member Companies' page for details)",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td 
                      className="px-8 py-6 border-b w-1/3"
                      style={{ borderColor: colors.primary }}
                    >
                      <div className="font-bold text-lg mb-1" style={{ color: colors.accent }}>
                        {row.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {row.labelAlt}
                      </div>
                    </td>
                    <td 
                      className="px-8 py-6 border-b"
                      style={{ borderColor: colors.primary }}
                    >
                      <div className="whitespace-pre-line text-lg text-gray-600">
                        {row.value}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Latest News Carousel with Trapezium Shapes */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.accent }}>
              {language === "JP" ? "最新情報 / Latest News" : "Latest News"}
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: colors.primary }} />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
              >
                {newsItems.map((news, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div
                      className="bg-white border-2 overflow-hidden shadow-2xl"
                      style={{ 
                        borderColor: news.color,
                        clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)'
                      }}
                    >
                      <div className="relative">
                        <img src={news.image} alt={news.title} className="w-full h-96 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-white/60" />
                        <div className="absolute top-8 left-8">
                          <div
                            className="px-4 py-2 text-white text-sm font-medium mb-4"
                            style={{ 
                              backgroundColor: news.color,
                              clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
                            }}
                          >
                            {news.category}
                          </div>
                          <div className="text-white text-lg mb-2">{news.date}</div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <h3 className="text-white text-3xl font-bold leading-tight mb-4">{news.title}</h3>
                        </div>
                      </div>
                      <div className="p-12">
                        <p className="text-gray-600 text-xl leading-relaxed mb-8">{news.excerpt}</p>
                        <button
                          className="font-medium px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white relative"
                          style={{
                            backgroundColor: colors.primary,
                            clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
                          }}
                        >
                          {language === "JP" ? "続きを読む" : "Read More"}
                          <ArrowRight className="w-5 h-5 ml-3 inline" />
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              style={{ backgroundColor: colors.secondary }}
            >
              <ChevronLeft className="w-6 h-6 mx-auto" />
            </button>
            <button
              onClick={() => setCurrentNewsSlide((prev) => (prev + 1) % newsItems.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              style={{ backgroundColor: colors.secondary }}
            >
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>

            <div className="flex justify-center mt-8 space-x-3">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsSlide(index)}
                  className={`w-4 h-4 transition-all duration-300 ${index === currentNewsSlide ? "opacity-100" : "opacity-50"}`}
                  style={{ backgroundColor: colors.primary }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 border-t border-gray-200" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Company Overview */}
            <div>
              <div className="text-2xl font-bold text-white mb-4">AEGIS LLP</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {language === "JP"
                  ? "地方自治体のデジタル変革を支える信頼できるパートナー"
                  : "Trusted partner supporting digital transformation of local governments"}
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>{language === "JP" ? "設立: 2020年" : "Established: 2020"}</p>
                <div className="flex items-center space-x-2">
                  <span>{language === "JP" ? "コアバリュー:" : "Core Values:"}</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2" style={{ backgroundColor: colors.primary }} />
                    <div className="w-2 h-2" style={{ backgroundColor: colors.secondary }} />
                    <div className="w-2 h-2" style={{ backgroundColor: "#6C757D" }} />
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <div className="w-12 h-8 bg-gray-600 flex items-center justify-center text-xs text-white">ISO</div>
                <div className="w-12 h-8 bg-gray-600 flex items-center justify-center text-xs text-white">ISMS</div>
              </div>
            </div>

            {/* Column 2: Services & Solutions */}
            <div>
              <h3 className="text-lg font-bold mb-6" style={{ color: colors.secondary }}>
                {language === "JP" ? "サービス一覧 / Service Menu" : "Service Menu"}
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "デジタル変革支援" : "Digital Transformation Support"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "スマートシティ構築" : "Smart City Development"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "システム統合・最適化" : "System Integration & Optimization"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "セキュリティ・コンプライアンス" : "Security & Compliance"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "データ分析・可視化" : "Data Analytics & Visualization"}
                </li>
              </ul>
              <div className="mt-6">
                <a href="#" className="text-white font-medium border-b hover:border-white transition-colors" style={{ borderColor: colors.primary }}>
                  {language === "JP" ? "技術・DX" : "Technology & DX"}
                </a>
              </div>
              <div className="mt-4">
                <a href="#" className="font-medium" style={{ color: colors.primary }}>
                  {language === "JP" ? "全サービス一覧 →" : "All Services →"}
                </a>
              </div>
            </div>

            {/* Column 3: Resources & Information */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">
                {language === "JP" ? "リソース / Resources" : "Resources"}
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "プロジェクト事例" : "Project Case Studies"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "ホワイトペーパー" : "White Papers"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "よくある質問" : "FAQ"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "ニュース・インサイト" : "News & Insights"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "採用情報" : "Careers"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "プライバシーポリシー" : "Privacy Policy"}
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  {language === "JP" ? "利用規約" : "Terms of Service"}
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Business Information */}
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.secondary }}>
                <a href="tel:03-1234-5678">TEL: 03-1234-5678</a>
              </div>
              <div className="text-2xl mb-6" style={{ color: colors.secondary }}>
                <a href="tel:03-1234-5679">{language === "JP" ? "緊急: 03-1234-5679" : "Emergency: 03-1234-5679"}</a>
              </div>

              <button 
                className="w-full font-medium py-3 mb-8 text-lg hover:opacity-90 transition-colors text-white relative"
                style={{ 
                  backgroundColor: colors.primary,
                  clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
                }}
              >
                {language === "JP" ? "お問い合わせフォーム" : "Contact Form"}
              </button>

              <div className="space-y-6 text-sm text-gray-300">
                <div>
                  <h4 className="font-bold text-white mb-2">
                    {language === "JP" ? "営業時間 / Business Hours" : "Business Hours"}
                  </h4>
                  <div className="space-y-1">
                    <p>{language === "JP" ? "平日 (月-金): 9:00 - 17:00" : "Weekdays (Mon-Fri): 9:00 - 17:00"}</p>
                    <p>{language === "JP" ? "土曜日: 9:00 - 12:00 (緊急対応のみ)" : "Saturday: 9:00 - 12:00 (Emergency only)"}</p>
                    <p>{language === "JP" ? "日曜・祝日: 休業" : "Sunday & Holidays: Closed"}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">
                    {language === "JP" ? "24時間対応サービス" : "24/7 Services"}
                  </h4>
                  <div className="space-y-1">
                    <p>・{language === "JP" ? "既存顧客技術サポート" : "Existing customer technical support"}</p>
                    <p>・{language === "JP" ? "緊急システム障害対応" : "Emergency system failure response"}</p>
                    <p>・{language === "JP" ? "セキュリティインシデント対応" : "Security incident response"}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Office Locations</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">{language === "JP" ? "本社:" : "Headquarters:"}</p>
                      <p>〒100-0001 {language === "JP" ? "東京都千代田区千代田1-1-1" : "Tokyo, Chiyoda-ku, Chiyoda 1-1-1"}</p>
                    </div>
                    <div>
                      <p className="font-medium">{language === "JP" ? "関西支社:" : "Kansai Branch:"}</p>
                      <p>〒530-0001 {language === "JP" ? "大阪府大阪市北区梅田1-1-1" : "Osaka, Kita-ku, Umeda 1-1-1"}</p>
                    </div>
                    <div>
                      <p className="font-medium">{language === "JP" ? "九州支社:" : "Kyushu Branch:"}</p>
                      <p>〒810-0001 {language === "JP" ? "福岡県福岡市中央区天神1-1-1" : "Fukuoka, Chuo-ku, Tenjin 1-1-1"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <div className="text-gray-300">
                  {language === "JP" ? "言語 / Language:" : "Language:"}
                  <button
                    onClick={() => setLanguage(language === "JP" ? "EN" : "JP")}
                    className="ml-2 text-white font-medium hover:opacity-80 transition-colors"
                    style={{ color: colors.primary }}
                  >
                    JP | EN
                  </button>
                </div>
                <p className="text-gray-300 text-sm">© 2024 AEGIS LLP. All rights reserved.</p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <div className="w-8 h-8 bg-gray-600 flex items-center justify-center">
                      <span className="text-xs">Li</span>
                    </div>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <div className="w-8 h-8 bg-gray-600 flex items-center justify-center">
                      <span className="text-xs">Tw</span>
                    </div>
                  </a>
                </div>

                <button 
                  className="font-medium px-4 py-2 hover:opacity-90 transition-colors text-white"
                  style={{ 
                    backgroundColor: colors.primary,
                    clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'
                  }}
                >
                  {language === "JP" ? "最新情報を受け取る" : "Get Latest Updates"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-16 h-16 text-white font-bold text-2xl shadow-lg hover:shadow-xl transition-all duration-300 z-40 group hover:opacity-90"
          style={{ backgroundColor: colors.primary }}
        >
          <svg
            className="w-8 h-8 mx-auto transition-transform duration-300 group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  )
}