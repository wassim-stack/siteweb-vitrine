import { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "sencondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  isFullSize,
  children,
}) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "sencondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
