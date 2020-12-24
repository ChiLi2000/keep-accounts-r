import React, {useState} from "react";
import {DatePicker} from "antd";
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import "moment/locale/zh-cn";
import moment from "moment";

type Props = {
  value: string
  onChange: (value: string) => void
}
const TimeSelector: React.FC<Props> = (props) => {
  const value = props.value;
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
    props.onChange(moment(date._d).format("YYYY-MM-DD HH:mm:ss"));
  };
  const style = {"width": "110px", "borderRadius": "25px", "padding": "8px"};
  return (
    <ConfigProvider locale={zhCN}>
      <DatePicker onChange={onChange}
                  value={moment(value)}
                  style={style}
                  allowClear={false}
      />
    </ConfigProvider>
  );
};

export {TimeSelector};