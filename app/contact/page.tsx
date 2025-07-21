"use client"

import { Building2, ChevronRight, Clock, Mail, MapPin, Phone, Send, Train } from "lucide-react"
import Image from "next/image"
import type React from "react"
import { useEffect, useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        department: "",
        inquiryType: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [scrollY, setScrollY] = useState(0)

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            console.log("Form submitted:", formData)
            setSubmitStatus("success")
            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                department: "",
                inquiryType: "",
                message: ""
            })
        } catch (error) {
            console.error("Form submission error:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const inquiryTypes = [
        "サービスに関するお問い合わせ",
        "資料請求",
        "お見積もり依頼",
        "採用に関するお問い合わせ",
        "その他"
    ]

    const officeInfo = {
        main: {
            name: "本社",
            address: "〒100-0001 東京都千代田区千代田1-1-1",
            building: "AEGIS Building 10F",
            access: [
                "東京駅 丸の内北口より徒歩5分",
                "大手町駅 C1出口より徒歩3分",
                "二重橋前駅 4番出口より徒歩7分"
            ]
        }
    }

    return (
        <div className="min-h-screen bg-white pt-20">
            <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.1em;
        }
      `}</style>

            {/* Hero Section */}
            <section className="relative h-[50vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/placeholder.svg?height=600&width=1920)`,
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                お問い合わせ
                            </h1>
                            <p className="text-xl text-gray-200">
                                AEGIS LLPへのご質問、ご相談、資料請求など、お気軽にお問い合わせください
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Options Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            お問い合わせ方法
                        </h2>
                        <p className="text-lg text-gray-600">
                            お客様のご都合に合わせて、最適な方法でお問い合わせください
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
                    </div>

                    {/* Contact Cards - Japanese Style Layout */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="group relative bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary mb-4">
                                    <Phone className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2">お電話</h3>
                                <p className="text-gray-600 text-sm">直接お話をご希望の方</p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-3xl font-bold text-primary">03-1234-5678</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        受付時間: 平日 9:00 - 17:00<br />
                                        （土日祝日を除く）
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        緊急のご用件: 03-1234-5679<br />
                                        <span className="text-xs">(24時間対応)</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary mb-4">
                                    <Mail className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2">メール</h3>
                                <p className="text-gray-600 text-sm">詳細なご相談をご希望の方</p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xl font-medium text-gray-800">info@aegis-llp.jp</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        24時間受付<br />
                                        2営業日以内にご返信いたします
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        採用に関するお問い合わせ:<br />
                                        recruit@aegis-llp.jp
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary mb-4">
                                    <Building2 className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2">ご来社</h3>
                                <p className="text-gray-600 text-sm">直接お越しいただく方</p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium text-gray-800 mb-1">{officeInfo.main.address}</p>
                                    <p className="text-sm text-gray-600">{officeInfo.main.building}</p>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        ご来社の際は事前にご連絡ください<br />
                                        受付: 平日 9:00 - 17:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section - Japanese Corporate Style */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-xl">
                        <div className="bg-primary text-white p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">お問い合わせフォーム</h2>
                            <p className="text-white/90">必要事項をご記入の上、送信ボタンをクリックしてください</p>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="space-y-8">
                                {/* Company Information Section */}
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-6 pb-2 border-b-2 border-gray-200">
                                        貴社情報
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                会社名 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors duration-200"
                                                placeholder="株式会社〇〇"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                部署名
                                            </label>
                                            <input
                                                type="text"
                                                name="department"
                                                value={formData.department}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors duration-200"
                                                placeholder="〇〇部"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Person Information */}
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-6 pb-2 border-b-2 border-gray-200">
                                        ご担当者情報
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                お名前 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors duration-200"
                                                placeholder="山田 太郎"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                電話番号
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors duration-200"
                                                placeholder="03-1234-5678"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                メールアドレス <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors duration-200"
                                                placeholder="yamada@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Inquiry Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-6 pb-2 border-b-2 border-gray-200">
                                        お問い合わせ内容
                                    </h3>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                お問い合わせ種別 <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="inquiryType"
                                                value={formData.inquiryType}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors duration-200"
                                            >
                                                <option value="">選択してください</option>
                                                {inquiryTypes.map((type) => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                お問い合わせ詳細 <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary transition-colors duration-200"
                                                placeholder="お問い合わせ内容をご記入ください"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Privacy Policy Agreement */}
                                <div className="bg-gray-50 p-6 border border-gray-200">
                                    <p className="text-sm text-gray-600 mb-4">
                                        ご記入いただいた個人情報は、お問い合わせへの対応およびご連絡のためにのみ使用いたします。
                                        詳細は<a href="/privacy" className="text-primary underline">プライバシーポリシー</a>をご確認ください。
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="inline-flex items-center bg-primary text-white font-bold px-12 py-4 text-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-5 w-5 text-white mr-3"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                送信中...
                                            </>
                                        ) : (
                                            <>
                                                送信する
                                                <Send className="w-5 h-5 ml-3" strokeWidth={1.5} />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div className="bg-green-50 border border-green-200 p-4 text-center">
                                        <p className="text-green-800">
                                            お問い合わせありがとうございます。<br />
                                            内容を確認後、2営業日以内にご連絡いたします。
                                        </p>
                                    </div>
                                )}
                                {submitStatus === "error" && (
                                    <div className="bg-red-50 border border-red-200 p-4 text-center">
                                        <p className="text-red-800">
                                            送信中にエラーが発生しました。<br />
                                            お手数ですが、もう一度お試しください。
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Access Information Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            アクセス
                        </h2>
                        <div className="w-24 h-1 mx-auto bg-primary" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Map */}
                        <div className="relative h-96 lg:h-full min-h-[400px] bg-gray-200">
                            <Image
                                src="/placeholder.svg?height=600&width=800"
                                alt="Office location map"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Access Details */}
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-black mb-4">本社</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                                        <div>
                                            <p className="font-medium text-gray-800">{officeInfo.main.address}</p>
                                            <p className="text-gray-600">{officeInfo.main.building}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                                        <div>
                                            <p className="font-medium text-gray-800">営業時間</p>
                                            <p className="text-gray-600">平日 9:00 - 17:00（土日祝日を除く）</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Train Access */}
                            <div>
                                <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                                    <Train className="w-5 h-5" strokeWidth={1.5} />
                                    電車でお越しの方
                                </h4>
                                <div className="space-y-3">
                                    {officeInfo.main.access.map((route, index) => (
                                        <div key={index} className="flex items-center gap-3 pl-7">
                                            <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                                            <span className="text-gray-700">{route}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-8 p-6 bg-gray-50 border border-gray-200">
                                <p className="text-sm text-gray-600">
                                    ※ お車でお越しの際は、近隣の有料駐車場をご利用ください。<br />
                                    ※ ご来社の際は、1階受付にて「AEGIS LLP」とお申し付けください。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-black mb-8">よくあるご質問</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "相談や見積もりは無料ですか？",
                                a: "はい、初回のご相談やお見積もりは無料で承っております。お気軽にお問い合わせください。"
                            },
                            {
                                q: "オンラインでの打ち合わせは可能ですか？",
                                a: "はい、Zoom、Teams等でのオンライン会議に対応しております。ご希望の方法をお申し付けください。"
                            },
                            {
                                q: "地方自治体以外からの相談も可能ですか？",
                                a: "もちろん可能です。民間企業や各種団体からのご相談も承っております。"
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-6 border-l-4 border-primary">
                                <h3 className="font-bold text-gray-800 mb-2">Q. {faq.q}</h3>
                                <p className="text-gray-600 pl-4">A. {faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}