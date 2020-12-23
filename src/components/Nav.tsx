import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <div>
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
    </div>
  );
}

export default Nav;