"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

// Import the same routes as desktop nav
const routes = [
  {
    href: "/",
    label: "Forside"
  },
  {
    href: "/om-klinikken",
    label: "Om klinikken"
  },
  {
    href: "/tidsbestilling",
    label: "Tidsbestilling"
  },
  {
    href: "/kontakt",
    label: "Kontakt"
  }
]

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <nav className="flex flex-col">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-6 py-4 text-lg border-b border-border/50 transition-colors",
                "relative",
                pathname === route.href ? "font-medium bg-accent/5" : "hover:bg-accent/5",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}