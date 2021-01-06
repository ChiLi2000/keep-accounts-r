import React, {useState} from "react";
import Layout from "components/Layout";
import moment from "moment";
import {TimeSelector} from "components/TimeSelector";
import {TimeWrapper} from "components/TimeWrapper";
import {MyCategorySection} from "components/MyCategorySection";
import styled from "styled-components";
import Icon from "components/Icon";

const RecordItemWrapper = styled.div`
  background: #ffff;
  display: grid;
  grid: auto auto / 38px 1fr;
  padding:8px 14px;
    >svg{
      width: 38px;
      height: 38px;
      grid-column: 1;
      grid-row: 1 / span 2; 
      margin-top: 6px;
    }
    >p{
      margin:0;
      padding: 4px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
`;
const Header = styled.h3`
  margin:0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  line-height: 24px;
  padding: 12px 14px;
`;
const RightContent = styled.span`
   font-size: 14px;
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
      <MyCategorySection slot='-'/>
      <Header>
        1月6日
        <RightContent> 支出：￥3.00 收入：￥0.00 </RightContent>
      </Header>
      <RecordItemWrapper>
        <Icon name="交通"/>
        <p className="topItem">餐饮<span>-1</span></p>
        <p className="bottomItem">备注<span>时间</span></p>
      </RecordItemWrapper>
      <RecordItemWrapper>
        <Icon name="交通"/>
        <p className="topItem">餐饮<span>-1</span></p>
        <p className="bottomItem">备注<span>时间</span></p>
      </RecordItemWrapper>
      <Header>
        1月6日
        <RightContent> 支出：￥3.00 收入：￥0.00 </RightContent>
      </Header>
      <RecordItemWrapper>
        <Icon name="交通"/>
        <p className="topItem">餐饮<span>-1</span></p>
        <p className="bottomItem">备注<span>时间</span></p>
      </RecordItemWrapper>
      <RecordItemWrapper>
        <Icon name="交通"/>
        <p className="topItem">餐饮<span>-1</span></p>
        <p className="bottomItem">备注<span>时间</span></p>
      </RecordItemWrapper>

    </Layout>
  );
}

export default Detail;