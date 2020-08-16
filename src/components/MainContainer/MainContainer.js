import React, { Fragment, useContext } from "react";

// Libraries
import { css, jsx } from "@emotion/core";

// Components
import Header from "../Header/Header";
import BarAlert from "../atoms/alerts/BarAlert";

// Context
import { AlertsContext } from "../../context/AlertsContext";

/** @jsx jsx */
const mainContainerStyle = css`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

const MainContainer = ({ children }) => {
  const { alerts, removeAlert } = useContext(AlertsContext);
  return (
    <Fragment>
      <Header />
      {alerts.map(({ id, type, text }) => (
        <BarAlert
          key={id}
          alertType={type}
          alertText={text}
          removeAlert={removeAlert}
          id={id}
        />
      ))}
      <main css={mainContainerStyle}>{children}</main>
    </Fragment>
  );
};

export default MainContainer;
