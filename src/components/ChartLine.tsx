import React, {useEffect} from "react";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import {RecordItem} from "hooks/useRecords";
import moment from "moment";
import {numberFilter} from "lib/numberFilter";

const echarts = require("echarts");
type Props = {
  axis: number
  value:  RecordItem[]
}
const ChartLine: React.FC<Props> = (props) => {
  const axis=props.axis
  const value = props.value;
  const options = {
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
      data: [] as any,
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
      data: [] as any
    }]
  };
  useEffect(() => {
    changeData()
    const chart = echarts.init(document.getElementById("chartLine") as HTMLElement);
    chart.setOption(options);
  }, [ options]);
  const changeData = () => {
    for (let i = 0; i < value.length - 1; i++) {
      for (let j = i + 1; j < value.length; j++) {
        if ((value[i].createdAt).slice(0,10) === (value[j].createdAt).slice(0,10)) {
          value[i].amount += value[j].amount;
          value.splice(j, 1);
        }
      }
    }
    for (let i = 1; i <= axis; i++) {
      let t = 0;
      for (let j = 0; j < value.length; j++) {
        if(i===moment(value[j].createdAt).date()){
          t++;
          options.xAxis.data.push(i+'日')
          options.series[0].data.push(numberFilter(value[j].amount))
          break
        }
      }
      if (t === 0) {
        options.xAxis.data.push(i + "日");
        options.series[0].data.push(0);
      }
    }

  };

  return (
    <div id="chartLine" style={{width: "100%", height: "30vh", background: "#fbfbfb"}}/>
  );
};

export default ChartLine;