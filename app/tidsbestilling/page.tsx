"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { PatientPortalLogo } from "@/components/ui/patient-portal-logo"

export default function Appointment() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <div className="space-y-12 animate-in fade-in duration-700">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold">
            <span className="text-[#c4161d]">Tidsbestilling</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book nemt og hurtigt din tid online gennem vores digitale services
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 group">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
              Online Booking
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Book din tid online gennem vores patientportal. Her kan du se ledige tider og vælge den tid, der passer dig bedst.
              </p>
              <div className="flex justify-center py-6">
                <PatientPortalLogo className="w-[200px] transition-transform group-hover:scale-105" />
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://patientportal.egclinea.com/?id=613", "_blank")}
                className="w-full flex items-center justify-center gap-3 transition-all hover:bg-[#c4161d] hover:text-white hover:scale-105"
              >
                <ExternalLink className="h-5 w-5" />
                Book Online
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
              Telefonisk Tidsbestilling
            </h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Telefontid</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Mandag - Fredag</span>
                    <span>08:00 - 12:00</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Kontakt</h3>
                <p className="text-2xl font-semibold text-[#c4161d]">38 60 00 82</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Ved akut sygdom samme dag: Ring mellem kl. 08:00 - 09:00
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
            Vigtig Information
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              • Kom venligst 5 minutter før din tid
            </p>
            <p className="text-muted-foreground">
              • Afbud skal ske senest 24 timer før din tid
            </p>
            <p className="text-muted-foreground">
              • Husk gyldigt sundhedskort
            </p>
          </div>
        </Card>
      </div>
    </main>
  )
}