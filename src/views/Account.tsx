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
`;
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
`;
const CateAndTimeWrapper = styled.section`
  padding:12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TagsSection = styled.section`
  >ul{
   margin: 8px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  >li{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    padding: 6px 0;
    width: 25%;
    .icon{
      width: 32px;
      height: 32px;
      margin-bottom: 4px;
    }
  }
  }
  
`;

function Account() {
  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };
  const style = {"width": "80px", "borderRadius": "25px", "padding": "8px 6px"};
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
    <TagsSection>
      <ul>
        <li><Icon name="add"/>衣服</li>
        <li><Icon name="add"/>住宿</li>
        <li><Icon name="add"/>行驶</li>
        <li><Icon name="add"/>食物</li>
        <li><Icon name="add"/>衣服</li>
        <li><Icon name="add"/>住宿</li>
        <li><Icon name="add"/>衣服</li>
        <li><Icon name="add"/>住宿</li>
        <li><Icon name="add"/>衣服</li>
        <li><Icon name="add"/>住宿</li>
      </ul>
    </TagsSection>
  </Layout>;
}

export default Account;