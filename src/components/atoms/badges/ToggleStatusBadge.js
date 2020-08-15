import React, { useState, useContext } from "react";

// Libraries
import { css, jsx } from "@emotion/core";
import axios from "axios";

// Context
import AlertsContext from "../../../context/AlertsContext";
import TasksContext from "../../../context/TasksContext";

// Utils
import axiosHTTPCall from "../../../utils/httpAxiosCalls/axiosHTTPCall";

// Authorization
import { tasksAPIUrl, httpHeader } from "../../../auth/tasksAPISettings";

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

  const { updateOneTaskState } = useContext(TasksContext);
  const singleTaskApiUrl = `${tasksAPIUrl}/${id}`;

  const editTaskCall = async (payload) => {
    setIsloading(true);
    try {
      const { data } = await axios.post(tasksAPIUrl, payload, httpHeader);
      console.log("task response: ", data);
      setIsloading(false);
      updateOneTaskState(id, data);
      // setTasksState([...tasksState, data]);
    } catch (error) {
      // setIsloading(false);
      // addAlert(
      //   "danger",
      //   "Ups. Unable to add task. Check data and try again",
      //   3000
      // );
      console.log(error);
    }
  };
  const onClickHandler = () => {
    const newTaskData = {
      ...task,
      done: !done,
    };
    editTaskCall(newTaskData);
    // console.log(newTaskData);
    // axiosHTTPCall(
    //   "patch",
    //   singleTaskApiUrl,
    //   newTaskData,
    //   setIsloading,
    //   (data) => {
    //     console.log(data);
    //   }
    // );
  };

  return (
    <span onClick={onClickHandler} css={badgeStyle(done)}>
      {done ? "done" : "in progress"}
    </span>
  );
};

export default ToggleStatusBadge;
