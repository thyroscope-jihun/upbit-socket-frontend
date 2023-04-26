import { useGlobalStore } from "#global-store";
import { observer } from "mobx-react";
import React from "react";
import Flex from "src/components/Flex";
import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Text from "src/components/Text";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const data2 = [
  { x: "A", y1: 20, y2: 30 },
  { x: "B", y1: 30, y2: 40 },
  { x: "C", y1: 40, y2: 50 },
  { x: "D", y1: 50, y2: 60 },
  { x: "E", y1: 60, y2: 70 },
];

const data = [
  { x: 1, y: 20 },
  { x: 2, y: 30 },
  { x: 3, y: 40 },
  { x: 4, y: 50 },
  { x: 5, y: 60 },
];

const Detail = () => {
  const g = useGlobalStore();
  const presenter = g.presenters.markets;

  return (
    <Container>
      {presenter.selectedMarketVM ? (
        <Flex flexDirection={"column"} width={"100%"}>
          <Flex align={"center"} gap={5}>
            <Text s={25} white>
              {presenter.selectedMarketVM.entity.english_name}(
              {presenter.selectedMarketVM.entity.market})
            </Text>
            {/* @ts-ignore */}
            <Stat>
              <StatNumber>
                <Text white>
                  {presenter.selectedMarketVM.detail?.trade_price}
                </Text>
              </StatNumber>
              <StatHelpText>
                <Flex align={"center"} gap={1}>
                  <StatArrow type={presenter.selectedMarketVM.statType} />
                  <Text s={12} white>
                    {Math.abs(
                      Number(
                        (
                          (presenter.selectedMarketVM.detail
                            ?.signed_change_rate as number) * 100
                        ).toFixed(3)
                      ) || 0
                    )}
                    %
                  </Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </Flex>
          <LegendContainer>
            <Flex alignItems={"center"} gap={3}>
              <Circle circleColor="rgb(87,158,110)" />
              <Text s={15} white>
                Envelop +5%
              </Text>
            </Flex>
            <Flex alignItems={"center"} gap={2}>
              <Circle circleColor="#027afa" />
              <Text s={15} white>
                현재가
              </Text>
            </Flex>
            <Flex alignItems={"center"} gap={3}>
              <Circle circleColor="orange" />
              <Text s={15} white>
                Envelop -5%
              </Text>
            </Flex>
            <Flex alignItems={"center"} gap={3}>
              <Circle circleColor="red" />
              <Text s={15} white>
                Envelop -20%
              </Text>
            </Flex>
          </LegendContainer>
          <Flex flexDir={"column"} width={"45%"}>
            <PriceGridItem>
              <Text white>엔벨롭 (+5%)</Text>
              <Text white>{presenter.selectedMarketVM.getEnvelop(5)}</Text>
            </PriceGridItem>
            <PriceGridItem>
              <Text white>현재가</Text>
              <Text color={presenter.selectedMarketVM.textColor}>
                {presenter.selectedMarketVM.detail?.trade_price}
              </Text>
            </PriceGridItem>
            <PriceGridItem>
              <Text white>엔벨롭 (-5%)</Text>
              <Text white>{presenter.selectedMarketVM.getEnvelop(-5)}</Text>
            </PriceGridItem>
            <PriceGridItem>
              <Text white>엔벨롭 (-20%)</Text>
              <Text white>{presenter.selectedMarketVM.getEnvelop(-20)}</Text>
            </PriceGridItem>
          </Flex>
          {/* <button onClick={() => presenter.selectedMarketVM?.sendSlack(-5)}>
            슬랙 보내기
          </button>
          <ScatterChart
            width={800}
            height={250}
            margin={{
              top: 40,
              right: 20,
              bottom: 10,
              left: 40,
            }}
          >
            <Scatter
              name="Envelop +5%"
              data={presenter.selectedMarketVM.dataForChart.envPlus5}
              fill="#8884d8"
            />
            <Scatter
              name="Current"
              data={presenter.selectedMarketVM.dataForChart.current}
              fill="#8884d8"
            />
            <Scatter
              name="Envelop -5%"
              data={presenter.selectedMarketVM.dataForChart.envMin5}
              fill="#8884d8"
            />
            <Scatter
              name="Envelop -20%"
              data={presenter.selectedMarketVM.dataForChart.envMin25}
              fill="#8884d8"
            />
            <Legend />
            <CartesianGrid />
            <YAxis dataKey="y" type="number" name="price" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          </ScatterChart>
          <ScatterChart width={400} height={400}>
            <CartesianGrid />
            <XAxis dataKey="x" type="number" name="x-axis" />
            <YAxis dataKey="y" type="number" name="y-axis" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="A scatter" data={data} fill="#8884d8" />
          </ScatterChart>
          <BarChart width={400} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="y1" fill="#8884d8" stackId="a" />
            <Bar dataKey="y2" fill="#82ca9d" stackId="a" />
          </BarChart> */}
        </Flex>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

const PriceGridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Circle = styled.div<{ circleColor: string }>`
  background-color: ${(props) => props.circleColor};
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  background-color: rgb(29, 33, 55);
  height: calc(100vh - 184px);
  padding: 20px 40px;
  overflow-y: scroll;
`;

const LegendContainer = styled.div`
  display: flex;
  margin: 10px;
  gap: 10px;
  justify-content: flex-end;
`;

const DetailContainer = styled.div`
  border-radius: 12px;
  background-color: rgb(39, 44, 71);
  padding: 20px 40px;
`;

export default observer(Detail);
