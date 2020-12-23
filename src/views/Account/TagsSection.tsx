import Icon from "components/Icon";
import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
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
const TagsSection=()=>{
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export {TagsSection}