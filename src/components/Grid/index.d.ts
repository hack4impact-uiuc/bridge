import { FunctionComponent } from "react";
import { GridProps as StyledGridProps, Theme } from "styled-system";
import { BordersProps, CommonProps } from "../../utils/common";

export interface GridProps extends BordersProps, CommonProps, StyledGridProps {
  theme?: Theme;
}

export default interface Grid extends FunctionComponent<GridProps> {}
