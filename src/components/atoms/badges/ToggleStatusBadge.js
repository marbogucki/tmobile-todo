import React, { useState, useContext } from "react";

// Components
import LoadingCircle from "../loadings/LoadingCircle";

// Libraries
import { css, jsx } from "@emotion/core";

// Context
import AlertsContext from "../../../context/AlertsContext";
import TasksContext from "../../../context/TasksContext";

// Utils
import editTaskCall from "../../../utils/httpAxiosCalls/editTaskCall";

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
  const { updateOneTaskState } = useContext(TasksContext);
  const { addAlert } = useContext(AlertsContext);
  const { id, done } = task;

  const singleTaskApiUrl = `${tasksAPIUrl}/${id}`;

  const onClickHandler = () => {
    const newTaskData = {
      done: !done,
    };
    editTaskCall(
      singleTaskApiUrl,
      newTaskData,
      setIsloading,
      addAlert,
      (updatedTaskData) => {
        updateOneTaskState(updatedTaskData.id, updatedTaskData);
      }
    );
  };

  return isLoading ? (
    <LoadingCircle />
  ) : (
    <span onClick={onClickHandler} css={badgeStyle(done)}>
      {done ? "done" : "in progress"}
    </span>
  );
};
export default ToggleStatusBadge;
