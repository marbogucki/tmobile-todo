import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const formWrapper = css`
  /* position: relative; */
  display: inline-block;
  @media screen and (max-width: 768px) {
    padding: 1.6rem 0;
  }
`;

const barFormStyle = (isFormToggled) => css`
  position: absolute;
  left: 50%;
  top: 16rem;
  transform: translate(-50%, -50%);
  max-width: 1170px;
  background-color: #fff;
  display: flex;
  margin-bottom: 4rem;
  background-color: #fff;
  display: ${isFormToggled ? "block" : "none"};
  padding: 4rem;
  border-radius: 16px;
  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);

  width: calc(100vw - 32px);
  @media screen and (max-width: 768px) {
    top: 16rem;
    left: 0;
  }
  & > .inputWrapper {
    margin-right: 1.6rem;
  }
  & > .input-slider-wrapper {
    margin-right: 1.6rem;
  }

  & > .input-slider-wrapper {
    margin-bottom: 2rem;
  }
  & > .close-window-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

const editButtonStyle = css`
  background-color: #3fbe90;
  border: none;
  padding: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  display: inline-block;
`;

export { formWrapper, barFormStyle, editButtonStyle };
