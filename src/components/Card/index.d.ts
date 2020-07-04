declare module "@hack4impact-uiuc/bridge/lib/Card" {
  import {
    CommonProps,
    TypographyProps,
  } from "@hack4impact-uiuc/bridge/common";
  import Box, { BoxProps } from "@hack4impact-uiuc/bridge/lib/Box";
  import { Theme } from "styled-system";

  interface CardWrapperProps extends BoxProps {
    theme: Theme;
  }

  // TODO: is there better naming for this?
  interface CardTypographyProps extends CommonProps, TypographyProps {
    theme: Theme;
  }

  export interface CardProps extends CardWrapperProps {}

  export interface CardBodyProps extends CardTypographyProps {}

  export interface CardContentProps extends CardWrapperProps {}

  export interface CardFooterProps extends CardWrapperProps {}

  export interface CardImageProps extends React.HTMLProps<HTMLImageElement> {
    theme: Theme;
  }

  export interface CardOverlineProps extends CardTypographyProps {}

  export interface CardSubtitleProps extends CardTypographyProps {}

  export interface CardTitleProps extends CardTypographyProps {}

  export default interface Card extends React.FC<CardProps> {
    Body: React.FC<CardBodyProps>;
    Content: React.FC<CardContentProps>;
    Footer: React.FC<CardFooterProps>;
    Image: React.FC<CardImageProps>;
    Overline: React.FC<CardOverlineProps>;
    Subtitle: React.FC<CardSubtitleProps>;
    Title: React.FC<CardTitleProps>;
  }
}
