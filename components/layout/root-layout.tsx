"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-6 md:py-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
} 