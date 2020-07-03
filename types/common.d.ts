import * as React from "react";
import * as StyledSystem from "styled-system";

export interface BaseProps extends React.Props<any> {
  as?: React.ReactType;
  className?: string;
}

export interface CommonProps
  extends BaseProps,
    StyledSystem.ColorProps,
    StyledSystem.SpaceProps,
    StyledSystem.LayoutProps {}
