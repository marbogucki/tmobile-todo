import React from "react";
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const dashboardStyle = css`
  padding: 4rem 4rem;
  background-color: #ffffff;
  border-radius: 16px;
`;

const Dashboard = ({ children }) => {
  return <section css={dashboardStyle}>{children}</section>;
};

export default Dashboard;
