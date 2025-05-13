"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AmbulanceIcon, MenuIcon, X } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled
          ? "bg-white/95 dark:bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <AmbulanceIcon className="h-8 w-8 text-red-500" />
          <span className="font-bold text-xl">{APP_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Testimonials
          </Link>
          <Button asChild variant="default" className="bg-red-500 hover:bg-red-600">
            <Link href="#download">Download Now</Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b py-4 px-4 absolute top-full left-0 right-0 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Button
              asChild
              variant="default"
              className="bg-red-500 hover:bg-red-600 w-full"
            >
              <Link href="#download" onClick={() => setIsMobileMenuOpen(false)}>
                Download Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}