import styled from "styled-components";

const LabelWrapper = styled.div`
  >input{
  background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  > p{
    text-align: right;
    font-size: 12px;
    color: #999;
    padding:11px 0 0 0;
   
  }
`;

export {LabelWrapper}