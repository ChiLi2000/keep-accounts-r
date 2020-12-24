import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./Account/CategorySection";
import {TimeSelector} from "./Account/TimeSelector";
import {NumberPadSection} from "./Account/NumberPadSection";
import {Topbar} from "./Account/Torbar";
import {TagsSection} from "./Account/TagsSection";
import {NotesSection} from "./Account/NotesSection";
import moment from "moment";

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

export type Category = "-" | "+"

function Account() {
  const [selected, setSelected] = useState({
    category: "-" as Category,
    tagId: 1,
    note: "",
    amount: 0,
    createdAt: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
  });
  return (
    <Outer>
      {selected.category}
      <hr/>
      {selected.createdAt}
      <hr/>
      {selected.tagId}
      <hr/>
      {selected.note}
      <hr/>
      {selected.amount}
      <Topbar/>
      <CateAndTimeWrapper>
        <CategorySection value={selected.category}
                         onChange={category => {setSelected({...selected, category: category});}}/>
        <TimeSelector value={selected.createdAt}
                      onChange={createdAt => {setSelected({...selected, createdAt: createdAt});}}/>
      </CateAndTimeWrapper>
      <Center>
        <TagsSection value={selected.tagId}
                     onChange={tagId => {setSelected({...selected, tagId: tagId});}}/>
      </Center>
      <NotesSection value={selected.note}
                    onChange={note => {setSelected({...selected, note: note});}}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => {setSelected({...selected, amount: amount});}}/>
    </Outer>
  );
}

export default Account;