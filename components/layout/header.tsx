'use client';

import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileNav } from '@/components/layout/mobile-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="h-6 w-6 bg-foreground/20 rounded"></span>
            <span className="hidden font-bold sm:inline-block">
              KlinikSide
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/om-klinikken" className="transition-colors hover:text-foreground/80">Om Klinikken</Link>
            <Link href="/abningstider" className="transition-colors hover:text-foreground/80">Åbningstider</Link>
            <Link href="/kontakt" className="transition-colors hover:text-foreground/80">Kontakt</Link>
            <Link href="/henvisninger" className="transition-colors hover:text-foreground/80">Henvisninger</Link>
            <Link href="/priser" className="transition-colors hover:text-foreground/80">Priser</Link>
            <Link href="/links" className="transition-colors hover:text-foreground/80">Links</Link>
          </nav>
        </div>
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:flex-none"></div>
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
} 