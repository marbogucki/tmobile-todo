import React from "react";
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const buttonStyle = css`
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: #fff;
  & > img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CloseWindowButton = ({ onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className="close-window-btn"
      css={buttonStyle}
    >
      <img src="/close-x.png" alt="close" />
    </button>
  );
};

export default CloseWindowButton;
