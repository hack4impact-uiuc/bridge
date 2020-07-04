import { CommonProps } from "../../utils/common";
import { FunctionComponent } from "react";
import { Theme } from "styled-system";

export interface IconProps extends CommonProps {
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

export default interface Icon extends FunctionComponent<IconProps> {}
