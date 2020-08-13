import { FunctionComponent, ReactType } from "react";
import { Theme } from "styled-system";
import { CommonProps } from "../../utils/common";
import Box from "../Box";

export interface ButtonProps extends CommonProps {
  as?: ReactType;
  variant?: "primary" | "secondary" | "success" | "error" | "warning" | "white";
  disabled?: boolean;
  outline?: boolean;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  type?: "small" | "medium" | "large";
  theme?: Theme;
}

interface Button extends FunctionComponent<ButtonProps> {
  Group: Box;
}

declare const Button: Button;

export default Button;
