import React, { useState, useContext } from "react";

// Custome Hooks
import useAxiosGetCall from "../hooks/useAxiosGetCall";

// Context
import TasksContext from "../context/TasksContext";

// Components
import Dashboard from "../components/Dashboard/Dashboard";
import SectionHeader from "../components/atoms/headers/SectionHeader";
import ToggleStatusBadge from "../components/atoms/badges/ToggleStatusBadge";
import TaskDescriptionPar from "../components/atoms/paragraphs/TaskDescriptionPar";
import DeleteButton from "../components/atoms/buttons/DeleteButton";
import EditTaskFormButton from "../components/EditTaskFormButton/EditTaskFormButton";

// Libraries
import { Redirect } from "react-router-dom";

// Authorization
import { tasksAPIUrl } from "../auth/tasksAPISettings";

const SingleTaskView = ({ match }) => {
  const [taskData, setTaskData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const { removeTask } = useContext(TasksContext);
  const { tasksState } = useContext(TasksContext);
  const [shouldBeRedirected, setShouldBeRedirected] = useState(false);
  const {
    params: { id },
  } = match;

  const singleTaskAPIUrl = `${tasksAPIUrl}/${id}`;

  useAxiosGetCall(
    singleTaskAPIUrl,
    setIsloading,
    (data) => {
      setTaskData(data);
    },
    [tasksState]
  );

  const { title, description } = taskData;

  const redirectBackToRoot = () => {
    setShouldBeRedirected(true);
    removeTask(id);
  };

  return shouldBeRedirected ? (
    <Redirect to="/" />
  ) : (
    <Dashboard>
      <ToggleStatusBadge task={taskData} />
      <SectionHeader text={`#${id} ${title}`} />
      <TaskDescriptionPar>{description}</TaskDescriptionPar>
      <DeleteButton
        btnText="Delete task"
        modalText={`Are you sure you want to delete task #${id}`}
        id={id}
        onTaskDeletionHandler={redirectBackToRoot}
      />
      <EditTaskFormButton taskData={taskData} />
    </Dashboard>
  );
};
export default SingleTaskView;
