/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  SelectField,
  StepperField,
  Text,
  TextAreaField,
} from "@aws-amplify/ui-react";
export default function HackathonDashboard(props) {
  const { imageLoader, overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="58px 50px 58px 50px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HackathonDashboard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="50px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Image generation with openai"
        {...getOverrideProps(overrides, "Image generation with openai")}
      ></Text>
      <Flex
        gap="5px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <TextAreaField
          width="495px"
          height="unset"
          label="A text description of the desired image(s)"
          shrink="0"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "PromptTextAreaField")}
        ></TextAreaField>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          children={imageLoader}
          {...getOverrideProps(overrides, "ImageLoader")}
        ></Flex>
      </Flex>
      <SelectField
        width="300px"
        height="unset"
        label="The size of the generated images"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "ImageResolutionSelectField")}
      ></SelectField>
      <StepperField
        width="unset"
        height="unset"
        label="Number of images to generate"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "NumberOfImagesStepperField")}
      ></StepperField>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Generate image"
          {...getOverrideProps(overrides, "GenerateImageButton")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Generate  variation"
          {...getOverrideProps(overrides, "GenerateVariationButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
