import { Theme } from "styled-system";
import { FunctionComponent } from "react";
import { CommonProps } from "../../utils/common";

export interface AlertProps extends CommonProps {
  variant?: "success" | "error" | "warning" | "information";
  theme?: Theme;
}

export default interface Alert extends FunctionComponent<AlertProps> {}
