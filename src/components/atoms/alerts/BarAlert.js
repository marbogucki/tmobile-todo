import React from "react";

// Libraries
import { jsx, css } from "@emotion/core";

// Styles
import { alertStyle, closeBtnStyle } from "./style/BarAlertStyles";

/**@jsx jsx */

const BarAlert = ({ alertText, alertType, removeAlert, id }) => {
  const closeBtnClickHandler = (event) => {
    removeAlert(id);
  };
  return (
    <div css={alertStyle(alertType)} data-testid="bar-alert">
      {alertText}
      <span onClick={closeBtnClickHandler} css={closeBtnStyle}>
        X
      </span>
    </div>
  );
};

export default BarAlert;
