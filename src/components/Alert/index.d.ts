import { CommonProps } from "@hack4impact-uiuc/bridge";
import { Theme } from "styled-system";

declare module "@hack4impact-uiuc/bridge/lib/Alert" {
  export interface AlertProps extends CommonProps {
    variant?: "success" | "error" | "warning" | "information";
    theme?: Theme;
  }

  export default interface Alert extends React.FC<AlertProps> {}
}
