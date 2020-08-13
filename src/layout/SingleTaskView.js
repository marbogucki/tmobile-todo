import React, { useState, useEffect } from "react";

// Libraries
import axios from "axios";

// Components
import Dashboard from "../components/Dashboard/Dashboard";
import SectionHeader from "../components/atoms/headers/SectionHeader";
import ToggleStatusBadge from "../components/atoms/badges/ToggleStatusBadge";
import TaskDescriptionPar from "../components/atoms/paragraphs/TaskDescriptionPar";
import DeleteButton from "../components/atoms/buttons/DeleteButton";
// import EditTaskButton from "../components/atoms/buttons/EditTaskButton";
import EditTaskFormButton from "../components/EditTaskFormButton/EditTaskFormButton";

const SingleTaskView = ({ match }) => {
  const [taskData, setTaskData] = useState({});
  const {
    params: { id },
  } = match;

  const populateTaskData = async () => {
    try {
      //   setIsloading(true);
      const taskURL = `https://jarzebak.eu/dawid/tasks/${id}`;
      const { data } = await axios.get(taskURL, {
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "dawid",
          password: "WAFmkpSI",
        },
      });
      setTaskData(data);
      //   setIsloading(false);
    } catch (error) {
      //   setIsloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    populateTaskData();
  }, []);

  const { title, description, done } = taskData;

  console.log(taskData);
  return (
    <Dashboard>
      <ToggleStatusBadge isTaskDone={done} />
      <SectionHeader text={`#${id} ${title}`} />
      <TaskDescriptionPar>{description}</TaskDescriptionPar>
      <DeleteButton
        btnText="Delete task"
        modalText={`Are you sure you want to delete task #${id}`}
        id={id}
      />
      <EditTaskFormButton />
    </Dashboard>
  );
};

export default SingleTaskView;
