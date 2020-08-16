import React, { createContext, useState } from "react";

// Hooks
import useAxiosGetCall from "../hooks/useAxiosGetCall";

// Authorization
import { tasksAPIUrl } from "../auth/tasksAPISettings";

const TasksContext = createContext([]);

const TasksProvider = ({ children, setIsloading }) => {
  const [tasksState, setTasksState] = useState([]);

  const updateOneTaskState = (itemID, newItem) => {
    const findItemIndex = (array, itemID) =>
      array.findIndex((item) => item.id === itemID);

    const getUpdatedArray = (array, itemID, newItem) => {
      const arrayCopy = JSON.parse(JSON.stringify(array));
      arrayCopy.splice(findItemIndex(arrayCopy, itemID), 1, newItem);
      return arrayCopy;
    };

    setTasksState(getUpdatedArray(tasksState, itemID, newItem));
  };

  const removeTask = (taskID) => {
    console.log(taskID);
    setTasksState(
      [...tasksState].filter((task) => task.id !== parseInt(taskID))
    );
    console.log(tasksState);
  };

  useAxiosGetCall(
    tasksAPIUrl,
    setIsloading,
    (data) => {
      setTasksState(data);
    },
    []
  );

  return (
    <TasksContext.Provider
      value={{ tasksState, setTasksState, updateOneTaskState, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
