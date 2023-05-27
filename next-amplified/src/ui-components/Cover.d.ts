/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoverOverridesProps = {
    Cover?: PrimitiveOverrideProps<ViewProps>;
    "pexels-vitA\u0303\u00B3ria-santos-3050943 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    "Welcome to UPC library!"?: PrimitiveOverrideProps<TextProps>;
    "Click here to start"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CoverProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CoverOverridesProps | undefined | null;
}>;
export default function Cover(props: CoverProps): React.ReactElement;
