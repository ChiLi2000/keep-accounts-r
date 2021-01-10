import React, {useState} from "react";
import moment from "moment";
import Layout from "components/Layout";
import {RecordItem, useRecords} from "hooks/useRecords";
import {Category} from "./Account";
import {HashArray, RecordsItem} from "components/RecordsList";
import ChartLine from "components/ChartLine";
import styled from "styled-components";

const CenterOuter = styled.div`
  display: flex;
  flex-direction: column;
`;
const CenterTop = styled.div`
  flex: 1;
  width: 100vm;
  overflow: auto;
`;

function Statistics() {
  const [createTime, setCreateTime] = useState(moment(new Date().toISOString()).format("YYYY-MM"));
  const {records} = useRecords();
  const newRecords = (records: RecordItem[]) => {
    return records.filter(r => r.category === type).sort((a, b) => b.amount - a.amount);
  };
  const mouthRecords = (array: HashArray) => {
    return array.filter(r => moment(createTime).format("YYYY年MM月") === r[0]);
  };
  const mouthRecordsChar = () => {
    return newRecords(records.filter(r => moment(createTime).format("YYYY年MM月") === moment(r.createdAt).format("YYYY年MM月")));
  };
  const [type, setType] = useState<Category>("-");

  return (
    <Layout valueTime={createTime}
            onChangeTime={(monthValue) => setCreateTime(monthValue)}
            value={type}
            onChange={(typeValue) => setType(typeValue)}>
      {(mouthRecordsChar().length !== 0) ?
        <CenterOuter>
          <CenterTop>
            <ChartLine axis={moment(createTime).daysInMonth()} value={mouthRecordsChar()}/>
          </CenterTop>
          <RecordsItem records={records} formatArray="YYYY年MM月"
                       mouthRecords={(array) => mouthRecords(array)}
                       newRecords={(records) => newRecords(records)}
                       total={false}
                       type={type}/>
        </CenterOuter>
        : <div className="cue">当前无记录哦</div>}
    </Layout>
  );
}

export default Statistics;