import { CommonProps, BordersProps } from "../../utils/common";
import { FlexboxProps, Theme } from "styled-system";
import { FunctionComponent } from "react";

export interface BoxProps extends CommonProps, FlexboxProps, BordersProps {
  theme?: Theme;
}

export default interface Box extends FunctionComponent<BoxProps> {}
