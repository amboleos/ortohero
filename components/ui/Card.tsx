import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-md transition-all duration-300',
        hover && 'hover:shadow-lg hover:-translate-y-1',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn('group', className)}>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-heading font-bold text-xl text-neutral-800 mb-3">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </Card>
  );
}

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export function IconCard({
  icon,
  title,
  description,
  className,
  iconClassName,
}: IconCardProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      <div
        className={cn(
          'w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-500',
          iconClassName
        )}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-heading font-semibold text-lg text-neutral-800 mb-1">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
