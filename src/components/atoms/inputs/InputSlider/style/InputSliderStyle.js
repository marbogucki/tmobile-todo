import { css, jsx } from "@emotion/core";
/** @jsx jsx */

const inputWrapperStyle = css`
  width: 100%;
  position: relative;
  display: block;
`;

const inputStyle = css`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #92a2ae;
  outline: none;
  display: block;
  &:focus {
    border-bottom: 1px solid #5a95e6;
  }
`;

const labelStyle = css`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  font-size: 1.6rem;
  color: #92a2ae;
  transform: translate(-10%, -170%) scale(0.8);
  input:placeholder-shown + & {
    transform: translate(0, -50%);
  }
  input:-webkit-autofill + & {
    transform: translate(-10%, -170%) scale(0.8);
  }
  transition: all ease-in 0.3s;
  pointer-events: none;
`;

export { inputWrapperStyle, inputStyle, labelStyle };
