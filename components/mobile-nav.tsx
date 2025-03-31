"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Download, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (sectionId: string) => {
    setOpen(false)

    // Smooth scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Uday Chaudhary</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleLinkClick("about")}
              className="flex items-center text-lg font-medium transition-colors hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick("projects")}
              className="flex items-center text-lg font-medium transition-colors hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => handleLinkClick("skills")}
              className="flex items-center text-lg font-medium transition-colors hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => handleLinkClick("contact")}
              className="flex items-center text-lg font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <Button asChild>
              <a href="/InternResume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <div className="flex justify-between">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

