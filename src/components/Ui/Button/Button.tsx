import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

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
  onClick,
  className,
}) => {
  const buttonStyles =
    color === "white" ? styles.whiteButton : styles.blueButton;
  return (
    <button
      type={type}
      className={clsx(styles.button, buttonStyles, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
