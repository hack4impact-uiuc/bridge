import { CommonProps, TypographyProps } from "../../utils/common";
import { FunctionComponent } from "react";
import { Theme } from "styled-system";

export interface HeadingProps extends CommonProps, TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: "h1" | "h2" | "h3" | "h4";
  theme?: Theme;
}

export default interface Heading extends FunctionComponent<HeadingProps> {}
