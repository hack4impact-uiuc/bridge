import { CommonProps } from "../../utils/common";
import { ChangeEvent, FunctionComponent, ReactNode } from "react";
import { BoxProps } from "../Box";
import { Theme } from "styled-system";

export interface CheckboxProps extends CommonProps {
  checked: boolean;
  children: ReactNode;
  defaultChecked: boolean;
  disabled?: boolean;
  error?: "default" | "error" | "warning" | "success";
  id: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  theme?: Theme;
  value?: any;
}

export interface CheckboxGroupProps extends BoxProps {
  children: ReactNode;
  defaultValue: any;
  disabled?: boolean;
  error?: "default" | "error" | "warning" | "success";
  theme?: Theme;
  vertical?: boolean;
}

export default interface Checkbox extends FunctionComponent<CheckboxProps> {
  Group: FunctionComponent<CheckboxGroupProps>;
}
