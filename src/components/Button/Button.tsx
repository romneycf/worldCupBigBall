import React from "react";
import styles from "./Button.module.css";

export interface ButtonPropsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  className,
  ...rest
}: ButtonPropsInterface) {
  return (
    <button {...rest} className={styles.input + " " + className}>
      {children}
    </button>
  );
}