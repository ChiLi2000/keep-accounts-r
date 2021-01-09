import React, {useState} from "react";
import moment from "moment";
import {TimeWrapper} from "components/TimeWrapper";
import {MyCategorySection} from "components/MyCategorySection";
import Layout from "components/Layout";
import Icon from "components/Icon";
import {RecordItem, useRecords} from "hooks/useRecords";
import {useTags} from "hooks/useTags";
import {Category} from "./Account";
import {Header, RecordItemWrapper, RightContent} from "components/RecordsList";
import ChartLine from "components/ChartLine";

type HashType = {
  [key: string]: RecordItem[]
}

function Statistics() {
  const [createTime, setCreateTime] = useState(moment(new Date().toISOString()).format("YYYY-MM"));
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: HashType = {};//  {'2020-05': [item, item], '2020-06': [item, item]}
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
    return array.filter(r => moment(createTime).format("YYYY年MM月") === r[0]);
  };

  const [y, setY] = useState<Category>("-");

  return (
    <Layout>
      <TimeWrapper value={createTime}
                   onChange={(monthValue) => setCreateTime(monthValue)}/>
      <MyCategorySection value={y}
                         onChange={(typeValue) => setY(typeValue)}/>
      {((MouthRecord().length !== 0) && (newRecords(((MouthRecord()[0])[1]))).length !== 0)
        ? <ChartLine axis={moment(createTime).daysInMonth()} value={newRecords((MouthRecord()[0])[1])}/>
        : <div className="cue">当月没有任何记录哦</div>}
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