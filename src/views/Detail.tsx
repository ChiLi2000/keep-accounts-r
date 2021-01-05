import React, {useState} from "react";
import Layout from "components/Layout";
import moment from "moment";
import styled from "styled-components";
import {TimeSelector} from "components/TimeSelector";

const TimeWrapper = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 10px 14px;
`;

function Detail() {
  const [x, setX] = useState(moment(new Date().toISOString()).format("YYYY-MM"));
  const styleTime = {"width": "110px", "borderRadius": "25px", "padding": "8px 16px"};
  return (
    <Layout>
      <TimeWrapper>
        <TimeSelector value={x}
                      onChange={(monthValue) => setX(monthValue)}
                      type="month"
                      style={styleTime}/>
      </TimeWrapper>
      <div>type</div>
      <div>record</div>
    </Layout>
  );
}

export default Detail;