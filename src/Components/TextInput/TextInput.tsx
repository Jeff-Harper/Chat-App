import React from "react";
import styles from "./TextInput.module.css";

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "tel" | "email" | "search";
    label: string;
    valueCallback?: (data: string) => void;
}

export function TextInput({
    id,
    name,
    label,
    type,
    valueCallback,
    ...rest
}: WithRequired<TextInputProps, "id" | "name" | "label" | "type">) {
    const pattern = type === "text" || type === "search" ? undefined : type;

    return (
        <div className={styles.inputBox}>
            <input
                id={id}
                name={name}
                type={type ? type : "text"}
                pattern={pattern}
                onChange={e => valueCallback?.(e.target.value)}
                {...rest}
            />
            <span>{label}</span>
        </div>
    );
}
