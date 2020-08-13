import React from "react";

// Libraries
import { css, jsx } from "@emotion/core";

/** @jsx jsx */
const labelStyle = (value) => css`
  background-color: ${value ? "green" : "#db2828"};
  padding: 0.6rem 1.2rem;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  display: inline-block;
  /* opacity: 0.6; */
  -webkit-transition: 0.3s ease-in all;
  transition: 0.3s ease-in all;
  white-space: nowrap;
`;
const inputStyle = css`
  display: none;
`;

const Checkbox = ({ id, name, value, onChange }) => {
  return (
    <div className="input-slider-wrapper">
      <input
        onChange={onChange}
        css={inputStyle}
        id={id}
        type="checkbox"
        name={name}
        value={value}
        placeholder=" "
      />
      <label css={labelStyle(value)} htmlFor={id}>
        {value ? "done" : "in progress"}
      </label>
    </div>
  );
};

export default Checkbox;
