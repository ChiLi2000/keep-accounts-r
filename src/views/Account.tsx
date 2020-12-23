import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Icon from "../components/Icon";
import {DatePicker} from "antd";
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import "moment/locale/zh-cn";

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
`
const CategorySection = styled.section`
  width: 60%;
  > ul{
     margin:0 auto;
     display:flex;
    > li {
      margin-right: 18px;
      border-radius: 25px;
      text-align:center;
      padding: 6px 16px;
      background-color: #f2f2f2;
      &.selected{
        border:1px solid #e1c748;
        color:#e1c748;
      }
    }
  }
`
const CateAndTimeWrapper = styled.section`
  padding:12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function Account() {
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };
  const style={'width':'80px','borderRadius':'25px','padding':'8px 6px'}
  return <Layout>
    <Topbar>
      <Icon name="left"/>
      <span>记账</span>
      <Icon/>
    </Topbar>
    <CateAndTimeWrapper>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
        <ConfigProvider locale={zhCN}>
          <DatePicker onChange={onChange}
                      picker="month"
                      style={style}
          />
        </ConfigProvider>
    </CateAndTimeWrapper>
  </Layout>;
}

export default Account;