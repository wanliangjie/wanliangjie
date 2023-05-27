/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Comments } from "../models";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function ContactUs(props) {
  const { book, com, comments, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [
    textFieldTwoNineSevenSixSixNineThreeEightValue,
    setTextFieldTwoNineSevenSixSixNineThreeEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineThreeSixValue,
    setTextFieldTwoNineSevenSixSixNineThreeSixValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      bookID: textFieldTwoNineSevenSixSixNineThreeEightValue,
      bookid: textFieldTwoNineSevenSixSixNineThreeEightValue,
      author: authAttributes["given_name"],
      test: textFieldTwoNineSevenSixSixNineThreeSixValue,
    },
    model: Comments,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="624px"
      height="310px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ContactUs")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 24")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
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
          children="编辑你的评论"
          {...getOverrideProps(
            overrides,
            "\u7F16\u8F91\u4F60\u7684\u8BC4\u8BBA"
          )}
        ></Text>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        label="评论"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldTwoNineSevenSixSixNineThreeSixValue}
        onChange={(event) => {
          setTextFieldTwoNineSevenSixSixNineThreeSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField29766936")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="书号"
        shrink="0"
        alignSelf="stretch"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldTwoNineSevenSixSixNineThreeEightValue}
        onChange={(event) => {
          setTextFieldTwoNineSevenSixSixNineThreeEightValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField29766938")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="发布"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
