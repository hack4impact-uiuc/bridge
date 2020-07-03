declare module "@hack4impact-uiuc/bridge" {
  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
  import * as StyledSystem from "styled-system";
  import { SystemStyleObject } from "@styled-system/css";

  export interface BaseProps extends React.Props<any> {
    as?: React.ReactType;
    className?: string;
  }

  interface CommonProps
    extends BaseProps,
      StyledSystem.ColorProps,
      StyledSystem.SpaceProps,
      StyledSystem.LayoutProps {}

  interface LayoutProps extends BaseProps, StyledSystem.LayoutProps {}

  interface TypographyProps extends BaseProps, StyledSystem.TypographyProps {}

  interface BorderProps
    extends StyledSystem.BordersProps,
      StyledSystem.BoxShadowProps {}

  interface PositionProps extends StyledSystem.PositionProps {}

  // export interface BoxProps
  //   extends BaseProps,
  //     CommonProps,
  //     StyledSystem.FlexboxProps,
  //     Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}

  // export const Box: React.FunctionComponent<BoxProps>

  export const Flex: React.FunctionComponent<FlexProps>;

  // interface AlertProps
  //   extends BaseProps,
  //     CommonProps {}

  // export const Alert: React.FunctionComponent<AlertProps>

  // ?
  // declare module "Button" {
  //   interface ButtonProps
  //     extends CommonProps,
  //       Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  //     variant?: string;
  //     outline?: boolean;
  //     variant?: "small" | "medium" | "large";
  //   }

  //   export const Button: React.FunctionComponent<ButtonProps>;
  //   export const ButtonGroup: React.FunctionComponent<BoxProps>;
  // }

  // declare module "Card" {
  //   export const Card: React.FunctionComponent<ButtonProps>;
  //   export const CardBody: React.FunctionComponent<ButtonProps>;
  //   export const CardContent: React.FunctionComponent<ButtonProps>;
  //   export const CardFooter: React.FunctionComponent<ButtonProps>;
  //   export const CardImage: React.FunctionComponent<ButtonProps>;
  //   export const CardOverline: React.FunctionComponent<ButtonProps>;
  //   export const CardSubtitle: React.FunctionComponent<ButtonProps>;
  //   export const CardTitle: React.FunctionComponent<ButtonProps>;
  // }

  export interface GridProps extends BoxProps, StyledSystem.GridProps {}

  export const Grid: React.FunctionComponent<GridProps>;
}

// declare module "@hack4impact-uiuc/bridge/lib/Box" {
//   import { Box } from "@primer/components";
//   export default Box;
// }
