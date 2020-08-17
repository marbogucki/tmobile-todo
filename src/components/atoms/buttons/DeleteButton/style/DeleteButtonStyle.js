import { jsx, css } from "@emotion/core";

/** @jsx jsx */
const buttonStyle = css`
  border-radius: 2px;
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 0.8rem;
  display: inline-block;
`;

const modalStyle = css`
  padding: 2rem 4rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & .modal-button:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

const deleteBtnStyle = (isToggled) => css`
${buttonStyle}
background-color: ${isToggled ? "#5f5f5f" : "#db2828"} ;
cursor: ${isToggled ? "not-allowed" : "pointer"}  ;
`;

const confirmStyle = () => css`
  ${buttonStyle}
  background-color:#3dba7c;
`;

const declineStyle = css`
  ${buttonStyle}
  background-color: #db2828;
`;

export { buttonStyle, modalStyle, deleteBtnStyle, confirmStyle, declineStyle };
