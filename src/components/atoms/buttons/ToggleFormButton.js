import React from "react";
import { css, jsx } from "@emotion/core";

/**@jsx jsx */

const formToggleStyle = css`
  background-color: #3fbe90;
  border: none;
  padding: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ToggleFormButton = ({ buttonText, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} css={formToggleStyle}>
      {buttonText}
    </button>
  );
};

export default ToggleFormButton;
