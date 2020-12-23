import styled from "styled-components";
import React from "react";

const Wrapper = styled.section`
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
const NumberPadSection =()=>{
  return(
    <Wrapper>
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
    </Wrapper>
  )
}

export {NumberPadSection}