import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

const CategorySection = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </Wrapper>
  );
};
export {CategorySection};