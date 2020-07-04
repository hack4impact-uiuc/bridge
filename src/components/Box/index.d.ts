declare module "@hack4impact-uiuc/bridge/lib/Box" {
  import { CommonProps, BorderProps } from "@hack4impact-uiuc/bridge/common";
  import { FlexboxProps, Theme } from "styled-system";

  export interface BoxProps extends CommonProps, FlexboxProps, BorderProps {
    theme?: Theme;
  }

  export default interface Box extends React.FC<BoxProps> {}
}
