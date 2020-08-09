import { FunctionComponent } from "react";
import { Theme } from "styled-system";
import { CommonProps, TypographyProps } from "../../utils/common";

export interface HeadingProps extends CommonProps, TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: "h1" | "h2" | "h3" | "h4";
  theme?: Theme;
}

interface Heading extends FunctionComponent<HeadingProps> {}

declare const Heading: Heading;

export default Heading;
