import { FunctionComponent, ReactNode } from "react";
import { Theme } from "styled-system";
import { CommonProps } from "../../utils/common";

export interface TextFieldProps extends CommonProps {
  "aria-label": string;
  // TODO: what is this? - what type should it be
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

interface TextField extends FunctionComponent<TextFieldProps> {}

declare const TextField: TextField;

export default TextField;
