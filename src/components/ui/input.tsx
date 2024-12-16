'use client'; // Add this at the top of your component file

import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  onPriceChange?: (value: number) => void; // Callback for handling price changes
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", onPriceChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);
      if (!isNaN(value) && onPriceChange) {
        onPriceChange(value);
      }
    };

    return (
      <input
        type={type}
        onChange={handleChange}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
