import { ChangeEvent, FunctionComponent, ReactNode } from "react";
import { Theme } from "styled-system";
import { CommonProps, TypographyProps } from "../../utils/common";
import { BoxProps } from "../Box";

export interface DropdownProps extends CommonProps, TypographyProps {
  children: ReactNode;
  className: string;
  defaultOpen?: boolean;
  error?: "default" | "error" | "warning" | "success";
  id: string;
  open: boolean;
  onToggle: (e: MouseEvent) => void;
  onClickOutside: (e: MouseEvent) => void;
  theme?: Theme;
}

export interface DropdownCaretProps extends CommonProps {
  theme?: Theme;
}

export interface DropdownItemProps extends CommonProps, TypographyProps {
  theme?: Theme;
}

export interface DropdownMenuProps extends CommonProps, TypographyProps {
  theme?: Theme;
}

export interface DropdownSummaryProps extends CommonProps, TypographyProps {
  children: ReactNode;
  theme?: Theme;
}

interface Dropdown extends FunctionComponent<DropdownProps> {
  Caret: FunctionComponent<DropdownCaretProps>;
  Item: FunctionComponent<DropdownItemProps>;
  Menu: FunctionComponent<DropdownMenuProps>;
  Summary: FunctionComponent<DropdownSummaryProps>;
}

declare const Dropdown: Dropdown;

export default Dropdown;
