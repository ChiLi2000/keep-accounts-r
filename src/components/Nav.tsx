import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  font-size: 12px;
  padding: 4px 0;
  >ul{
    display: flex;
    margin-bottom: 0;
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
        &.selected{
        color: #e1c748;
        .icon{
        fill:#e1c748;
        }
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
          <NavLink to="/detail" activeClassName="selected">
            <Icon name="detail"/>明细</NavLink>
        </li>
        <li>
          <NavLink to="/account" activeClassName="selected">
            <Icon name="account"/>记账</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;