import { FlexboxProps, Theme } from "styled-system";
import { FunctionComponent } from "react";
import { BorderProps, CommonProps } from "../../utils/common";

export interface BoxProps extends BordersProps, CommonProps, FlexboxProps {
  theme?: Theme;
}

export default interface Box extends FunctionComponent<BoxProps> {}
