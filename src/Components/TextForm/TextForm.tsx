import React from "react";

interface TextFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /* Custome props here */
}

const TextForm = React.forwardRef<HTMLFormElement, TextFormProps>(
  ({ children, ...props }, ref) => {
    return (
      <form ref={ref} {...props}>
        {children}
      </form>
    );
  }
);

export { TextForm };
