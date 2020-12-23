import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "./Account/CategorySection";
import {TimeSelector} from "./Account/TimeSelector";
import {NumberPadSection} from "./Account/NumberPadSection";
import {Topbar} from "./Account/Torbar";
import {TagsSection} from "./Account/TagsSection";
import {NotesSection} from "./Account/NotesSection";


const CateAndTimeWrapper = styled.section`
  padding:12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Account() {
  return (
    <Layout>
      <Topbar/>
      <CateAndTimeWrapper>
        <CategorySection/>
        <TimeSelector/>
      </CateAndTimeWrapper>
      <TagsSection/>
      <NotesSection/>
      <NumberPadSection/>
    </Layout>
  );
}

export default Account;