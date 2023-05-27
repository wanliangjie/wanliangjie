/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BookcardsProps } from "./Bookcards";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookcardsCollectionOverridesProps = {
    BookcardsCollection?: PrimitiveOverrideProps<CollectionProps>;
    Bookcards?: BookcardsProps;
} & EscapeHatchProps;
export declare type BookcardsCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => BookcardsProps;
} & {
    overrides?: BookcardsCollectionOverridesProps | undefined | null;
}>;
export default function BookcardsCollection(props: BookcardsCollectionProps): React.ReactElement;
