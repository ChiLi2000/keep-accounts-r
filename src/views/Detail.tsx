import React, {useState} from "react";
import Layout from "components/Layout";
import moment from "moment";
import styled from "styled-components";
import {TimeSelector} from "components/TimeSelector";
import {CategorySection} from "./Account/CategorySection";

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
    margin:0;
    > li {
      width: 50%;
      padding: 6px 16px;
      margin: 0 14px;
      display: flex;
      flex-direction: column;
        &.selected{
          border-bottom:2px solid gray;
        }
        >span{
          padding: 16px 16px 10px 16px;
          font-size: 28px;
          font-weight: 600
       }
    }  
  }
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
      <MyCategorySection value='-'
                         onChange={() => {}}
                         slot='-'/>
      <div>record</div>
    </Layout>
  );
}

export default Detail;