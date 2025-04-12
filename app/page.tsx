"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AppDownload } from "@/components/app-download"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-700">
      <h1 className="text-4xl font-bold text-center mb-12">Din læge klinik</h1>

      <Card className="p-6 prose prose-lg dark:prose-invert max-w-none">
        <div className="space-y-4">
          <p>
            Den 1. marts 2025 gik Ole Abrahamson på pension, og jeg har overtaget Oles klinik.
          </p>
          <p>
            I forbindelse med overdragelsen af en klinik er der mange praktiske ting, der skal falde på plads. 
            Det kan nok ikke undgås, at der vil opstå vanskeligheder og måske ventetider i begyndelsen. 
            Det håber jeg, I har forståelse for.
          </p>
          <p>
            E-konsultation og tidsbestilling er nu oppe at køre. Jeg anbefaler brug af den officielle app 
            'Min Læge' fra PLO (Praktiserende Lægers Organisation), der er downloadet af mere end 2 millioner 
            danskere. Via den er det også muligt at lave videokonsultationer, så du ikke behøver at fremmøde 
            hver gang. Alternativt kan Patientportalen fortsat anvendes. Se link til både Min Læge-appen og 
            Patientportalen nedenfor.
          </p>
          <p>
            Jeg byder alle velkommen og ser frem til at hilse på klinikkens patienter.
          </p>
          <p className="font-semibold">
            Mange venlige hilsner
          </p>
          <p className="font-semibold">
            Pernille Christine Jørgensen<br />
            Speciallæge i almen medicin
          </p>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Min Læge App</h2>
          <AppDownload />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Patientportal</h2>
          <Card className="p-6 flex flex-col items-center space-y-4">
            <Image
              src="https://patientportal.egclinea.com/Resources/Images/patientportal_forside.svg"
              alt="Patientportal"
              width={200}
              height={200}
              className="transition-transform hover:scale-105"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://patientportal.egclinea.com/?id=613", "_blank")}
              className="flex items-center gap-2 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ExternalLink className="h-5 w-5" />
              Gå til Patientportal
            </Button>
          </Card>
        </div>
      </div>
    </main>
  )
}
