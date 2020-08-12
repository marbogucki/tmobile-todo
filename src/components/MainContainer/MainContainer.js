import React, { Fragment, useState } from "react";

// Libraries
import { css, jsx } from "@emotion/core";

// Components
import Header from "../Header/Header";
import BarAlert from "../atoms/alerts/BarAlert";

/** @jsx jsx */
const mainContainerStyle = css`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

const MainContainer = ({ children, alerts, removeAlert }) => {
  return (
    <Fragment>
      <Header />
      {alerts.map((alert) => (
        <BarAlert
          key={alert.id}
          alertType={alert.type}
          alertText={alert.text}
          removeAlert={removeAlert}
          id={alert.id}
        />
      ))}
      <main css={mainContainerStyle}>{children}</main>
    </Fragment>
  );
};

export default MainContainer;
