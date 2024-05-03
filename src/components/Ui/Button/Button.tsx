import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  buttonColor?: "white" | "blue";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  type = "button",
  buttonColor = "blue",
  children,
  className,
  onClick = (e: any) => {
    e.preventDefault();
  },
}) => {
  return (
    <button
      type={type}
      className={styles.button + " " + className}
      onClick={onClick}
      style={{
        backgroundColor: buttonColor === "white" ? "#FFFFFF" : "var(--blue)",
        color: buttonColor === "white" ? "var(--black)" : "white",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
