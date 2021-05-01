import React, { FunctionComponent } from "react";
import { Theme } from "styled-system";
import { CommonProps } from "../../utils/common";

export interface IconProps extends CommonProps, React.SVGProps<SVGSVGElement> {
  type?:
    | "errorAlert"
    | "infoAlert"
    | "successAlert"
    | "warningALert"
    | "fileDragDrop"
    | "formErrorAlert"
    | "opacityUploadFile"
    | "uploadFile";
  theme?: Theme;
}

interface Icon extends FunctionComponent<IconProps> {}

declare const Icon: Icon;

export default Icon;
