import { ButtonHTMLAttributes, memo } from "react";
import styles from "./styles.module.css";

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string;
    size: "small" | "medium" | "large";
    variant?: "wide";
}

export const Button = memo(function Button({
    children,
    size,
    variant,
    ...rest
}: WithRequired<ButtonProps, "size">) {
    let classList = styles.button;
    if (size) classList += " " + styles[size];
    if (variant) classList += " " + styles[variant];

    return (
        <button className={classList} {...rest}>
            {children}
        </button>
    );
});
