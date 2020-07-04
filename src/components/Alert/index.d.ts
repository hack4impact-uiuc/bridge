declare module "@hack4impact-uiuc/bridge/lib/Alert" {
  import { CommonProps } from "@hack4impact-uiuc/bridge/common";
  import { Theme } from "styled-system";

  export interface AlertProps extends CommonProps {
    variant?: "success" | "error" | "warning" | "information";
    theme?: Theme;
  }

  export default interface Alert extends React.FC<AlertProps> {}
}
