import React, { useState } from "react";

// Libraries
import { css, jsx } from "@emotion/core";

// Utils
import axiosHTTPCall from "../../../utils/httpAxiosCalls/axiosHTTPCall";

// Authorization
import { tasksAPIUrl } from "../../../auth/tasksAPISettings";

/** @jsx jsx */

const badgeStyle = (done) => css`
  background-color: grey;
  padding: 0.6rem 1.2rem;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  display: inline-block;
  opacity: 0.4;
  transition: 0.3s ease-in all;
  white-space: nowrap;
  &:hover {
    background-color: ${done ? "green" : "#db2828"};
    opacity: 1;
  }
`;

const ToggleStatusBadge = ({ task }) => {
  const [isLoading, setIsloading] = useState(false);
  const { id, done } = task;
  const onClickHandler = () => {
    const newTaskData = {
      ...task,
      done: !done,
    };

    axiosHTTPCall("put", tasksAPIUrl, newTaskData, setIsloading);
  };

  return (
    <span onClick={onClickHandler} css={badgeStyle(done)}>
      {done ? "done" : "in progress"}
    </span>
  );
};

export default ToggleStatusBadge;
