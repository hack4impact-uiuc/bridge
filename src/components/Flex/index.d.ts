import { CommonProps, BordersProps } from "../../utils/common";
import { FunctionComponent } from "react";
import { FlexboxProps, Theme } from "styled-system";

export interface FlexProps extends CommonProps, BordersProps, FlexboxProps {
  theme?: Theme;
}

export default interface Flex extends FunctionComponent<FlexProps> {}
