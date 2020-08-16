// Libraries
import { css, jsx } from "@emotion/core";

/** @jsx jsx */
const labelStyle = (value) => css`
  text-align: center;
  min-width: 83.5px;
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

export { labelStyle, inputStyle };
