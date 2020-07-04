// declare module "@hack4impact-uiuc/bridge" {
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
// import * as StyledSystem from "styled-system";
// import { SystemStyleObject } from "@styled-system/css";

export { default as Alert } from "./src/components/Alert";
export { default as Box } from "./src/components/Box";
export { default as Button } from "./src/components/Button";
export { default as Card } from "./src/components/Card";
export { default as Checkbox } from "./src/components/Checkbox";
export { default as Flex } from "./src/components/Flex";
export { default as Grid } from "./src/components/Grid";
export { default as Heading } from "./src/components/Heading";
export { default as Icon } from "./src/components/Icon";
export { default as Link } from "./src/components/Link";
export { default as Radio } from "./src/components/Radio";
// export interface BaseProps extends React.Props<any> {
//   as?: React.ReactType;
//   className?: string;
// }

// export interface BoxProps
//   extends BaseProps,
//     CommonProps,
//     StyledSystem.FlexboxProps,
//     Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}

// export const Box: React.FunctionComponent<BoxProps>

// export const Flex: React.FunctionComponent<FlexProps>;

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

// export interface GridProps extends BoxProps, StyledSystem.GridProps {}

// export const Grid: React.FunctionComponent<GridProps>;
// }

// declare module "@hack4impact-uiuc/bridge/lib/Box" {
//   import { Box } from "@primer/components";
//   export default Box;
// }
