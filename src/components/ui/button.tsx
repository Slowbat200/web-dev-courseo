import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'dark:text-primary text-secondary underline-offset-4 hover:underline',
        signUp: `relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium 
          shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]`,
        landing: `dark:bg-[#4aa8ff] dark:text-secondary dark:hover:bg-[#3585d9]/80 font-bold uppercase 
          bg-[#007aff] text-[#fff] hover:bg-[#005bb5] hover:border-2 transition shadow-neon-normal hover:shadow-neon-hover active:shadow-neon-inset`,
        modal:
          'dark:text-black dark:bg-[#98E4FF] bg-[#FF6EC7] text-[#333333] hover:outline-[#FF8C00] dark:text-black hover:outline dark:hover:outline-[#9400FF] shadow-[0_4px_14px_0_#27005D]',
        price_button:
          'dark:text-[#fffaff] text-[#333333] border border-2 dark:border-none dark:bg-[#FF6F61] dark:text-[#EAEAEA] bg-[#fffaff] rounded-full pl-4 pr-1 py-1 flex items-center space-x-4 mt-4  font-bold transition duration-300 ease-in-out',
        section_button: 'border border-2 rounded-full',
        },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
