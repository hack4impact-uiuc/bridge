import { FunctionComponent, HTMLProps } from "react";
import { Theme } from "styled-system";
import { CommonProps, TypographyProps } from "../../utils/common";
import { FlexProps } from "../Flex";

interface CardWrapperProps extends FlexProps {
  theme?: Theme;
}

// TODO: is there better naming for this?
interface CardTypographyProps extends CommonProps, TypographyProps {
  theme?: Theme;
}

export interface CardProps extends CardWrapperProps {}

export interface CardBodyProps extends CardTypographyProps {}

export interface CardContentProps extends CardWrapperProps {}

export interface CardFooterProps extends CardWrapperProps {}

export interface CardImageProps extends HTMLProps<HTMLImageElement> {
  theme?: Theme;
}

export interface CardOverlineProps extends CardTypographyProps {}

export interface CardSubtitleProps extends CardTypographyProps {}

export interface CardTitleProps extends CardTypographyProps {}

interface Card extends FunctionComponent<CardProps> {
  Body: FunctionComponent<CardBodyProps>;
  Content: FunctionComponent<CardContentProps>;
  Footer: FunctionComponent<CardFooterProps>;
  Image: FunctionComponent<CardImageProps>;
  Overline: FunctionComponent<CardOverlineProps>;
  Subtitle: FunctionComponent<CardSubtitleProps>;
  Title: FunctionComponent<CardTitleProps>;
}

declare const Card: Card;

export default Card;
