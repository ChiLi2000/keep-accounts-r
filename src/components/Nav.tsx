import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  font-size: 12px;
  >ul{
    display: flex;
    >li{
      width: 33.333333%;
      text-align: center;
      >a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px 0;
        
       } 
     }
  }  
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/detail">
            明细</NavLink>
        </li>
        <li><NavLink to="/account">
          记账</NavLink>
        </li>
        <li><NavLink to="/statistics">
          统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;