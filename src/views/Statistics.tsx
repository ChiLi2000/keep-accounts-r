import React, {useState} from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "./Account/CategorySection";
import moment from "moment";
import {TimeSelector} from "components/TimeSelector";

const TimeWrapper = styled.div`
  max-width: 100%;
  text-align: center;
  padding: 10px 14px;
`;
const MyCategorySection = styled(CategorySection)`
  > ul{
    display: flex;
    justify-content: space-between;
    text-align: center;
    > li {
      width: 50%;
      padding: 6px 16px;
      margin: 0 14px; 
        &.selected{
          border-bottom:2px solid gray;
        }
    }  
  }
`;

function Statistics() {
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
      <MyCategorySection value='-'
                         onChange={() => {}}/>
      <div>record</div>
    </Layout>
  );
}

export default Statistics;