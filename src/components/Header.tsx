import { Box } from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Flex from "./Flex";
import Text from "./Text";

const Header = () => {
  return (
    <Flex
      zIndex={9}
      boxSizing="border-box"
      position={"fixed"}
      w={"100vw"}
      paddingX={38}
      paddingY={10}
      a
      justifyContent={"space-between"}
      h={70}
      bc="rgb(38,45,70)"
    >
      <Flex j a g={15}>
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Text s={25} c={"white"} w={700}>
          Upbit Auto Trading System(v1.0)
        </Text>
      </Flex>

      <Flex a g={15}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Text white>로그아웃</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
