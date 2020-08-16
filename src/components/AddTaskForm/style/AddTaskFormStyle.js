// Libs
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

// Styles
const formWrapper = css`
  @media screen and (max-width: 768px) {
    padding: 1.6rem 0;
  }
`;

const barFormStyle = (isFormToggled) => css`
  background-color: #fff;
  display: flex;
  margin-bottom: 4rem;
  & > .inputWrapper {
    margin-right: 1.6rem;
  }
  & > .input-slider-wrapper {
    margin-right: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    background-color: #fff;
    display: ${isFormToggled ? "block" : "none"};
    padding: 4rem;
    border-radius: 16px;
    box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);
    left: 16px;
    width: calc(100vw - 32px);
    & > .input-slider-wrapper {
      margin-bottom: 2rem;
    }
    & > .close-window-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;

export { formWrapper, barFormStyle };
