import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export type ButtonVariant =
  | "default"
  | "outline"
  | "ghost"
  | "secondary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-6";

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-foreground text-background shadow-sm hover:opacity-90 focus-visible:ring-foreground/30",
  outline:
    "border border-foreground/20 bg-transparent text-foreground/90 hover:bg-foreground/[.04]",
  ghost:
    "bg-transparent text-foreground/90 hover:bg-foreground/[.04]",
  secondary:
    "bg-foreground/90 text-background hover:bg-foreground",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : ("button" as const)) as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

