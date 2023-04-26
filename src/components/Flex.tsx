import React from "react";
import { Flex as CFlex, FlexProps as ChakraFlexProps } from "@chakra-ui/react";

interface FlexProps extends ChakraFlexProps {
  c?: boolean;
  j?: boolean;
  a?: boolean;
  g?: number;
  w?: number | string;
  h?: number | string;
  bc?: string;
  bor?: boolean;
}

const Flex = (props: FlexProps) => {
  return (
    <CFlex
      width={props.w ? props.w : undefined}
      height={props.h ? props.h : undefined}
      justifyContent={props.c ? "center" : undefined}
      flexDirection={props.c ? "column" : undefined}
      alignItems={props.a ? "center" : undefined}
      gap={props.g ? props.g : undefined}
      backgroundColor={props.bc ? props.bc : undefined}
      border={props.bor ? "1px solid" : undefined}
      {...props}
    />
  );
};

export default Flex;
