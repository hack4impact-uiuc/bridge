import { FunctionComponent } from "react";
import { FlexboxProps, Theme } from "styled-system";
import { BordersProps, CommonProps } from "../../utils/common";

export interface FlexProps extends BordersProps, CommonProps, FlexboxProps {
  theme?: Theme;
}

interface Flex extends FunctionComponent<FlexProps> {}

declare const Flex: Flex;

export default Flex;
