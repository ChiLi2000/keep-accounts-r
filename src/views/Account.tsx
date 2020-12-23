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
const NotesSection = styled.section`
   font-size: 14px;
   padding: 8px 0;
   background: #f5f5f5;
   >label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
   >input {
      flex-grow: 1;
      height: 40px;
      background: transparent;
      border: none;
    }
    >span{
      font-size: 12px;
      color: #999999;
    }
   }
    
`;
const NumberPadSection = styled.section`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  >.output{
      box-shadow: inset 0 -3px 3px -3px rgba(0,0,0,.25), inset 0 3px 3px -3px rgba(0,0,0,.25);
      font-size: 36px;
      font-family: Consolas, monaspace, serif;
      padding: 8px 14px;
      text-align: right;
  }
  >.pad{
      margin: 8px 14px;
      >button{
      width: 25%;
      height: 56px;
      float: left;
      background: transparent;
      border: none;
      border-radius: 4px;
      &.ok {
        height: 112px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e8e8e8;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #dedede;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #d3d3d3;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #c9c9c9;
      }
      &:nth-child(14) {
        background: #bfbfbf;
      }
      &:nth-child(12) {
        background: #b5b5b5;
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
    <NotesSection>
      <label>
        <input type="text" placeholder="请输入备注"/>
        <span>2/10</span>
      </label>
    </NotesSection>
    <NumberPadSection>
      <div className="output">100</div>
      <div className="pad clearfix">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberPadSection>
  </Layout>;
}

export default Account;