"use client"

import { Building2, ChevronRight, Clock, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-primary text-white relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-cta rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }} />
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                        {/* Column 1: Company Overview */}
                        <div className="space-y-6">
                            <div>
                                <div className="text-3xl font-black mb-2">AEGIS LLP</div>
                                <div className="text-sm text-secondary tracking-wider font-medium">
                                    DIGITAL TRANSFORMATION PARTNER
                                </div>
                            </div>

                            <p className="text-gray-200 leading-relaxed">
                                地方自治体のデジタル変革を支える信頼できるパートナー
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-secondary/20 flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-300">設立</p>
                                        <p className="font-bold">2020年</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-cta/20 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-cta" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-300">従業員数</p>
                                        <p className="font-bold">200名</p>
                                    </div>
                                </div>
                            </div>

                            {/* Certification Badges */}
                            <div className="flex gap-3">
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold">
                                    ISO 27001
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold">
                                    ISMS
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Services */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-secondary" />
                                サービス一覧
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "デジタル変革支援", href: "/services#digital" },
                                    { name: "スマートシティ構築", href: "/services#smart-city" },
                                    { name: "システム統合・最適化", href: "/services#integration" },
                                    { name: "セキュリティ・コンプライアンス", href: "/services#security" },
                                    { name: "データ分析・可視化", href: "/services#analytics" },
                                ].map((service, index) => (
                                    <li key={index}>
                                        <Link
                                            href={service.href}
                                            className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2 group"
                                        >
                                            <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            <span>{service.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-6 border-t border-white/20">
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 text-cta font-bold hover:gap-4 transition-all duration-200"
                                >
                                    全サービス一覧
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Column 3: Resources */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-cta" />
                                リソース
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "プロジェクト事例", href: "/projects" },
                                    { name: "ホワイトペーパー", href: "/resources/whitepapers" },
                                    { name: "よくある質問", href: "/faq" },
                                    { name: "ニュース・インサイト", href: "/news" },
                                    { name: "採用情報", href: "/careers" },
                                    { name: "プライバシーポリシー", href: "/privacy" },
                                    { name: "利用規約", href: "/terms" },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center gap-2 group"
                                        >
                                            <ChevronRight className="w-4 h-4 text-cta opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div className="space-y-6">
                            {/* Phone Numbers */}
                            <div className="bg-white/10 backdrop-blur-sm p-6 space-y-4">
                                <div>
                                    <p className="text-sm text-gray-300 mb-1">代表電話</p>
                                    <a
                                        href="tel:03-1234-5678"
                                        className="text-2xl font-bold text-secondary hover:text-cta transition-colors duration-200"
                                    >
                                        03-1234-5678
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300 mb-1">緊急連絡先 (24時間)</p>
                                    <a
                                        href="tel:03-1234-5679"
                                        className="text-xl font-bold text-cta hover:text-secondary transition-colors duration-200"
                                    >
                                        03-1234-5679
                                    </a>
                                </div>
                            </div>

                            {/* Contact Button */}
                            <Link
                                href="/contact"
                                className="block w-full bg-cta text-white font-bold py-4 text-center hover:bg-secondary transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                            >
                                <span className="relative z-10">お問い合わせフォーム</span>
                                <div className="absolute inset-0 bg-secondary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>

                            {/* Business Hours */}
                            <div className="space-y-4">
                                <h4 className="font-bold flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-secondary" />
                                    営業時間
                                </h4>
                                <div className="text-sm space-y-2 text-gray-200">
                                    <p>平日: 9:00 - 17:00</p>
                                    <p>土曜: 9:00 - 12:00 (緊急対応)</p>
                                    <p>日祝: 休業</p>
                                </div>
                            </div>

                            {/* 24/7 Services */}
                            <div className="bg-secondary/20 p-4 space-y-2">
                                <h4 className="font-bold text-sm">24時間対応サービス</h4>
                                <ul className="text-sm space-y-1 text-gray-200">
                                    <li>• 既存顧客技術サポート</li>
                                    <li>• 緊急システム障害対応</li>
                                    <li>• セキュリティインシデント</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Office Locations */}
                    <div className="border-t border-white/20 pt-8 mb-8">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-secondary" />
                            事業所一覧
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    name: "本社",
                                    address: "〒100-0001 東京都千代田区千代田1-1-1",
                                    type: "primary",
                                },
                                {
                                    name: "関西支社",
                                    address: "〒530-0001 大阪府大阪市北区梅田1-1-1",
                                    type: "secondary",
                                },
                                {
                                    name: "九州支社",
                                    address: "〒810-0001 福岡県福岡市中央区天神1-1-1",
                                    type: "secondary",
                                },
                            ].map((office, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/5 backdrop-blur-sm p-4 border-l-4 ${office.type === "primary" ? "border-cta" : "border-secondary"
                                        }`}
                                >
                                    <h4 className="font-bold mb-2">{office.name}</h4>
                                    <p className="text-sm text-gray-200">{office.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-white/20 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-6">
                                <p className="text-sm text-gray-300">
                                    © 2024 AEGIS LLP. All rights reserved.
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                {/* Social Links */}
                                <div className="flex gap-3">
                                    {[
                                        { name: "LinkedIn", icon: "in" },
                                        { name: "Twitter", icon: "X" },
                                        { name: "Facebook", icon: "f" },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                                            aria-label={social.name}
                                        >
                                            <span className="text-sm font-bold">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>

                                {/* Newsletter Signup */}
                                <Link
                                    href="/newsletter"
                                    className="bg-secondary text-white font-medium px-6 py-2 hover:bg-cta transition-all duration-300 flex items-center gap-2 group"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>最新情報を受け取る</span>
                                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// Add this import if needed
import { Users } from "lucide-react"
