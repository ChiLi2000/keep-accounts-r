import React, {useState} from "react";
import styled from "styled-components";
import {Category} from "../Account";

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

type Props = {
  value: Category
  onChange: (value: Category) => void
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {"-": "支出", "+": "收入"};
  type Keys = keyof typeof categoryMap    //'-','+'
  const [categoryList] = useState<Keys[]>(["-", "+"]);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? "selected" : ""}
              onClick={() => {props.onChange(c);}}>
            {categoryMap[c]}
          </li>)}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};