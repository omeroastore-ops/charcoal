import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "manuscript" | "manuscriptOutline" | "manuscriptIcon";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={`button button-${variant} button-${size} ${className}`.trim()} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button };
