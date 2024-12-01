import React, { useState } from "react";
import { Button } from "../Button/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./TextInput.module.css";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "outline" | "filled";
  width?: "narrow" | "wide";
  type: "text" | "tel" | "email" | "search" | "password";
  label?: string;
  setValue?: (data: string) => void;
  handleSubmit?: () => void;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      variant,
      width,
      type,
      label,
      className,
      pattern,
      setValue,
      handleSubmit,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDirty, setIsDirty] = useState(false);

    const defaultPatterns = {
      text: undefined,
      search: undefined,
      email: "^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$", // case-insensitive email regex
      password:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$", // 8 < characters < 15, at least one letter, one number and one special character
      tel: "^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$", // Phone number regex
    };

    function handlePasswordVisibility() {
      setIsVisible((prevState) => !prevState);
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      if (!event.target.validity.valid && !isDirty) setIsDirty(true);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (isDirty) setIsDirty(false);
      setValue?.(event.target.value);
    }

    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          type={type !== "password" ? type : isVisible ? "text" : "password"}
          className={`${styles.TextInput} ${isDirty ? styles.dirty : ""} ${
            className ? className : ""
          }`}
          data-variant={variant}
          data-width={width}
          pattern={pattern ? pattern : defaultPatterns[type]}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <Button
            type="button"
            variant="ghost"
            onClick={handlePasswordVisibility}
            className={styles.passwordButton}
          >
            {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Button>
        )}
        {type === "search" && (
          <Button
            type="button"
            variant="ghost"
            onClick={handleSubmit}
            className={styles.passwordButton}
          >
            <SearchIcon />
          </Button>
        )}
      </div>
    );
  }
);

export { TextInput };
