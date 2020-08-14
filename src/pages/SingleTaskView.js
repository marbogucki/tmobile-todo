import React, { useState } from "react";

// Custome Hooks
import useAxiosGetCall from "../hooks/useAxiosGetCall";

// Components
import Dashboard from "../components/Dashboard/Dashboard";
import SectionHeader from "../components/atoms/headers/SectionHeader";
import ToggleStatusBadge from "../components/atoms/badges/ToggleStatusBadge";
import TaskDescriptionPar from "../components/atoms/paragraphs/TaskDescriptionPar";
import DeleteButton from "../components/atoms/buttons/DeleteButton";
import EditTaskFormButton from "../components/EditTaskFormButton/EditTaskFormButton";

// Authorization
import { tasksAPIUrl } from "../auth/tasksAPISettings";

const SingleTaskView = ({ match, taskUpdateHandler }) => {
  const [taskData, setTaskData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const {
    params: { id },
  } = match;

  const singleTaskAPIUrl = `${tasksAPIUrl}/${id}`;

  useAxiosGetCall(singleTaskAPIUrl, setIsloading, (data) => {
    setTaskData(data);
  });

  const { title, description, done } = taskData;

  return (
    <Dashboard>
      <ToggleStatusBadge task={taskData} />
      <SectionHeader text={`#${id} ${title}`} />
      <TaskDescriptionPar>{description}</TaskDescriptionPar>
      <DeleteButton
        btnText="Delete task"
        modalText={`Are you sure you want to delete task #${id}`}
        id={id}
      />
      <EditTaskFormButton taskData={taskData} />
    </Dashboard>
  );
};

export default SingleTaskView;
