import styled from "styled-components";
import {TimeSelector} from "./TimeSelector";
import React from "react";

const Wrapper = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 10px 14px;
  background: #ffff;
`;
type Props = {
  valueTime: string
  onChangeTime: (value: string) => void
}

const TimeWrapper: React.FC<Props> = (props) => {
  const valueTime = props.valueTime;
  const onChangeTime = props.onChangeTime;
  const styleTime = {"width": "110px", "borderRadius": "25px", "padding": "8px 16px"};
  return (
    <Wrapper>
      <TimeSelector valueTime={valueTime}
                    onChangeTime={onChangeTime}
                    type="month"
                    style={styleTime}/>
    </Wrapper>
  );
};

export {TimeWrapper};