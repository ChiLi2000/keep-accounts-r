import styled from "styled-components";
import React, {useState} from "react";
import {Category, useRecords} from "hooks/useRecords";
import {TimeSelector} from "./TimeSelector";
import {CategorySection} from "views/Account/CategorySection";
import {NotesSection} from "views/Account/NotesSection";
import {NumberPadSection} from "views/Account/NumberPadSection";
import {Topbar} from "views/Account/Torbar";
import {TagsSection} from "views/Account/TagsSection";
import {Main, Wrapper} from "./Layout";
import {useHistory} from "react-router-dom";
import {message} from "antd";

const Outer = styled(Wrapper)`
  background:#ffff;
`;
const CateAndTimeWrapper = styled.section`
  border-top: 1px solid #d3d3d3;
  padding:12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffff;
`;
const MyCategorySection = styled(CategorySection)`
  width: 60%;
  > ul{
     margin:0 auto;
     display:flex;
    > li {
      margin-right: 32px;
      border-radius: 25px;
      text-align:center;
      padding: 4px 16px;
      background-color: #f2f2f2;
      &.selected{
        border:1px solid #e1c748;
        color:#e1c748;
      }
    }
  }
`;

type Props = {
  idR?: number
  record: any
  autoSelectedTag: boolean
}
const RecordEdit: React.FC<Props> = (props) => {
  const {idR, record, autoSelectedTag} = props;
  const [newRecord, setNewRecord] = useState(record);
  const onChange = (obj: Partial<typeof newRecord>) => {
    setNewRecord({...newRecord, ...obj});
  };
  const {addRecord, updateRecord,defaultRecord} = useRecords();
  const history = useHistory();
  const submit = () => {
    if (newRecord.amount === 0) {
      alert("请输入具体金额");
    } else {
      if (idR !== undefined) {
        updateRecord(idR, newRecord);
        history.goBack();
        message.success({content:'修改成功',style:{marginTop:'46vh'}})
      } else {
        addRecord(newRecord);
        setTimeout(() => {
          history.push("/detail");
        }, 0);
        message.success({content:'已记一笔',style:{marginTop:'40vh'}})
      }
    }
  };
  const styleTime = {"width": "110px", "borderRadius": "25px", "padding": "8px"};
  const TagIdByRecord = (id:number)=>{
    defaultRecord(id)
  }
  return (
    <Outer>
      <Topbar centerContext={true}/>
      <CateAndTimeWrapper>
        <MyCategorySection value={newRecord.category}
                           onChange={(category: Category) => onChange({category})}/>
        <TimeSelector valueTime={newRecord.createdAt}
                      onChangeTime={createdAt => onChange({createdAt})}
                      style={styleTime}/>
      </CateAndTimeWrapper>
      <Main>
        <TagsSection value={newRecord.tagId}
                     onChange={(tagId: number) => onChange({tagId})}
                     type={newRecord.category}
                     autoSelectedTag={autoSelectedTag}
                     TagIdByRecord={id=>TagIdByRecord(id)}/>
      </Main>
      <NotesSection value={newRecord.note}
                    onChange={(note: string) => onChange({note})}/>
      <NumberPadSection value={newRecord.amount}
                        onChange={(amount: number) => onChange({amount})}
                        onOk={submit}
      />
    </Outer>
  );
};


export default RecordEdit;