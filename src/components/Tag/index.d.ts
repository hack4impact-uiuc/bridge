import { FunctionComponent } from "react";
import { Theme } from "styled-system";
import { CommonProps } from "../../utils/common";

export interface TagProps extends CommonProps {
  variant?: "light" | "primary" | "dark";
  color?: "blue" | "indigo" | "grey" | "yellow" | "red" | "green";
  theme?: Theme;
}

export default interface Tag extends FunctionComponent<TagProps> {}
