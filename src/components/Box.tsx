import React from "react";
import { Box as CBox, BoxProps as ChakraBoxProps } from "@chakra-ui/react";

interface BoxProps extends ChakraBoxProps {
  p?: number;
  m?: number;
  ph?: number;
  pv?: number;
  pr?: number;
  pl?: number;
  pt?: number;
  pb?: number;
  mh?: number;
  mv?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}

const Box = (props: BoxProps) => {
  return (
    <CBox
      padding={props.p || 0}
      margin={props.m || 0}
      paddingLeft={props.pl || props.ph || 0}
      paddingRight={props.pr || props.ph || 0}
      paddingTop={props.pt || props.pv || 0}
      paddingBottom={props.pb || props.pv || 0}
      marginLeft={props.ml || props.mh || 0}
      marginRight={props.mr || props.mh || 0}
      marginTop={props.mt || props.mv || 0}
      marginBottom={props.mb || props.mv || 0}
      {...props}
    />
  );
};

export default Box;
