"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS, STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { QuoteIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People <span className="text-red-500">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of drivers and emergency personnel who are making a difference with GoodCitizen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-2">
              <div className="relative h-96 overflow-hidden">
                {TESTIMONIALS.map((testimonial, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 p-8 md:p-12 flex flex-col transition-all duration-500 ease-in-out",
                      index === activeIndex
                        ? "opacity-100 translate-x-0 z-10"
                        : index < activeIndex
                        ? "opacity-0 -translate-x-full z-0"
                        : "opacity-0 translate-x-full z-0"
                    )}
                  >
                    <div className="flex-1">
                      <QuoteIcon className="h-10 w-10 text-red-300 dark:text-red-700 mb-6" />
                      <p className="text-xl md:text-2xl italic mb-8">{testimonial.text}</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  index === activeIndex
                    ? "bg-red-500 w-8"
                    : "bg-slate-300 dark:bg-slate-700"
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hidden md:flex"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md hidden md:flex"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}