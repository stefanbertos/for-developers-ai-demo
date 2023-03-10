/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HackathonDashboardOverridesProps = {
    HackathonDashboard?: PrimitiveOverrideProps<FlexProps>;
    "Image generation with openai"?: PrimitiveOverrideProps<TextProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    PromptTextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ImageLoader?: PrimitiveOverrideProps<FlexProps>;
    LoadImageButton?: PrimitiveOverrideProps<ButtonProps>;
    ImageResolutionSelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    NumberOfImagesStepperField?: PrimitiveOverrideProps<StepperFieldProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    GenerateImageButton?: PrimitiveOverrideProps<ButtonProps>;
    GenerateVariationButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HackathonDashboardProps = React.PropsWithChildren<Partial<FlexProps> & {
    imageLoader?: React.ReactNode;
} & {
    overrides?: HackathonDashboardOverridesProps | undefined | null;
}>;
export default function HackathonDashboard(props: HackathonDashboardProps): React.ReactElement;
