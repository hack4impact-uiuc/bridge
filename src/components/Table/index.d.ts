import { FunctionComponent, ReactNode } from "react";
import { Theme } from "styled-system";
import { CommonProps, TypographyProps } from "../../utils/common";

export interface TableProps extends CommonProps, TypographyProps {
  type?: "primary" | "borderless" | "zebra";
  theme?: Theme;
}

export interface TableBodyProps extends CommonProps, TypographyProps {
  theme?: Theme;
}

export interface TableCellProps extends CommonProps, TypographyProps {
  theme?: Theme;
}

export interface TableHeadProps extends CommonProps, TypographyProps {
  children: ReactNode;
  theme?: Theme;
}

export interface TableRowProps extends CommonProps, TypographyProps {
  theme?: Theme;
}

export default interface Table extends FunctionComponent<TableProps> {
  Body: FunctionComponent<TableBodyProps>;
  Cell: FunctionComponent<TableCellProps>;
  Head: FunctionComponent<TableHeadProps>;
  Row: FunctionComponent<TableRowProps>;
}
