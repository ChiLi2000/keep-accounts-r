import React, {useState} from "react";
import moment from "moment";
import {TimeSelector} from "components/TimeSelector";
import {TimeWrapper} from "components/TimeWrapper";
import {MyCategorySection} from "components/MyCategorySection";
import Layout from "components/Layout";
import Icon from "../components/Icon";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import {Category} from "./Account";

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
type HashType = {
  [key: string]: RecordItem[]
}

function Statistics() {
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: HashType = {};//  {'2020-05-11': [item, item], '2020-05-10': [item, item], '2020-05-12': [item, item, item, item]}
  records.forEach(r => {
    const key = moment(r.createdAt).format("YYYY年MM月");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash);
  const newRecords = (records: RecordItem[]) => {
    return records.filter(r => r.category === y).sort((a, b) => b.amount - a.amount);
  };
  const MouthRecord = () => {
    return array.filter(r => moment(x).format("YYYY年MM月") === r[0]);
  };
  const [x, setX] = useState(moment(new Date().toISOString()).format("YYYY-MM"));
  const styleTime = {"width": "110px", "borderRadius": "25px", "padding": "8px 16px"};
  const [y, setY] = useState<Category>("-");
  return (
    <Layout>
      <TimeWrapper>
        <TimeSelector value={x}
                      onChange={(monthValue) => setX(monthValue)}
                      type="month"
                      style={styleTime}/>
      </TimeWrapper>
      <MyCategorySection value={y}
                         onChange={(typeValue) => setY(typeValue)}/>
      {MouthRecord().map(([date, records]) => <div key={date}>
        <Header>
          {date}排行榜
          <RightContent/>
        </Header>
        {newRecords(records).map(r => {
          return <RecordItemWrapper key={r.idR}>
            <Icon name={getName(r.tagId)}/>
            <p className="topItem">{getName(r.tagId)}<span>{r.category === "-" ? (-r.amount) : (+r.amount)}</span></p>
            <p className="bottomItem">{r.note}<span>{moment(r.createdAt).format("MM月DD日 LTS")}</span></p>
          </RecordItemWrapper>;
        })}
      </div>)}
    </Layout>
  );
}

export default Statistics;