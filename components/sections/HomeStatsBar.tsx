'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/layout';

type StatItem = {
  label: string;
  suffix: string;
  end: number;
  /** If true, value is shown as integer with locale formatting (e.g. 60,000) */
  compact?: boolean;
};

const STATS: StatItem[] = [
  { end: 10, suffix: ' Years', label: 'Orthero Smiles' },
  { end: 60000, suffix: '+', label: 'Cases', compact: true },
  { end: 4, suffix: ' M+', label: 'Aligners' },
  { end: 20, suffix: '+', label: 'Countries' },
  { end: 120, suffix: '+', label: 'Employees' },
];

function formatValue(n: number, item: StatItem): string {
  if (item.compact) {
    return Math.floor(n).toLocaleString('en-US');
  }
  return String(Math.floor(n));
}

export function HomeStatsBar() {
  const [values, setValues] = useState<number[]>(() => STATS.map(() => 0));
  const started = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;

        const duration = 1800;
        const t0 = performance.now();

        const tick = (now: number) => {
          const t = Math.min(1, (now - t0) / duration);
          const ease = 1 - (1 - t) ** 3;
          setValues(STATS.map((s) => (t >= 1 ? s.end : ease * s.end)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-gradient-to-r from-[#330388] to-[#BB1AA0]"
      aria-label="Orthero milestones"
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {STATS.map((item, index) => (
            <div key={item.label} className="text-center">
              <div className="text-white mb-1 tabular-nums">
                <span className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl">
                  {formatValue(values[index] ?? 0, item)}
                </span>
                <span className="font-heading font-bold text-xl md:text-2xl lg:text-3xl">
                  {item.suffix}
                </span>
              </div>
              <p className="text-white/80 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
