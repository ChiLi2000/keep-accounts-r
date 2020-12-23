import styled from "styled-components";
import Icon from "components/Icon";
import React from "react";
import {useHistory} from "react-router-dom";
const Wrapper = styled.section`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 12px 14px;
  background:white;
  border-bottom: 1px solid grey;
  .icon{
    width: 28px;
    height: 28px;
  }
`;

const Topbar: React.FC = ()=>{
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <Icon name="left" onClick={onClickBack}/>
      <span>记账</span>
      <Icon/>
    </Wrapper>
  )
}

export {Topbar}