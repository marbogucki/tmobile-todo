import React from "react";

// Libraries
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const badgeStyle = (isTaskDone) => css`
  background-color: ${isTaskDone ? "green" : "#db2828"};
  padding: 0.6rem 1.2rem;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
`;

const ToggleStatusBadge = ({ isTaskDone }) => {
  return <span css={badgeStyle(isTaskDone)}>in progress</span>;
};

export default ToggleStatusBadge;
