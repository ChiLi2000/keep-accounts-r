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
  .icon{
    width: 28px;
    height: 28px;
  }
`;

type Props={
  centerContext:boolean
}
const Topbar: React.FC<Props> = (props) => {
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <Icon name="left" onClick={onClickBack}/>
      <span>{props.centerContext?'记账':''}</span>
      <Icon/>
    </Wrapper>
  )
}

export {Topbar}