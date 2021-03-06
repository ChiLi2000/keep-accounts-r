import styled from "styled-components";
import Nav from "./Nav";
import {TimeWrapper} from "./TimeWrapper";
import React, {useEffect, useRef} from "react";
import {MyCategorySection} from "./MyCategorySection";
import {Category} from "hooks/useRecords";

export const Wrapper = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
type Props = {
  valueTime: string
  onChangeTime: (value: string) => void
  slot?: (type: Category) => number
  value?: Category
  onChange?: (value: Category) => void
}
const Layout: React.FC<Props> = (props) => {
  const {children, valueTime, onChangeTime, slot, value, onChange} = props;
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(
    ()=>{
      if(mainRef.current!==null){
        mainRef.current.style.height = document.body.clientHeight+"px"
      }
    },[])
  return (
    <Wrapper ref={mainRef}>
      <TimeWrapper valueTime={valueTime} onChangeTime={onChangeTime}/>
      <MyCategorySection slot={slot} value={value} onChange={onChange}/>
      <Main>
        {children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;