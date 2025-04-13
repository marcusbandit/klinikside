"use client"

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center gap-4 md:h-24 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} dinlægeklinik. Alle rettigheder forbeholdes.
          </p>
        </div>
        <nav className="flex items-center space-x-4 text-sm font-medium">
          <Link href="/om-klinikken" className="transition-colors hover:text-foreground/80">
            Om Klinikken
          </Link>
          <Link href="/kontakt" className="transition-colors hover:text-foreground/80">
            Kontakt
          </Link>
          <Link href="/links" className="transition-colors hover:text-foreground/80">
            Links
          </Link>
        </nav>
      </div>
    </footer>
  )
}