import React from "react";
import {DatePicker} from "antd";
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

type Props = {
  valueTime: string
  type?: "month"
  onChangeTime: (value: string) => void
  style: any
}

const TimeSelector: React.FC<Props> = (props) => {
  const type = props.type;
  const valueTime = props.valueTime;
  const style = props.style;
  const onChange = (date: any, dateString: string) => {
    if (props.type !== undefined) {
      props.onChangeTime(dateString);
    } else {
      props.onChangeTime(moment(date._d).format("YYYY-MM-DD HH:mm:ss"));
    }
  };
  return (
    <ConfigProvider locale={zhCN}>
      <DatePicker onChange={onChange}
                  value={moment(valueTime)}
                  allowClear={false}
                  picker={type}
                  style={style}
                  inputReadOnly={true}
      />
    </ConfigProvider>
  );
};
export {TimeSelector};