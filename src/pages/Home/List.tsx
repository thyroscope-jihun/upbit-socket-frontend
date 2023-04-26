import { useGlobalStore } from "#global-store";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "src/components/Box";
import Flex from "src/components/Flex";
import Text from "src/components/Text";

// rgb(87,158,110);

const List = () => {
  const g = useGlobalStore();
  const presenter = g.presenters.markets;

  useEffect(() => {
    presenter.getMarkets();
  }, []);
  return (
    <Box pv={10} ph={5} bg="rgb(19,20,46)">
      {/* @ts-ignore */}
      <Input
        onChange={presenter.onChangeFilterString}
        value={presenter.filterString}
        placeholder="코인명을 검색하세요(한글)"
        style={{
          marginBottom: 20,
        }}
      />

      {presenter.filteredMarkets?.map((market, index) => {
        const isSelected = presenter.notificationMarketList.some(
          (vm) => vm.entity.market === market.market
        );
        return (
          <MarketItem
            isSelected={isSelected}
            key={market.market}
            onClick={() => {
              presenter.onSelectMarket(index);
            }}
          >
            <Text white s={18}>
              {market.market}
            </Text>
            <Flex flexDirection={"column"}>
              <Text white s={16}>
                {market.korean_name}
              </Text>
              <Text white s={16}>
                ({market.english_name})
              </Text>
            </Flex>
          </MarketItem>
        );
      })}
    </Box>
  );
};

const MarketItem = styled.div<{ isSelected: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1.5fr;
  border: 0.5px solid white;
  padding: 3px 10px;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "rgb(87,158,110)" : "transaparent"};
  &:hover {
    background-color: #027afa;
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
`;

export default observer(List);
