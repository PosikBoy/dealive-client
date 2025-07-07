import clsx from "clsx";
import React, { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  ...rest
}) => {
  const buttonStyles =
    color === "white" ? styles.whiteButton : styles.blueButton;
  return (
    <button
      type={type}
      className={clsx(styles.button, buttonStyles, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
