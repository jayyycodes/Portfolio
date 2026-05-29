import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const variants = {
            primary: "btn-primary",
            outline: "btn-outline",
        };

        return (
            <Comp
                className={cn(variants[variant], "cursor-interactive", className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
