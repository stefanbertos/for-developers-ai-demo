/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationOverridesProps = {
    Navigation?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "For Developers"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32136482772"?: PrimitiveOverrideProps<FlexProps>;
    AIButton?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32136482777"?: PrimitiveOverrideProps<FlexProps>;
    LoginButton?: PrimitiveOverrideProps<ButtonProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type NavigationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavigationOverridesProps | undefined | null;
}>;
export default function Navigation(props: NavigationProps): React.ReactElement;
