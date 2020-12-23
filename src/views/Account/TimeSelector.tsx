import React from "react";
import {DatePicker} from "antd";
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import "moment/locale/zh-cn";

const TimeSelector = () => {
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };
  const style = {"width": "80px", "borderRadius": "25px", "padding": "8px 6px"};
  return (
    <ConfigProvider locale={zhCN}>
      <DatePicker onChange={onChange}
                  picker="month"
                  style={style}
      />
    </ConfigProvider>
  );
};

export {TimeSelector};