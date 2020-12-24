import React, {useRef, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.section`
   font-size: 14px;
   padding: 8px 0;
   background: #f5f5f5;
   >label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
   >input {
      flex-grow: 1;
      height: 40px;
      background: transparent;
      border: none;
    }
    >span{
      font-size: 12px;
      color: #999999;
    }
  }   
`;

type Props = {
  value: string
  onChange: (value: string) => void
}

const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <input type="text" placeholder="请输入备注"
               ref={refInput} defaultValue={note} onBlur={onBlur}/>
        <span>2 / 10</span>
      </label>
    </Wrapper>
  );
};

export {NotesSection};