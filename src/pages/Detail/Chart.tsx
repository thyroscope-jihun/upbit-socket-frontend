import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartProps, Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";
import { observer } from "mobx-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  annotationPlugin
);

interface MinuteCandleProps {
  data: {
    label: string;
    openingPrice: number;
    highPrice: number;
    lowPrice: number;
  }[];
}

const MinuteCandle = ({ data }: MinuteCandleProps) => {
  console.log("data", data);

  const chartCore: ChartProps = {
    type: "line",
    options: {
      plugins: {
        datalabels: {
          align: "end",
        },

        // annotation: {
        //   annotations: {
        //     box1: {
        //       type: "box",
        //       xMin: 0,
        //       xMax: 100,
        //       yMin: 0.3,
        //       yMax: 5,
        //       backgroundColor: "#75BBB712",
        //       drawTime: "beforeDraw",
        //       borderWidth: 0,
        //     },
        //     box2: {
        //       type: "box",
        //       xMin: 0,
        //       xMax: 100,
        //       yMin: 0.7,
        //       yMax: 1.8,
        //       backgroundColor: "#F69F6412",
        //       drawTime: "beforeDraw",
        //       borderWidth: 0,
        //     },
        //   },
        // },
      },
      scales: {
        yLine: {
          display: true,
        },
        xLine: {
          display: true,
          border: {
            dash: [5, 5],
          },
        },
      },
    },
    data: {
      labels: data.map((r) => r.label),
      datasets: [
        {
          yAxisID: "yLine",
          xAxisID: "xLine",
          label: "저가",
          data: data.map((r) => r.lowPrice),
          borderColor: "#75BBB7",
          pointBackgroundColor: "#FFFFFF",
          pointBorderWidth: 2,
          datalabels: {
            color: data
              .map((r) => r.lowPrice)
              .map((item) => {
                if (item < 0.3) {
                  return "#027afa";
                } else if (item > 5) {
                  return "#FF6060";
                } else {
                  return "#1B1D1F";
                }
              }),
          },
        },
        {
          yAxisID: "yLine",
          xAxisID: "xLine",
          label: "시가",
          data: data.map((r) => r.openingPrice),
          borderColor: "#F69F64",
          pointBackgroundColor: "#FFFFFF",
          pointBorderWidth: 2,
          //   datalabels: {
          //     color: [0.3, 1.4, 2.5, 1.0, 2.1, 2.0].map((item) => {
          //       if (item < 0.7) {
          //         return theme.colors.primary;
          //       } else if (item > 1.8) {
          //         return theme.colors.red_FF6060;
          //       } else {
          //         return theme.colors.black_1B1D1F;
          //       }
          //     }),
          //   },
        },
        {
          yAxisID: "yLine",
          xAxisID: "xLine",
          label: "고가",
          data: data.map((r) => r.highPrice),
          borderColor: "red",
          pointBackgroundColor: "#FFFFFF",
          pointBorderWidth: 2,
          //   datalabels: {
          //     color: [0.3, 1.4, 2.5, 1.0, 2.1, 2.0].map((item) => {
          //       if (item < 0.7) {
          //         return theme.colors.primary;
          //       } else if (item > 1.8) {
          //         return theme.colors.red_FF6060;
          //       } else {
          //         return theme.colors.black_1B1D1F;
          //       }
          //     }),
          //   },
        },
      ],
    },
  };
  //@ts-ignore
  return <Line data={chartCore.data} options={chartCore.options}></Line>;
};

export default observer(MinuteCandle);
