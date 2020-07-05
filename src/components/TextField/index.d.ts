import { CommonProps } from "../../utils/common";
import { FunctionComponent, ReactNode } from "react";
import { Theme } from "styled-system";

export interface TextFieldProps extends CommonProps {
  "aria-label": string;
  // TODO: what is this???
  as: any;
  autoComplete: string;
  disabled?: boolean;
  error?: "default" | "error" | "warning" | "success";
  icon?: ReactNode;
  id: string;
  lines?: number;
  onChange: (e: KeyboardEvent) => void;
  placeholder: string;
  theme?: Theme;
  type?: "email" | "number" | "password" | "tel" | "text" | "url" | "date";
  value: string;
}

export default interface TextField extends FunctionComponent<TextFieldProps> {}
