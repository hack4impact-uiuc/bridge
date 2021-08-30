import { FlexboxProps, Theme } from "styled-system";
import { FunctionComponent } from "react";
import { BordersProps, CommonProps } from "../../utils/common";

export interface BoxProps extends BordersProps, CommonProps, FlexboxProps {
  theme?: Theme;
}

interface Box extends FunctionComponent<BoxProps> {}

declare const Box: Box;

export default Box;
