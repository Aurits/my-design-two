import { ArrowRight, Award, Briefcase, Building2, DollarSign, Heart, Sparkles, Target, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CareersPage() {
    const benefits = [
        {
            icon: <Briefcase className="w-12 h-12" />,
            title: "成長機会",
            titleEn: "Growth Opportunities",
            description: "最先端のDXプロジェクトに参画し、スキルアップとキャリア形成を支援します。",
            color: "bg-primary",
            borderColor: "border-primary",
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "チームワーク",
            titleEn: "Teamwork",
            description: "9社の専門家と連携し、多様な視点から課題解決に取り組みます。",
            color: "bg-secondary",
            borderColor: "border-secondary",
        },
        {
            icon: <DollarSign className="w-12 h-12" />,
            title: "公正な評価",
            titleEn: "Fair Evaluation",
            description: "成果に基づいた評価制度で、あなたの貢献を正当に評価します。",
            color: "bg-cta",
            borderColor: "border-cta",
        },
        {
            icon: <Heart className="w-12 h-12" />,
            title: "ワークライフバランス",
            titleEn: "Work-Life Balance",
            description: "柔軟な働き方を推進し、仕事とプライベートの充実をサポートします。",
            color: "bg-primary",
            borderColor: "border-primary",
        },
        {
            icon: <Award className="w-12 h-12" />,
            title: "社会貢献",
            titleEn: "Social Contribution",
            description: "地方自治体のDXを通じて、地域社会の発展に直接貢献できます。",
            color: "bg-secondary",
            borderColor: "border-secondary",
        },
        {
            icon: <Sparkles className="w-12 h-12" />,
            title: "最新技術",
            titleEn: "Latest Technology",
            description: "AI、IoT、クラウドなど最先端技術に触れ、実践的に活用できます。",
            color: "bg-cta",
            borderColor: "border-cta",
        },
    ]

    const positions = [
        {
            number: "０１",
            title: "DXコンサルタント",
            department: "戦略企画部門",
            type: "正社員",
            location: "東京本社",
            description: "地方自治体のDX戦略立案から実行までを支援。課題特定、ソリューション提案、プロジェクト推進を担当。",
            requirements: ["コンサルティング経験3年以上", "自治体向けプロジェクト経験", "DXに関する深い知識"],
            highlight: "年収800万円〜",
            link: "#",
        },
        {
            number: "０２",
            title: "AIエンジニア",
            department: "技術開発部門",
            type: "正社員",
            location: "東京本社／リモート可",
            description: "AIモデルの開発、データ分析、機械学習システムの構築。自治体データの活用による新たな価値創造を担う。",
            requirements: ["Python, R等での開発経験", "機械学習・深層学習の知識", "大規模データ処理経験"],
            highlight: "フレックス制度あり",
            link: "#",
        },
        {
            number: "０３",
            title: "クラウドアーキテクト",
            department: "インフラ部門",
            type: "正社員",
            location: "東京本社／大阪支社",
            description:
                "AWS, Azure, GCPを用いたクラウドインフラの設計、構築、運用。セキュアでスケーラブルなシステム基盤を構築。",
            requirements: ["クラウド構築経験5年以上", "ネットワーク・セキュリティ知識", "認定資格保有者優遇"],
            highlight: "資格取得支援制度",
            link: "#",
        },
        {
            number: "０４",
            title: "プロジェクトマネージャー",
            department: "プロジェクト管理部門",
            type: "正社員",
            location: "東京本社",
            description: "自治体DXプロジェクト全体の計画、実行、管理。チームをリードし、プロジェクトを成功に導く。",
            requirements: ["PM経験5年以上", "ITプロジェクト管理経験", "コミュニケーション能力"],
            highlight: "管理職候補",
            link: "#",
        },
    ]

    const employeeVoices = [
        {
            name: "山田 太郎",
            position: "DXコンサルタント",
            years: "入社3年目",
            message: "自治体の課題を最新技術で解決する瞬間にやりがいを感じます。チームの支援も手厚く、成長を実感できる環境です。",
            image: "/placeholder.svg?height=300&width=300",
        },
        {
            name: "鈴木 花子",
            position: "AIエンジニア",
            years: "入社2年目",
            message: "最先端のAI技術を社会課題解決に活用できることが魅力。リモートワークも活用し、ワークライフバランスも充実しています。",
            image: "/placeholder.svg?height=300&width=300",
        },
        {
            name: "佐藤 次郎",
            position: "プロジェクトマネージャー",
            years: "入社5年目",
            message: "多様な専門家とのチームワークで大規模プロジェクトを成功に導く。地域社会への貢献を実感できる仕事です。",
            image: "/placeholder.svg?height=300&width=300",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section with Enhanced Design */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary">
                    <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full w-full h-full animate-rotate-slow"></div>
                </div>

                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-6xl md:text-8xl font-thin tracking-widest mb-8 text-white gradient-text-animated animate-shimmer">
                            RECRUIT
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-4 tracking-wider">採用情報</p>
                        <p className="text-lg text-white/80 mb-16 max-w-3xl mx-auto">
                            AEGIS LLPで、あなたの技術と情熱を社会の変革に活かしませんか？<br />
                            最先端のDXプロジェクトを通じて、地域社会の未来を共に創造しましょう。
                        </p>

                        {/* Staff Images */}
                        <div className="flex justify-center gap-8 mb-16 flex-wrap max-w-5xl mx-auto">
                            <div className="relative w-40 h-60 md:w-52 md:h-80">
                                <Image
                                    src="/placeholder.svg?height=300&width=200"
                                    alt="スタッフ1"
                                    fill
                                    className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-white/30 transition-all duration-500 gradient-border animate-bobble-1"
                                />
                            </div>
                            <div className="relative w-40 h-60 md:w-52 md:h-80 mt-10">
                                <Image
                                    src="/placeholder.svg?height=300&width=200"
                                    alt="スタッフ2"
                                    fill
                                    className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-white/30 transition-all duration-500 gradient-border animate-bobble-2"
                                />
                            </div>
                            <div className="relative w-40 h-60 md:w-52 md:h-80 mt-5">
                                <Image
                                    src="/placeholder.svg?height=300&width=200"
                                    alt="スタッフ3"
                                    fill
                                    className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-white/30 transition-all duration-500 gradient-border animate-bobble-3"
                                />
                            </div>
                            <div className="relative w-40 h-60 md:w-52 md:h-80 mt-16">
                                <Image
                                    src="/placeholder.svg?height=300&width=200"
                                    alt="スタッフ4"
                                    fill
                                    className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-white/30 transition-all duration-500 gradient-border animate-bobble-4"
                                />
                            </div>
                        </div>

                        <Link
                            href="#open-positions"
                            className="inline-block bg-white text-primary px-12 py-4 font-extrabold text-lg tracking-wide hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                        >
                            募集職種を見る →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Company Culture Section - New */}
            <section className="py-20 bg-white relative overflow-hidden animated-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 relative">
                            私たちの文化
                            <span className="absolute -top-10 right-0 text-8xl font-black opacity-10 text-secondary">Culture</span>
                        </h2>
                        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 gradient-text">
                                技術で社会を変える、<br />
                                仲間と共に成長する
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                AEGIS LLPは、個人の成長と組織の発展を両立させる環境を提供しています。
                                最新技術への挑戦、チームでの協働、そして社会への貢献。
                                これらすべてが、私たちの日常です。
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: <Target className="w-6 h-6" />, text: "明確なキャリアパスと成長支援" },
                                    { icon: <Building2 className="w-6 h-6" />, text: "フレキシブルな働き方" },
                                    { icon: <TrendingUp className="w-6 h-6" />, text: "継続的な学習機会" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">
                                            {item.icon}
                                        </div>
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-5 bg-gradient-to-r from-primary to-secondary opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
                            <Image
                                src="/placeholder.svg?height=500&width=600"
                                alt="Company Culture"
                                width={600}
                                height={500}
                                className="w-full shadow-2xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section - Enhanced */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">AEGIS LLPで働くメリット</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            あなたのキャリアを次のステージへ。AEGIS LLPで働く魅力をご紹介します。
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-secondary animate-expandWidth" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative h-48">
                                    <div className={`absolute inset-0 ${benefit.color} opacity-10`} />
                                    <div className="absolute top-6 left-6">
                                        <div className={`w-20 h-20 ${benefit.color} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}>
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-gray-600">{benefit.titleEn}</p>
                                    </div>
                                </div>
                                <div className={`p-6 bg-white border-t-4 ${benefit.borderColor}`}>
                                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Employee Voices Section - New */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">社員の声</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            実際に働く社員たちの生の声をお届けします
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-secondary" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {employeeVoices.map((voice, index) => (
                            <div key={index} className="bg-gray-50 p-6 relative group hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-20 h-20">
                                        <Image
                                            src={voice.image}
                                            alt={voice.name}
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">{voice.name}</h4>
                                        <p className="text-sm text-gray-600">{voice.position}</p>
                                        <p className="text-xs text-gray-500">{voice.years}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed italic">"{voice.message}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section - Enhanced */}
            <section id="open-positions" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
                <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-gradient-radial from-primary/5 to-transparent animate-float"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">現在募集中の職種</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            あなたのスキルと情熱を活かせるポジションがここにあります
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-secondary" />
                    </div>

                    <div className="space-y-8">
                        {positions.map((position, index) => (
                            <div
                                key={index}
                                className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/4 bg-gradient-to-br from-primary to-secondary p-6 text-white">
                                        <div className="text-5xl font-black mb-4 opacity-90 jp-numbers">{position.number}</div>
                                        <div className="space-y-2 text-sm">
                                            <p className="font-medium">{position.department}</p>
                                            <p>{position.type}</p>
                                            <p>{position.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-6 lg:p-8">
                                        <div className="flex flex-wrap items-start justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-primary mb-2 lg:mb-0">{position.title}</h3>
                                            <span className="bg-cta/10 text-cta px-4 py-2 font-medium">
                                                {position.highlight}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed mb-6">{position.description}</p>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-primary mb-3">必須要件:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {position.requirements.map((req, reqIndex) => (
                                                    <span
                                                        key={reqIndex}
                                                        className="bg-gray-100 px-3 py-1 text-sm text-gray-700"
                                                    >
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <Link
                                            href={position.link}
                                            className="inline-flex items-center bg-cta text-white px-6 py-3 font-medium hover:bg-primary transition-all duration-300 group-hover:shadow-lg"
                                        >
                                            詳細を見る・応募する <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process Section - Enhanced Timeline */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">採用プロセス</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            AEGIS LLPへの応募から内定までの流れ
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-primary to-secondary" />
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-cta hidden md:block" />
                        <div className="space-y-16">
                            {[
                                {
                                    step: "０１",
                                    title: "書類選考",
                                    description: "ご提出いただいた応募書類に基づき、これまでのご経験やスキルを拝見します。",
                                    duration: "1週間以内",
                                },
                                {
                                    step: "０２",
                                    title: "一次面接",
                                    description: "部門担当者との面接です。あなたの専門性やチームへの適応性についてお話しいただきます。",
                                    duration: "2週間以内",
                                },
                                {
                                    step: "０３",
                                    title: "二次面接",
                                    description:
                                        "役員面接です。AEGIS LLPのビジョンへの共感や、将来のキャリアプランについてお伺いします。",
                                    duration: "3週間以内",
                                },
                                {
                                    step: "０４",
                                    title: "内定",
                                    description: "最終面接後、内定のご連絡をいたします。入社条件や待遇についてご説明します。",
                                    duration: "1ヶ月以内",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                >
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:text-right"}`}>
                                        <div className={`bg-white p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8 ${index % 2 === 0 ? "border-primary" : "md:border-l-0 md:border-r-8 border-secondary"
                                            }`}>
                                            <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                                            <p className="text-gray-600 mb-3">{item.description}</p>
                                            <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 text-sm font-medium">
                                                所要期間: {item.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative w-20 h-20 flex-shrink-0 hidden md:flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white font-bold text-2xl shadow-xl z-10 jp-numbers">
                                        {item.step}
                                    </div>
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                                        {/* Empty div for spacing */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Showcase Section - From construction site */}
            <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-32 text-center relative overflow-hidden">
                <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-gradient-radial from-primary/5 to-transparent animate-float"></div>
                <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-gradient-radial from-primary/5 to-transparent animate-float" style={{ animationDirection: "reverse" }}></div>

                <h2 className="text-6xl md:text-7xl font-thin tracking-widest mb-5 gradient-text-animated animate-shimmer">
                    JOIN OUR TEAM
                </h2>
                <p className="text-lg text-gray-600 mb-16 tracking-wider">私たちと一緒に働きませんか</p>

                <div className="flex justify-center gap-8 mb-16 flex-wrap max-w-5xl mx-auto">
                    <div className="relative w-52 h-80">
                        <Image
                            src="/placeholder.svg?height=300&width=200"
                            alt="チームメンバー1"
                            fill
                            className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-primary/30 transition-all duration-500 gradient-border animate-bobble-1"
                        />
                    </div>
                    <div className="relative w-52 h-80 mt-10">
                        <Image
                            src="/placeholder.svg?height=300&width=200"
                            alt="チームメンバー2"
                            fill
                            className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-primary/30 transition-all duration-500 gradient-border animate-bobble-2"
                        />
                    </div>
                    <div className="relative w-52 h-80 mt-5">
                        <Image
                            src="/placeholder.svg?height=300&width=200"
                            alt="チームメンバー3"
                            fill
                            className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-primary/30 transition-all duration-500 gradient-border animate-bobble-3"
                        />
                    </div>
                    <div className="relative w-52 h-80 mt-16">
                        <Image
                            src="/placeholder.svg?height=300&width=200"
                            alt="チームメンバー4"
                            fill
                            className="object-cover rounded-full shadow-2xl hover:scale-110 hover:rotate-6 hover:shadow-primary/30 transition-all duration-500 gradient-border animate-bobble-4"
                        />
                    </div>
                </div>

                <Link
                    href="#open-positions"
                    className="inline-block bg-white text-primary px-12 py-4 border-4 border-primary font-extrabold text-lg tracking-wide hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden liquid-button"
                >
                    募集職種を見る →
                </Link>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gradient-to-br from-primary to-secondary py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full w-full h-full animate-rotate-slow"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        一緒に未来を創造しませんか？
                    </h2>
                    <p className="text-xl text-white/90 mb-10 leading-relaxed">
                        AEGIS LLPは、あなたの挑戦を全力でサポートします。<br />
                        最先端技術と社会貢献の両立を、私たちと共に実現しましょう。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-primary font-bold px-8 py-4 text-lg hover:bg-white/90 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            エントリーする
                        </Link>
                        <Link
                            href="#"
                            className="inline-block bg-transparent text-white font-bold px-8 py-4 text-lg border-2 border-white hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            採用説明会に参加
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}