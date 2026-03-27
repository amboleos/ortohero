'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export function NewsletterSection({
  title = 'Subscribe to our newsletter',
  description = 'Stay updated with the latest news',
  className,
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

  return (
    <section className={cn('py-16 md:py-20 bg-[#23282D]', className)}>
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
            {title}
          </h2>
          <p className="text-gray-400 mb-8">{description}</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BB1AA0]/50 focus:border-[#BB1AA0] transition-all"
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200',
                isSubmitted
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-[#BB1AA0] text-white hover:bg-[#9A1780] hover:-translate-y-0.5'
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
