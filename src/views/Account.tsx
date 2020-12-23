import React from "react";
import styled from "styled-components";
import {CategorySection} from "./Account/CategorySection";
import {TimeSelector} from "./Account/TimeSelector";
import {NumberPadSection} from "./Account/NumberPadSection";
import {Topbar} from "./Account/Torbar";
import {TagsSection} from "./Account/TagsSection";
import {NotesSection} from "./Account/NotesSection";

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const Center = styled.div`
  flex-grow: 1;
  overflow: auto;
`
const CateAndTimeWrapper = styled.section`
  padding:12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Account() {
  return (
    <Outer>
        <Topbar/>
        <CateAndTimeWrapper>
          <CategorySection/>
          <TimeSelector/>
        </CateAndTimeWrapper>
      <Center>
        <TagsSection/>
      </Center>
        <NotesSection/>
        <NumberPadSection/>
    </Outer>
  );
}

export default Account;