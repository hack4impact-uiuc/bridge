import { FunctionComponent } from "react";
import { FlexboxProps, Theme } from "styled-system";
import { BordersProps, CommonProps } from "../../utils/common";

export interface FlexProps extends BordersProps, CommonProps, FlexboxProps {
  theme?: Theme;
}

export default interface Flex extends FunctionComponent<FlexProps> {}
