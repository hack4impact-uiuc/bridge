import { FunctionComponent, ReactNode } from "react";
import { FlexboxProps, Theme } from "styled-system";
import { BordersProps, CommonProps } from "../../utils/common";

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
  extends BordersProps,
    CommonProps,
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

interface Radio extends FunctionComponent<RadioProps> {
  Group: FunctionComponent<RadioGroupProps>;
}

declare const Radio: Radio;

export default Radio;
