import { forwardRef, cloneElement, isValidElement, ReactElement } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-[#BB1AA0] text-white hover:bg-[#9A1780] hover:-translate-y-0.5 focus:ring-[#BB1AA0] active:bg-[#7A1466] shadow-md hover:shadow-lg',
  secondary:
    'bg-[#14B8A6] text-white hover:bg-[#0D9488] hover:-translate-y-0.5 focus:ring-[#14B8A6] active:bg-[#0F766E] shadow-md hover:shadow-lg',
  outline:
    'bg-transparent border-2 border-[#BB1AA0] text-[#BB1AA0] hover:bg-[#BB1AA0] hover:text-white focus:ring-[#BB1AA0]',
  ghost:
    'bg-transparent text-[#BB1AA0] hover:bg-[#BB1AA0]/10 focus:ring-[#BB1AA0]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<{ className?: string; children?: React.ReactNode }>;
      return cloneElement(child, {
        className: cn(combinedClassName, child.props?.className),
        children: content,
      });
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
