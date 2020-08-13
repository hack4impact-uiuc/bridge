import { FunctionComponent, ReactType } from "react";
import { Theme } from "styled-system";
import { CommonProps, TypographyProps } from "../../utils/common";

export interface TextProps extends CommonProps, TypographyProps {
  as?: ReactType;
  type?:
    | "body"
    | "caption"
    | "overline"
    | "button"
    | "buttonSmall"
    | "alert"
    | "table"
    | "form"
    | "quote"
    | "subtitle";
  theme?: Theme;
}

interface Text extends FunctionComponent<TextProps> {}

declare const Text: Text;

export default Text;
