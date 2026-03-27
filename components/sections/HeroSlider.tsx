'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Slide {
  badge?: string;
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function HeroSlider({
  slides,
  autoPlay = true,
  interval = 5000,
  className,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);

  return (
    <section className={cn('relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden', className)}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#BB1AA0]/90 via-[#BB1AA0]/80 to-[#330388]/70" />
          </div>

          {/* Content */}
          <Container className="relative z-10 h-full flex items-center">
            <div className="max-w-2xl pt-24 md:pt-32">
              {slide.badge && (
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
                  {slide.badge}
                </span>
              )}

              <h1
                className="font-heading font-bold text-white mb-6 text-balance animate-slide-up"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: 1.2,
                }}
              >
                {slide.title}
              </h1>

              {slide.subtitle && (
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-up animation-delay-100">
                  {slide.subtitle}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
                {slide.primaryCta && (
                  <Link
                    href={slide.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#BB1AA0] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                  >
                    {slide.primaryCta.text}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                )}
                {slide.secondaryCta && (
                  <Link
                    href={slide.secondaryCta.href}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#BB1AA0] transition-all duration-200"
                  >
                    {slide.secondaryCta.text}
                  </Link>
                )}
              </div>
            </div>
          </Container>
        </div>
      ))}

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
