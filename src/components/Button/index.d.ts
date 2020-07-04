import { CommonProps, BorderProps } from "../../utils/common";
import { default as Box } from "../Box";
import { FunctionComponent } from "react";
import { Theme } from "styled-system";

export interface ButtonProps extends CommonProps {
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
