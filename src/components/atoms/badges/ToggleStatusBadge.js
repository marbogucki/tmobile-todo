import React, { useState, useContext } from "react";

// Components
import LoadingCircle from "../loadings/LoadingCircle";

// Libraries
import { css, jsx } from "@emotion/core";

// Context
import { AlertsContext } from "../../../context/AlertsContext";
import { TasksContext } from "../../../context/TasksContext";

// Utils
import editTaskCall from "../../../utils/httpAxiosCalls/editTaskCall";

// Authorization
import { tasksAPIUrl } from "../../../auth/tasksAPISettings";

// Styles
import { badgeStyle } from "./style/ToggleStatusBadgeStyle";

/** @jsx jsx */

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
    <span
      data-testid="toggle-status-badge"
      onClick={onClickHandler}
      css={badgeStyle(done)}
    >
      {done ? "done" : "in progress"}
    </span>
  );
};
export default ToggleStatusBadge;
