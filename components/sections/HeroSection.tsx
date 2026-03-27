import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
  overlay?: boolean;
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function HeroSection({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  overlay = true,
  size = 'lg',
  centered = false,
  className,
  children,
}: HeroSectionProps) {
  const sizeClasses = {
    sm: 'py-20 md:py-28',
    md: 'py-28 md:py-36',
    lg: 'py-36 md:py-48 lg:py-56',
  };

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        sizeClasses[size],
        className
      )}
    >
      {/* Background */}
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-500/80 to-secondary-500/70" />
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500" />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary-400/10 blur-3xl" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div
          className={cn(
            'max-w-4xl',
            centered ? 'mx-auto text-center' : ''
          )}
        >
          {badge && (
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
              {badge}
            </span>
          )}

          <h1
            className={cn(
              'font-heading font-bold text-white mb-6 text-balance animate-slide-up',
              size === 'lg' ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl' :
              size === 'md' ? 'text-3xl md:text-4xl lg:text-5xl' :
              'text-2xl md:text-3xl lg:text-4xl'
            )}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 font-light mb-4 animate-slide-up animation-delay-100">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-lg text-white/80 mb-8 max-w-2xl animate-slide-up animation-delay-200">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                'flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300',
                centered ? 'justify-center' : ''
              )}
            >
              {primaryCta && (
                <Button
                  variant="secondary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  asChild
                >
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
