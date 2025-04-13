import { Card } from "@/components/ui/card"

export default function AboutClinic() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <div className="space-y-12 animate-in fade-in duration-700">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold">
            <span className="text-[#c4161d]">Om klinikken</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lær mere om vores klinik, vores team og vores faciliteter
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 group">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
              Vores Team
            </h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    DR
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Dr. Marie Hansen</h3>
                  <p className="text-sm text-muted-foreground">Praktiserende læge</p>
                  <p className="text-sm text-muted-foreground">Specialiseret i almen medicin</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    JN
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Dr. Jonas Nielsen</h3>
                  <p className="text-sm text-muted-foreground">Praktiserende læge</p>
                  <p className="text-sm text-muted-foreground">Specialiseret i børn og unge</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    SA
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Sofia Andersen</h3>
                  <p className="text-sm text-muted-foreground">Sygeplejerske</p>
                  <p className="text-sm text-muted-foreground">Erfaren i kroniske sygdomme</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 group">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
              Faciliteter
            </h2>
            <div className="space-y-4">
              <div className="h-48 bg-muted animate-pulse rounded-lg"></div>
              <p className="text-muted-foreground">
                Moderne udstyr og komfortable faciliteter til at sikre den bedste behandling
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c4161d] to-[#ff4b4b] text-transparent bg-clip-text">
            Åbningstider & Kontakt
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Åbningstider</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Mandag - Fredag</span>
                  <span>08:00 - 16:00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Weekend</span>
                  <span>Lukket</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Kontakt</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Telefon: 38 60 00 82</p>
                <p>Email: kontakt@dinlaege.dk</p>
                <p>Adresse: Husumvej 131, 2700 København</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}