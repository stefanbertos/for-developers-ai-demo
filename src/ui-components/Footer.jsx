/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="104px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Any views expressed are solely based upon personal opinion and should not be taken as professional advice. Furthermore, any opinions are expressly those of the participants and not necessarily the views of the companies they are employeed. "
        {...getOverrideProps(
          overrides,
          "Any views expressed are solely based upon personal opinion and should not be taken as professional advice. Furthermore, any opinions are expressly those of the participants and not necessarily the views of the companies they are employeed."
        )}
      ></Text>
    </Flex>
  );
}
