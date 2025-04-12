"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col space-y-4">
          <Link href="/om-klinikken" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Om Klinikken
          </Link>
          <Link href="/abningstider" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Åbningstider
          </Link>
          <Link href="/kontakt" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Kontakt
          </Link>
          <Link href="/henvisninger" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Henvisninger
          </Link>
          <Link href="/priser" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Priser
          </Link>
          <Link href="/links" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Links
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 