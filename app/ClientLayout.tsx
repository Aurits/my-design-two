"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import type React from "react"
import { useEffect, useState } from "react"
import "./globals.css"

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [scrollY, setScrollY] = useState(0)
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
            setShowScrollTop(window.scrollY > 500)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <html lang="ja">
            <body>
                <Header />
                {children}
                <Footer />

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white font-bold text-2xl shadow-lg hover:shadow-xl transition-all duration-300 z-40 group hover:opacity-90"
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
            </body>
        </html>
    )
}
