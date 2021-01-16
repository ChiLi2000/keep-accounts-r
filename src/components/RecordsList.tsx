import styled from "styled-components";
import {numberFilter} from "lib/numberFilter";
import Icon from "./Icon";
import React from "react";
import moment from "moment";
import {Category, RecordItem} from "hooks/useRecords";
import {useTags} from "hooks/useTags";
import {totalDate} from "lib/totalDate";
import {Link} from "react-router-dom";


const RecordItemWrapper = styled.div`
  background: white;
  >a{
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
type Props = {
  records: RecordItem[]
  formatArray: string
  mouthRecords: (array: HashArray) => HashArray
  newRecords: (records: RecordItem[]) => RecordItem[]
  total: boolean
  type?: Category
}
type HashType = {
  [key: string]: RecordItem[]
}
export type HashArray = [string, RecordItem[]][]
const RecordsItem: React.FC<Props> = (props) => {
  const {getValue, getName} = useTags();
  const {records, formatArray, total} = props;
  const hash: HashType = {};
  records.forEach(r => {
    const key = moment(r.createdAt).format(formatArray);
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
  const mouthRecords = (array: HashArray) => {
    return props.mouthRecords(array);
  };
  const newRecords = (records: RecordItem[]) => {
    return props.newRecords(records);
  };

  return (
    <>
      {mouthRecords(array).map(([date, records]) => <div key={date}>
        <Header>
          <span>{date}{props.type && (props.type === "-" ? <span>支出排行榜</span> : <span>收入排行榜</span>)}</span>
          <RightContent>{total &&
          <div>支出： {numberFilter(totalDate(records, "-"))} 收入： {numberFilter(totalDate(records, "+"))}</div>}  </RightContent>
        </Header>

        {newRecords(records).map(r => {
          return <RecordItemWrapper key={r.idR}>
            <Link to={"/record/" + r.idR}>
              <Icon name={getValue(r.tagId)}/>
              <p className="topItem">{getName(r.tagId)}<span>{r.category + numberFilter(r.amount)}</span></p>
              <p className="bottomItem">{r.note}
                <span>{total ? (r.createdAt).slice(11) : moment(r.createdAt).format("MM月DD日 LTS")}</span></p>
            </Link>
          </RecordItemWrapper>;
        })}
      </div>)}
      {mouthRecords(array).length === 0 ? <div className="cue">当前无记录哦</div> : ""}
    </>
  );
};
export {RecordsItem};