import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./ClientLayout" // Import ClientLayout

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AEGIS LLP",
  description: "地方自治体のデジタル変革を推進するAEGIS LLP",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
