import React, {useState} from "react";
import Layout from "components/Layout";
import moment from "moment";
import Icon from "components/Icon";
import {RecordItem, useRecords} from "hooks/useRecords";
import {useTags} from "hooks/useTags";
import {Category} from "./Account";
import {Header, RecordItemWrapper, RightContent} from "components/RecordsList";
import {numberFilter} from "lib/numberFilter";

type HashType = {
  [key: string]: RecordItem[]
}

function Detail() {
  const [createTime, setCreateTime] = useState(moment(new Date().toISOString()).format("YYYY-MM"));
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: HashType = {};//  {'2020-05-11': [item, item], '2020-05-10': [item, item], '2020-05-12': [item, item, item, item]}
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
  const newRecords = (records: RecordItem[]) => {
    return records.sort((a, b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf());
  };

  const Total = (records: RecordItem[], type: Category) => {
    return records.filter(r => r.category === type)
      .reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
  };

  const MouthTotal = (type: Category) => {
    return Total(records.filter(r => (r.createdAt).indexOf(createTime) !== -1), type);
  };
  const MouthRecord = () => {
    return array.filter(r => createTime.slice(5) === r[0].slice(0, 2));
  };

  return (
    <Layout valueTime={createTime}
            onChangeTime={(monthValue) => setCreateTime(monthValue)}
            slot={(type) => MouthTotal(type)}>
      {MouthRecord().map(([date, records]) => <div key={date}>
        <Header>
          {date}
          <RightContent> 支出： {numberFilter(Total(records, "-"))} 收入： {numberFilter(Total(records, "+"))} </RightContent>
        </Header>
        {newRecords(records).map(r => {
          return <RecordItemWrapper key={r.idR}>
            <Icon name={getName(r.tagId)}/>
            <p className="topItem">{getName(r.tagId)}<span>{r.category + numberFilter(r.amount)}</span></p>
            <p className="bottomItem">{r.note}<span>{(r.createdAt).slice(11)}</span></p>
          </RecordItemWrapper>;
        })}
      </div>)}
      {MouthRecord().length === 0 ? <div className="cue">当月没有任何记录哦</div> : ""}
    </Layout>
  );
}

export default Detail;