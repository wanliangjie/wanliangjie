/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Cover(props) {
  const { overrides, ...rest } = props;
  const clickheretostartOnClick = useNavigateAction({
    type: "url",
    url: "/home",
  });
  return (
    <View
      width="1600px"
      height="960px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Cover")}
      {...rest}
    >
      <Image
        width="1600px"
        height="960px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        {...getOverrideProps(
          overrides,
          "pexels-vitA\u0303\u00B3ria-santos-3050943 1"
        )}
      ></Image>
      <Flex
        gap="76.72151947021484px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="272px"
        left="241px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Quicksand"
          fontSize="92.59493255615234px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="115.74366760253906px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1117.75px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome to UPC library!"
          {...getOverrideProps(overrides, "Welcome to UPC library!")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Quicksand"
        fontSize="63.49366760253906px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="79.36708068847656px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="560px"
        left="531px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Click here to sart!"
        onClick={() => {
          clickheretostartOnClick();
        }}
        {...getOverrideProps(overrides, "Click here to start")}
      ></Text>
    </View>
  );
}
