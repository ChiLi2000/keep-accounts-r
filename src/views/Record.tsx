import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";
import {Link, useParams} from "react-router-dom";
import {useRecords} from "hooks/useRecords";
import {useTags} from "hooks/useTags";
import moment from "moment";
import {numberFilter} from "lib/numberFilter";
import {Topbar} from "./Account/Torbar";

const Wrapper = styled.section``;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin:10px 14px;
  padding: 0 16px;
  background: #ffff;
  border-radius: 16px;
`;
const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 8px 0;
  .icon{
    width: 28px;
    height: 28px;
    margin-right:10px;
  }
`;
const ItemAmount = styled.div`
  text-align: center;
  padding:16px 0;
  font-size: 28px;
  font-weight: 600
`;
const ItemDetail = styled.div`
  padding:16px 12px 0 12px;
  display: flex;
  flex-direction: row;
  >div{
   padding: 8px 0;
  }
`;
const SelectButton = styled.div`
  border-top: 1px solid #dedede;
  >button{
    width: 50%;
    padding:18px 0;
    background: transparent;
    border:none;
    text-align: center;
    .icon{
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
`;

export type Params = {
  id: string
}

const Record: React.FC = () => {
  let {id: idString} = useParams<Params>();
  const {findRecord} = useRecords();
  const {getValue, getName} = useTags();
  const record = findRecord(parseInt(idString));

  return (
    <Wrapper>
      <Topbar centerContext={false}/>
      <Main>
        {record ? <div>
          <ItemIcon><Icon name={getValue(record.tagId)}/>{getName(record.tagId)}</ItemIcon>
          <ItemAmount>{record.category + numberFilter(record.amount)}</ItemAmount>
          <ItemDetail>
            <div className="left"><p>记录时间</p><p>备注</p></div>
            <div><p>{moment(record.createdAt).format("YYYY年MM月DD日 LTS")}</p><p>{record.note ? record.note : "无"}</p>
            </div>
          </ItemDetail>
          <SelectButton>
            <button><Icon name="delete"/>删除</button>
            <button><Link to={"/update/" + record.idR}><Icon name="edit"/>编辑</Link></button>
          </SelectButton>
        </div> : <div>record 不存在</div>
        }
      </Main>
    </Wrapper>
  );
};

export default Record;