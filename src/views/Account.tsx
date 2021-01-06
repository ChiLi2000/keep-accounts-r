import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./Account/CategorySection";
import {TimeSelector} from "components/TimeSelector";
import {NumberPadSection} from "./Account/NumberPadSection";
import {Topbar} from "./Account/Torbar";
import {TagsSection} from "./Account/TagsSection";
import {NotesSection} from "./Account/NotesSection";
import moment from "moment";
import {useRecords} from "../hooks/useRecords";

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Center = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
const CateAndTimeWrapper = styled.section`
  padding:12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export type Category = "-" | "+"
const defaultFormDate = {
  category: "-" as Category,
  tagId: 1,
  note: "",
  amount: 0,
  createdAt: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
};

function Account() {
  const [selected, setSelected] = useState(defaultFormDate);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const {addRecord} = useRecords();
  const submit = () => {
    addRecord(selected);
    setSelected(defaultFormDate);
  };
  const styleTime = {"width": "110px", "borderRadius": "25px", "padding": "8px"};

  return (
    <Outer>
      <Topbar/>
      <CateAndTimeWrapper>
        <MyCategorySection value={selected.category}
                           onChange={category => onChange({category})}/>
        <TimeSelector value={selected.createdAt}
                      onChange={createdAt => onChange({createdAt})}
                      style={styleTime}/>
      </CateAndTimeWrapper>
      <Center>
        <TagsSection value={selected.tagId}
                     onChange={tagId => onChange({tagId})}
                     type={selected.category}/>
      </Center>
      <NotesSection value={selected.note}
                    onChange={note => onChange({note})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}
      />
    </Outer>
  );
}

export default Account;