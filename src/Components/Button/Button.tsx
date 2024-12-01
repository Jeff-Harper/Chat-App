import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "small" | "large" | "icon";
  variant?: "destructive" | "outline" | "secondary" | "ghost" | "link" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size, variant, className, ...props }, ref) => {
    return (
      <button
        data-size={size}
        data-variant={variant}
        className={`${styles.Button} ${className ? className : ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { Button };
