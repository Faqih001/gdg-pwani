import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-600 text-white shadow hover:bg-blue-700",
        secondary:
          "border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200",
        destructive:
          "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
        outline: "text-slate-700 border-slate-200 bg-white/80 backdrop-blur-xs",
        live: "border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold",
        pwani:
          "border-teal-200 bg-teal-50 text-teal-800 font-semibold",
        google:
          "border-blue-200 bg-blue-50 text-blue-700 font-semibold",
        amber:
          "border-amber-200 bg-amber-50 text-amber-800 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
