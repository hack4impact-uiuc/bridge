import { Props, ReactType } from "react";
import {
  BoxShadowProps,
  ColorProps,
  LayoutProps,
  TypographyProps as StyledTypographyProps,
  BordersProps as StyledBordersProps,
  SpaceProps,
} from "styled-system";

export interface BaseProps extends Props<any> {
  as?: ReactType;
  className?: string;
  style?: React.CSSProperties;
}

export interface CommonProps
  extends BaseProps,
    ColorProps,
    SpaceProps,
    LayoutProps {}

export interface BordersProps extends BoxShadowProps, StyledBordersProps {}

export interface TypographyProps extends BaseProps, StyledTypographyProps {}
