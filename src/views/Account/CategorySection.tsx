import React, {useState} from "react";
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

const CategorySection: React.FC = () => {
  const categoryMap={'-':'支出','+':'收入'}
  type Keys = keyof typeof categoryMap    //'-','+'
  const [categoryList] = useState<Keys[]>(['-','+'])
  const [category,setCategory]=useState('-')
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c=>
        <li key={c} className={category===c?'selected':''}
        onClick={()=>{setCategory(c)}}>
          {categoryMap[c]}
          </li>)}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};