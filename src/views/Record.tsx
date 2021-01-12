import React from "react";
import styled from "styled-components";
import Icon from "../components/Icon";

const Wrapper = styled.section`
`;
const Topbar = styled.div`
  padding: 10px 14px;
  .icon{
    width: 28px;
    height: 28px;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 14px;
  padding: 0 16px;
  background: #ffff;
  border-radius: 16px;
`;
const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 8px 0;
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

function Record() {
  return (
    <Wrapper>
      <Topbar><Icon name="left"/></Topbar>
      <Main>
        <ItemIcon><Icon name="其它"/>其它</ItemIcon>
        <ItemAmount>-10.00</ItemAmount>
        <ItemDetail>
          <div className="left">
            <p>记录时间</p>
            <p>备注</p>
          </div>
          <div>
            <p>2021年1月8日</p>
            <p>呜呜呜</p>
          </div>
        </ItemDetail>
        <SelectButton>
          <button><Icon name="delete"/>删除</button>
          <button><Icon name="edit"/>编辑</button>
        </SelectButton>
      </Main></Wrapper>
  );
}

export default Record;