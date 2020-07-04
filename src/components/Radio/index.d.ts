import { CommonProps, BordersProps } from "../../utils/common";
import { FunctionComponent, ReactNode } from "react";
import { FlexboxProps, Theme } from "styled-system";

export interface RadioProps extends CommonProps {
  checked: boolean;
  children: ReactNode;
  defaultChecked: boolean;
  disabled?: boolean;
  error: "default" | "error" | "warning" | "success";
  id: "string";
  name?: "string";
  onChange: (e: MouseEvent) => void;
  theme?: Theme;
  value: any;
}

export interface RadioGroupProps
  extends CommonProps,
    BordersProps,
    FlexboxProps {
  children: ReactNode;
  defaultValue: any;
  disabled?: boolean;
  error: "default" | "error" | "warning" | "success";
  name: string;
  onChange: (e: MouseEvent) => void;
  theme?: Theme;
  value: any;
  vertical?: boolean;
}

export default interface Radio extends FunctionComponent<RadioProps> {
  Group: FunctionComponent<RadioGroupProps>;
}
