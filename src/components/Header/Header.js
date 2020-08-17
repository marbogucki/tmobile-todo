import React, { useState } from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";

// Styles
import {
  headerStyle,
  linkStyle,
  toggleBtnStyle,
  navbarStyle,
} from "./style/HeaderStyle";

/**@jsx jsx */

const Header = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  const onToggleHandler = () => {
    setIsNavToggled(!isNavToggled);
  };

  return (
    <header css={headerStyle}>
      <nav css={() => navbarStyle(isNavToggled)}>
        <button onClick={onToggleHandler} css={toggleBtnStyle}>
          <img alt="Menu" src="/navbar/icons8-menu.svg" />
        </button>
        <ul>
          <li>
            <Link css={linkStyle} to={"/"}>
              home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
