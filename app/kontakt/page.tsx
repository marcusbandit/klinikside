"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react"
import dynamic from 'next/dynamic'

// Dynamically import Map component to avoid SSR issues
const Map = dynamic(
  () => import('@/components/ui/map').then((mod) => mod.Map),
  { 
    ssr: false,
    loading: () => (
      <div className="aspect-video bg-muted rounded-lg animate-pulse" />
    )
  }
)

// Clinic coordinates
const CLINIC_LOCATION: [number, number] = [55.71008124481116, 12.476956818412594] // Husumvej 131, 2700 København

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <div className="space-y-12 animate-in fade-in duration-700">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold">
            <span className="text-[#c4161d]">Kontakt Os</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find os nemt og få hurtig kontakt med klinikken
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 group">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
              Kontakt Information
            </h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-[#c4161d]" />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-muted-foreground">38 60 00 82</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[#c4161d]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">kontakt@dinlaege.dk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-[#c4161d]" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-muted-foreground">Husumvej 131, 2700 København</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-[#c4161d]" />
                <div>
                  <p className="font-semibold">Åbningstider</p>
                  <div className="text-muted-foreground">
                    <p>Mandag - Fredag: 08:00 - 16:00</p>
                    <p>Weekend: Lukket</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
              Find Vej
            </h2>
            <div className="space-y-6">
              <div className="aspect-video">
                <Map center={CLINIC_LOCATION} />
              </div>
              <Button
                variant="outline"
                onClick={() => window.open("https://maps.app.goo.gl/dBXP3Kxv3Lt4sgC47", "_blank")}
                className="w-full flex items-center justify-center gap-3 transition-all hover:bg-[#c4161d] hover:text-white hover:scale-105"
              >
                <ExternalLink className="h-5 w-5" />
                Åbn i Google Maps
              </Button>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
            Akut Hjælp
          </h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">I Klinikkens Åbningstid</h3>
                <p className="text-muted-foreground">
                  Ring til klinikken mellem 08:00 - 09:00 for akut tid samme dag
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Uden for Åbningstid</h3>
                <p className="text-muted-foreground">
                  Ring til lægevagten på 1813
                </p>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Ved livstruende situationer ring altid 112
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}