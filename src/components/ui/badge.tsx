import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[.04] px-3 py-1 text-xs font-medium text-foreground/70",
        className
      )}
      {...props}
    />
  );
}

