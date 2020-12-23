import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Icon from "../components/Icon";

const Topbar = styled.section`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 12px 14px;
  background:white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  .icon{
    width: 28px;
    height: 28px;
  }
`;

function Account() {
  return <Layout>
    <Topbar>
      <Icon name="left"/>
      <span>记账</span>
      <Icon/>
    </Topbar>
  </Layout>;
}

export default Account;