import React, { PropsWithChildren } from "react";
import { Text as CText, TextProps as ChakraTextProps } from "@chakra-ui/react";

interface Textprops extends ChakraTextProps, PropsWithChildren {
  s?: number;
  c?: string;
  w?: number;
  white?: boolean;
}

const Text = (props: Textprops) => {
  return (
    <CText
      fontSize={props.s || 20}
      fontWeight={props.w || 500}
      color={props.white ? "white" : props.c ? props.c : "black"}
      {...props}
    >
      {props.children}
    </CText>
  );
};

export default Text;
