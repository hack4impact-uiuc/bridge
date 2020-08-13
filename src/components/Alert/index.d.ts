import { Theme } from "styled-system";
import { FunctionComponent } from "react";
import { CommonProps } from "../../utils/common";

export interface AlertProps extends CommonProps {
  variant?: "success" | "error" | "warning" | "information";
  theme?: Theme;
}

interface Alert extends FunctionComponent<AlertProps> {}

declare const Alert: Alert;

export default Alert;
