declare module "@hack4impact-uiuc/bridge/lib/Button" {
  import { CommonProps } from "@hack4impact-uiuc/bridge/common";
  import Box from "@hack4impact-uiuc/bridge/lib/Box";
  import { Theme } from "styled-system";

  export interface ButtonProps extends CommonProps {
    variant?:
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "warning"
      | "white";
    disabled?: boolean;
    outline?: boolean;
    onClick?: (e: MouseEvent) => void;
    className?: "string";
    type?: "small" | "medium" | "large";
    theme?: Theme;
  }

  export default interface Button extends React.FC<ButtonProps> {
    Group: Box;
  }
}
