declare module "@hack4impact-uiuc/bridge/common" {
  import { Props, ReactType } from "react";
  import {
    ColorProps,
    SpaceProps,
    LayoutProps,
    TypographyProps as StyledTypographyProps,
    BordersProps as StyledBordersProps,
    BoxShadowProps,
  } from "styled-system";

  export interface BaseProps extends Props<any> {
    as?: ReactType;
    className?: string;
  }
  export interface CommonProps
    extends BaseProps,
      ColorProps,
      SpaceProps,
      LayoutProps {}

  export interface TypographyProps extends BaseProps, StyledTypographyProps {}

  export interface BorderProps extends StyledBordersProps, BoxShadowProps {}
}
