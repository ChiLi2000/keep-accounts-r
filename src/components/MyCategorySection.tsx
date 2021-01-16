import styled from "styled-components";
import {CategorySection} from "views/Account/CategorySection";

const MyCategorySection = styled(CategorySection)`
  background: white;
  > ul{
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin:0;
    > li {
      width: 50%;
      padding: 6px 0;
      margin: 0 14px;
      display: flex;
      flex-direction: column;
        &.selected{
          border-bottom:2px solid gray;
        }
        >span{
          padding: 16px 0 0 ;
          font-size: 28px;
          font-weight: 600
       }
    }  
  }
`;

export {MyCategorySection};