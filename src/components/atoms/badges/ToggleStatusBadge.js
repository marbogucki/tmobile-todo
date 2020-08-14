import React from "react";

// Libraries
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const badgeStyle = (isTaskDone) => css`
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
    background-color: ${isTaskDone ? "green" : "#db2828"};
    opacity: 1;
  }
`;

const ToggleStatusBadge = ({
  isTaskDone,
  taskUpdateHandler,
  id,
  title,
  description,
}) => {
  const onClickHandler = () => {
    const newTaskData = {
      id: 9,
      title,
      description,
      done: !isTaskDone,
    };
    taskUpdateHandler(id, newTaskData);
  };

  return (
    <span onClick={onClickHandler} css={badgeStyle(isTaskDone)}>
      {isTaskDone ? "done" : "in progress"}
    </span>
  );
};

export default ToggleStatusBadge;
