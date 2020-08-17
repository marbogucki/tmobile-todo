import React from "react";
import { css, jsx } from "@emotion/core";

//Styles
import { buttonStyle } from "./style/CloseWindowButton";

/** @jsx jsx */

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
