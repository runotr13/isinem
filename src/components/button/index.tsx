import React, { FC, ReactNode, MouseEventHandler } from "react";
import { LoadingButton } from "../loading";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonType {
  className?: string;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;

  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "third";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonType> = ({
  className = "",
  children = "",
  loading = false,
  type = "button",
  disabled = false,
  variant = "primary",
  onClick,
}) => {
  const variantColor = {
    primary:
      "bg-light-buttons-primary-solidBg hover:bg-opacity-85 text-light-buttons-primary-solidText",
    secondary:
      "bg-light-buttons-secondary-solidBg hover:bg-opacity-85 text-light-buttons-secondary-solidText",
    third:
      "bg-light-buttons-third-solidBg hover:bg-opacity-85 text-light-buttons-third-solidText",
  };
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled ?? loading}
      className={twMerge(
        clsx(
          "flex items-center justify-center",
          "md:text-base text-sm font-semibold",
          "duration-300 leading-18 md:leading-20",
          "hover:shadow-sm rounded-8",
          variantColor[variant],
          "px-[18px] md:px-5 py-[8px] md:py-[10px] ",
          className
        )
      )}
    >
      {loading ? <LoadingButton color={"text-white"} /> : children}
    </button>
  );
};

export { Button };
