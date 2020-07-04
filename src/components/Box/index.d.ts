import { CommonProps, BorderProps } from "../../utils/common";
import { FlexboxProps, Theme } from "styled-system";
import { FunctionComponent } from "react";

export interface BoxProps extends CommonProps, FlexboxProps, BorderProps {
  theme?: Theme;
}

export default interface Box extends FunctionComponent<BoxProps> {}
