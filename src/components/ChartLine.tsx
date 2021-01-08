import React, {useEffect} from "react";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";

const echarts = require("echarts");

function ChartLine() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("chartLine") as HTMLElement);
    chart.setOption(
      {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis",
          position: "top",
          triggerOn: "click",
          formatter: "{c}"
        },
        legend: {
          data: [""]
        },

        grid: {
          left: 0,
          right: "1%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日"],
          axisTick: {alignWidthLabel: true},
          axisLine: {lineStyle: {color: "#666"}},
        },
        yAxis: {
          type: "value",
          splitNumber: 2,
          scale: true,
          show: false,
          splitLine: {
            show: false
          }
        },
        series: [{
          symbol: "circle",
          lineStyle: {
            color: "#e1c748"
          },
          itemStyle: {
            borderWidth: 5,
            color: "#e1c748",
          },
          name: "",
          type: "line",
          data: [5, 20, 36, 10, 10, 20, 5, 20, 5, 20, 36, 10, 10, 20, 5, 20]
        }]
      }
    );
  }, []);

  return (
    <div id="chartLine" style={{width: "100%", height: "30vh", background: "#fbfbfb"}}/>
  );
}

export default ChartLine;