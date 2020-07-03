import { CommonProps, BorderProps } from "@hack4impact-uiuc/bridge";
import { FlexboxProps, Theme } from "styled-system";

declare module "@hack4impact-uiuc/bridge/lib/Box" {
  export interface BoxProps extends CommonProps, FlexboxProps, BorderProps {
    theme?: Theme;
  }

  export default interface Box extends React.FC<BoxProps> {}
}
