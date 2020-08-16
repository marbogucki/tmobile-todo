// Libraries
import { jsx, css } from "@emotion/core";
/**@jsx jsx */

const alertStyle = (alertType) => {
  let backgroundColor = "";
  let color = "";

  switch (alertType) {
    case "danger":
      backgroundColor = "#f45356";
      color = "#f9d6d4";
      break;
    case "success":
      backgroundColor = "#44cb9a";
      color = "#ddf8f4";
      break;
    case "warning":
      backgroundColor = "#f9d687";
      color = "#62543a";
      break;
    default:
      backgroundColor = "#5fc1dd";
      color = "#ddf4f9";
  }
  return css`
    background-color: ${backgroundColor};
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 1.6rem 4rem;
    color: ${color};
    border-radius: 4px;
    position: relative;
    margin-bottom: 2rem;
    box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);
  `;
};

const closeBtnStyle = css`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translate(0, -50%);
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  margin: 0;
  border: none;
  cursor: pointer;
  display: block;
`;

export { alertStyle, closeBtnStyle };
