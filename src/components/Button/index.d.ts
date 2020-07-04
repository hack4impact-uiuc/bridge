import { CommonProps } from "../../utils/common";
import Box from "../Box";
import { FunctionComponent, ReactType } from "react";
import { Theme } from "styled-system";

export interface ButtonProps extends CommonProps {
  as?: ReactType;
  variant?: "primary" | "secondary" | "success" | "error" | "warning" | "white";
  disabled?: boolean;
  outline?: boolean;
  onClick?: (e: MouseEvent) => void;
  className?: "string";
  type?: "small" | "medium" | "large";
  theme?: Theme;
}

export default interface Button extends FunctionComponent<ButtonProps> {
  Group: Box;
}
