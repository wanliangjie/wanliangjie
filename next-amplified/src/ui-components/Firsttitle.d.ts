/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
import { NavBarProps } from "./NavBar";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FirsttitleOverridesProps = {
    Firsttitle?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    NavBar?: NavBarProps;
    Booksplace?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type FirsttitleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FirsttitleOverridesProps | undefined | null;
}>;
export default function Firsttitle(props: FirsttitleProps): React.ReactElement;
