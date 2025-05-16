"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Apple, Smartphone } from "lucide-react";
import { APPSTORE_LINK, cn, GOOGLE_PLAY_LINK } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-red-50 dark:from-slate-950 dark:to-slate-900" />
      
      {/* Animated alert circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-96 w-96 rounded-full border-4 border-red-500/20 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute h-96 w-96 rounded-full border-2 border-red-500/10 animate-ping" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
        <div className="absolute h-64 w-64 rounded-full border border-red-500/5 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-10"
            )}
          >
            Stay <span className="text-red-500">Alert</span>, Save Lives, Be a <span className="text-blue-600">Good&nbsp;Citizen</span>
          </h1>
          
          <p 
            className={cn(
              "text-xl text-muted-foreground mb-10 transition-all duration-700 delay-200 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-10"
            )}
          >
            Get notified when emergency vehicles are nearby. Clear the road, save precious minutes, and help ambulances reach those in need faster.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-10"
            )}
          >
            <Link href={APPSTORE_LINK} target="_blank">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 h-14 px-8 rounded-full">
              <Apple className="mr-2 h-5 w-5" />
              App Store
            </Button>
            </Link>
            <Link href={GOOGLE_PLAY_LINK} target="_blank">
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full">
              <Smartphone className="mr-2 h-5 w-5" />
              Google Play
            </Button>
            </Link>
          </div>
          
          <div 
            className={cn(
              "mt-8 text-sm text-muted-foreground transition-all duration-700 delay-600 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0"
            )}
          >
            <a href="#how-it-works" className="inline-flex items-center hover:text-foreground transition-colors">
              Learn how it works
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}