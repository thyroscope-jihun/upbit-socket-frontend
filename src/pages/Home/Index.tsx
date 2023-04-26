import { useGlobalStore } from "#global-store";
import { HStack, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "src/components/Box";
import Flex from "src/components/Flex";
import Detail from "./Detail";
import List from "./List";
import Text from "src/components/Text";

const Home = () => {
  const g = useGlobalStore();
  const presenter = g.presenters.markets;
  const navigate = useNavigate();

  useEffect(() => {
    presenter.getMarkets();
  });
  return (
    <GridBox>
      <ListContainer>
        <List />
      </ListContainer>
      <Flex flexDirection={"column"} bg={"rgb(29, 33, 55)"}>
        <Flex
          flexDirection={"column"}
          paddingX={7}
          paddingY={3}
          border={"1px solid white"}
        >
          <Text white>
            현재 알림이 등록된 코인 리스트(클릭하면 제거됩니다.)
          </Text>
          {/* @ts-ignore */}
          <HStack spacing={4} marginTop={3} marginBottom={3}>
            {presenter.notificationMarketList.map((vm, idx) => (
              <Tag
                onClick={() => presenter.removeNotificationMarket(idx)}
                size={"md"}
                key={vm.entity.market}
                borderRadius="full"
                variant="solid"
                colorScheme="green"
              >
                <TagLabel>{vm.entity.english_name}</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
          </HStack>
        </Flex>
        <Detail />
      </Flex>
    </GridBox>
  );
};

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  width: 100%;
`;

const ListContainer = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  width: 100%;
`;

export default observer(Home);
