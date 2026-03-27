import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'primary',
  className,
}: CTASectionProps) {
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-500 text-white',
    dark: 'bg-neutral-900 text-white',
  };

  return (
    <section className={cn('section-padding', variantStyles[variant], className)}>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                'text-lg mb-8',
                variant === 'dark' ? 'text-neutral-300' : 'text-white/80'
              )}
            >
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Button
                variant={variant === 'dark' ? 'primary' : 'outline'}
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className={cn(
                  variant !== 'dark' && 'border-white text-white hover:bg-white hover:text-primary-600'
                )}
                asChild
              >
                <Link href={primaryCta.href}>{primaryCta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button variant="ghost" size="lg" asChild>
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
