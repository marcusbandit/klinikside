"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"
import Image from "next/image"

export function AppDownload() {
  const [platform, setPlatform] = useState<"ios" | "android" | "desktop">("desktop")

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform("ios")
    } else if (/android/.test(userAgent)) {
      setPlatform("android")
    }
  }, [])

  const appStoreUrl = "https://apps.apple.com/dk/app/min-l%C3%A6ge/id1445003295"
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.trifork.minlaege"

  return (
    <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-card">
      <Image
        src="https://play-lh.googleusercontent.com/AfWe89v8gjc-2M2f1WYtYchjMrp26C4wrJRcw-QW-LFiUazdtd2TKKgV_-D9E1UXWg=w240-h480"
        alt="Min Læge App"
        width={120}
        height={120}
        className="rounded-xl shadow-lg transition-transform hover:scale-105"
      />
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open(appStoreUrl, "_blank")}
          className="flex items-center gap-2 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Apple className="h-5 w-5" />
          App Store
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open(playStoreUrl, "_blank")}
          className="flex items-center gap-2 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Smartphone className="h-5 w-5" />
          Play Store
        </Button>
      </div>
    </div>
  )
} 