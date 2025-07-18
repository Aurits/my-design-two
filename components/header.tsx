"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { label: "ホーム", href: "/" },
        { label: "会社概要", href: "/about" },
        { label: "サービス", href: "/services" },
        { label: "プロジェクト", href: "/projects" },
        { label: "技術・DX", href: "/technology" },
        { label: "ニュース", href: "/news" },
        { label: "採用情報", href: "/careers" },
        { label: "お問い合わせ", href: "/contact" },
    ]

    return (
        <header
            className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-xl py-2 md:py-3"
                    : "bg-gradient-to-br from-white to-gray-50 shadow-lg py-3 md:py-4"
                }`}
        >
            {/* Animated background shape */}
            <div className="absolute -top-1/2 -right-10 w-60 h-60 md:w-80 md:h-80 bg-gradient-radial from-primary/10 to-transparent rounded-full animate-float pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="relative z-10">
                        <Link href="/" className="block">
                            <div className="text-2xl md:text-3xl font-black gradient-text tracking-wider">
                                AEGIS LLP
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-600 tracking-widest hidden sm:block">
                                デジタル変革パートナー
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="relative group py-2"
                            >
                                <div className="text-sm xl:text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200">
                                    {item.label}
                                </div>
                                {/* Animated underline */}
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side - Desktop */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                        <div className="text-right">
                            <div className="text-base xl:text-xl font-bold text-secondary">
                                <a href="tel:03-1234-5678" className="hover:text-primary transition-colors duration-200">
                                    03-1234-5678
                                </a>
                            </div>
                            <div className="text-[10px] xl:text-xs text-gray-600">平日 9:00-17:00</div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="relative bg-cta text-white font-bold px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-primary group overflow-hidden"
                        >
                            <span className="relative z-10">お問い合わせ</span>
                            {/* Animated background effect */}
                            <div className="absolute inset-0 bg-secondary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="lg:hidden p-2 text-primary hover:bg-gray-100 transition-colors duration-200"
                    >
                        <Menu className="w-6 h-6" strokeWidth={2} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] sm:w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 shadow-2xl ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <div className="text-2xl font-bold gradient-text">AEGIS LLP</div>
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                        <X className="w-6 h-6" strokeWidth={2} />
                    </button>
                </div>

                <nav className="p-4">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-4 border-b border-gray-100 block group"
                        >
                            <div className="flex justify-between items-center">
                                <div className="text-lg font-medium text-gray-800 group-hover:text-primary transition-colors duration-200">
                                    {item.label}
                                </div>
                                <div className="text-gray-400 group-hover:text-primary transition-colors duration-200">
                                    →
                                </div>
                            </div>
                        </Link>
                    ))}

                    <div className="mt-8 space-y-4">
                        <Link
                            href="/contact"
                            className="w-full bg-cta text-white font-bold py-4 text-center block hover:bg-primary transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            お問い合わせ
                        </Link>

                        <div className="text-center pt-4 border-t border-gray-200">
                            <div className="text-xl font-bold mb-2 text-secondary">
                                <a href="tel:03-1234-5678">03-1234-5678</a>
                            </div>
                            <div className="text-sm text-gray-600">受付時間 平日 9:00-17:00</div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}