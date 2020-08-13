import React from "react";

// Libraries
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const paragraphStyle = css`
  background-color: #f0f3f8;
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  box-shadow: inset 6px 9px 16px -12px rgba(0, 0, 0, 0.75);
`;

const TaskDescriptionPar = ({ children }) => {
  return <p css={paragraphStyle}>{children}</p>;
};

export default TaskDescriptionPar;
