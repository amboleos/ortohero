'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
  className?: string;
  /** Matches Orthero homepage: light top → deep purple bottom */
  variant?: 'solid' | 'gradient';
  emailPlaceholder?: string;
}

export function NewsletterSection({
  title = 'Subscribe to our newsletter',
  description = 'Stay updated with the latest news',
  className,
  variant = 'solid',
  emailPlaceholder = 'Enter your email',
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  const isGradient = variant === 'gradient';

  return (
    <section
      className={cn(
        'py-16 md:py-20',
        isGradient
          ? 'bg-gradient-to-b from-white via-[#e8e0f4] to-[#330388]'
          : 'bg-[#23282D]',
        className
      )}
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className={cn(
              'font-heading font-bold text-2xl md:text-3xl mb-3',
              isGradient ? 'text-[#330388]' : 'text-white'
            )}
          >
            {title}
          </h2>
          <p className={cn('mb-8', isGradient ? 'text-[#330388]/80' : 'text-gray-400')}>
            {description}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto rounded-xl p-1 sm:p-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              aria-label={emailPlaceholder}
              required
              className={cn(
                'flex-1 px-5 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#BB1AA0]/50 focus:border-[#BB1AA0]',
                isGradient
                  ? 'bg-white border border-[#4C1D95]/15 text-[#330388] placeholder:text-neutral-400 shadow-sm'
                  : 'bg-white/10 border border-white/20 text-white placeholder:text-gray-400'
              )}
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-normal rounded-full transition-all duration-200 shadow-md',
                isSubmitted
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-[#BB1AA0] text-white hover:bg-[#330388]'
              )}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
