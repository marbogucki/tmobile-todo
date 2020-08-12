import React from "react";
import { css, jsx } from "@emotion/core";

/** @jsx jsx */
const buttonStyle = css`
  background-color: #9da7b4;
  border: none;
  padding: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  display: block;
  width: 100%;
`;

const FormButton = ({ btnText, autoFocus }) => {
  return (
    <button autoFocus={autoFocus} css={buttonStyle}>
      {btnText}
    </button>
  );
};

export default FormButton;
