import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
require('icons/detail.svg')
require('icons/account.svg')
require('icons/statistics.svg')
const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  font-size: 12px;
  padding: 4px 0;
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
        .icon{
          width:32px;
          height: 32px;
        }
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
            <svg className="icon">
              <use xlinkHref="#detail"/>
            </svg>
            明细</NavLink>
        </li>
        <li>
          <NavLink to="/account">
            <svg className="icon">
              <use xlinkHref="#account"/>
            </svg>
          记账</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">
            <svg className="icon">
              <use xlinkHref="#statistics"/>
            </svg>统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;