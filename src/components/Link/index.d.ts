import { CommonProps, TypographyProps } from "../../utils/common";
import { FunctionComponent, HTMLProps, ReactType, HTMLAttributes } from "react";
import { Theme } from "styled-system";

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

export default interface Link extends FunctionComponent<LinkProps> {}
