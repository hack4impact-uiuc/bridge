import { CommonProps, BordersProps } from "../../utils/common";
import { FunctionComponent } from "react";
import { GridProps as StyledGridProps, Theme } from "styled-system";

export interface GridProps extends CommonProps, BordersProps, StyledGridProps {
  theme?: Theme;
}

export default interface Grid extends FunctionComponent<GridProps> {}
