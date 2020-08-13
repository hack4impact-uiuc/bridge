import { FunctionComponent } from "react";
import { GridProps as StyledGridProps, Theme } from "styled-system";
import { BordersProps, CommonProps } from "../../utils/common";

export interface GridProps extends BordersProps, CommonProps, StyledGridProps {
  theme?: Theme;
}

interface Grid extends FunctionComponent<GridProps> {}

declare const Grid: Grid;

export default Grid;
