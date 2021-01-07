import React, {useState} from "react";
import Layout from "components/Layout";
import moment from "moment";
import {TimeSelector} from "components/TimeSelector";
import {TimeWrapper} from "components/TimeWrapper";
import {MyCategorySection} from "components/MyCategorySection";
import styled from "styled-components";
import Icon from "components/Icon";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";

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
      margin-top: 2px;
    }
    >p{
      margin:0;
      padding: 2px 10px;
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
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [key: string]: RecordItem[] } = {};//  {'2020-05-11': [item, item], '2020-05-10': [item, item], '2020-05-12': [item, item, item, item]}
  records.forEach(r => {
    const key = moment(r.createdAt).format("MM月DD日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
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
      {array.map(([date, records]) => <div key={date}>
        <Header>
          {date}
          <RightContent> 支出：￥3.00 收入：￥0.00 </RightContent>
        </Header>
        {records.map(r => {
          return <RecordItemWrapper key={r.idR}>
            <Icon name={getName(r.tagId)}/>
            <p className="topItem">{getName(r.tagId)}<span>{r.category === "-" ? (-r.amount) : (+r.amount)}</span></p>
            <p className="bottomItem">{r.note}<span>{(r.createdAt).slice(11)}</span></p>
          </RecordItemWrapper>;
        })}
      </div>)}

    </Layout>
  );
}

export default Detail;