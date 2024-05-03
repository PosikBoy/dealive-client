import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  color?: "white" | "blue";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  type = "button",
  color = "blue",
  children,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={styles.button + " " + className}
      onClick={onClick}
      style={{
        backgroundColor: color === "white" ? "#FFFFFF" : "var(--blue)",
        color: color === "white" ? "var(--blue)" : "white",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
