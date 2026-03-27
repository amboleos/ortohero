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
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-[#BB1AA0] text-white hover:bg-[#330388] focus:ring-[#BB1AA0] active:bg-[#2A026F] shadow-md',
  secondary:
    'bg-[#F0F7FF] text-[#330388] hover:bg-[#330388] hover:text-white focus:ring-[#330388] border border-[#330388]/10',
  outline:
    'bg-white border border-[#330388] text-[#330388] hover:bg-[#330388] hover:text-white focus:ring-[#330388]',
  ghost:
    'bg-transparent text-[#BB1AA0] hover:bg-[#BB1AA0]/10 focus:ring-[#BB1AA0]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-[14px]',
  lg: 'px-6 py-4 text-[14px]',
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
