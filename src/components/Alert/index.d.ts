import { CommonProps } from "../../utils/common";
import { Theme } from "styled-system";
import { FunctionComponent } from "react";

export interface AlertProps extends CommonProps {
  variant?: "success" | "error" | "warning" | "information";
  theme?: Theme;
}

export default interface Alert extends FunctionComponent<AlertProps> {}
