import React, { useState } from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";

/**@jsx jsx */

const headerStyle = css`
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const linkStyle = css`
  font-weight: 700;
  color: #7e84cc;
  text-decoration: none;
  padding: 2rem;
  padding-bottom: 1.5rem;
  display: block;
  border-bottom: 5px solid #fff;
  transition: all ease-in 0.3s;
  &:hover {
    border-bottom-color: #b0b3df;
  }
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

const toggleBtnStyle = css`
  position: absolute;
  top: 2rem;
  right: 4rem;
  height: 5rem;
  width: 5rem;
  font-size: 0;
  color: rgba(0, 0, 0, 0);
  display: none;
  border-radius: 16px;
  border: 1px solid #000;
  background-color: #fff;
  &:after {
    position: absolute;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  const onToggleHandler = () => {
    setIsNavToggled(!isNavToggled);
  };

  const navbarStyle = css`
    background-color: #fff;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 16px;
    padding: 0 2rem;
    @media screen and (max-width: 768px) {
      padding-top: 8rem;
      /* background-color: rgba(0,0,0,0); */
      background-color: ${isNavToggled ? "#ffffff" : "rgba(0,0,0,0);"};
    }
    & > ul {
      list-style: none;
      display: flex;
      /* & > li:last-of-type {
        margin-left: auto;
      } */
      @media screen and (max-width: 768px) {
        display: ${isNavToggled ? "flex" : "none"};
        flex-direction: column;
        padding: 2rem;
        justify-content: right;
        & > li {
          display: inline-block;
          text-align: right;
        }
      }
    }
    & .logout-button {
      margin-top: 1.3rem;
    }
  `;

  return (
    <header css={headerStyle}>
      <nav css={navbarStyle}>
        <button onClick={onToggleHandler} css={toggleBtnStyle}>
          <img src="/navbar/icons8-menu.svg" />
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
