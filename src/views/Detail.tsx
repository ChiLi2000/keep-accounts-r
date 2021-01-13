import React, {useState} from "react";
import Layout from "components/Layout";
import moment from "moment";
import {Category, RecordItem, useRecords} from "hooks/useRecords";
import {HashArray, RecordsItem} from "components/RecordsList";
import {totalDate} from "lib/totalDate";

function Detail() {
  const [createTime, setCreateTime] = useState(moment(new Date().toISOString()).format("YYYY-MM"));
  const {records} = useRecords();
  const newRecords = (records: RecordItem[]) => {
    return records.sort((a, b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf());
  };
  const mouthRecords = (array: HashArray) => {
    return array.filter(r => createTime.slice(5) === r[0].slice(0, 2));
  };
  const mouthTotal = (type: Category) => {
    return totalDate(records.filter(r => (r.createdAt).indexOf(createTime) !== -1), type);
  };

  return (
    <Layout valueTime={createTime}
            onChangeTime={(monthValue) => setCreateTime(monthValue)}
            slot={(type) => mouthTotal(type)}>
      <RecordsItem records={records} formatArray="MM月DD日"
                   mouthRecords={(array) => mouthRecords(array)}
                   newRecords={(records) => newRecords(records)}
                   total={true}/>
    </Layout>
  );
}

export default Detail;