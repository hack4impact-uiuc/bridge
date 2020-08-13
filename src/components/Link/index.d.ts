import { FunctionComponent, HTMLProps, ReactType } from "react";
import { Theme } from "styled-system";
import { CommonProps, TypographyProps } from "../../utils/common";

export interface LinkProps
  extends CommonProps,
    TypographyProps,
    Omit<
      HTMLProps<HTMLAnchorElement>,
      "ref" | "size" | "width" | "height" | "as" | "onClick"
    > {
  color?: string;
  hoverColor?: string;
  underline?: boolean;
  as?: ReactType;
  variant?: "primary" | "secondary" | "white";
  onClick: (e: MouseEvent) => void;
  theme?: Theme;
}

interface Link extends FunctionComponent<LinkProps> {}

declare const Link: Link;

export default Link;
