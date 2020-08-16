import React, { useState } from "react";

// Custome hooks
import useAxiosGetCall from "../hooks/useAxiosGetCall";

// Context
import TasksContext from "../context/TasksContext";
import { AlertsProvider } from "../context/AlertsContext";

// Components
import MainContainer from "../components/MainContainer/MainContainer";
import LoadingCircle from "../components/atoms/loadings/LoadingCircle";

// Pages
import SingleTaskView from "../pages/SingleTaskView";
import LandingPageView from "../pages/LandingPageView";

// Libraries
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Global } from "@emotion/core";

// Styles
import globalStyles from "./globalStyles";

// Authorization
import { tasksAPIUrl } from "../auth/tasksAPISettings";

function App() {
  const [tasksState, setTasksState] = useState([]);
  const [isLoading, setIsloading] = useState(false);

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
    <div className="App">
      <Global styles={globalStyles} />
      <Router>
        <TasksContext.Provider
          value={{ tasksState, setTasksState, updateOneTaskState, removeTask }}
        >
          <AlertsProvider>
            <MainContainer>
              <Route
                path="/"
                exact
                component={isLoading ? LoadingCircle : LandingPageView}
              />

              <Route path="/tasks/:id" exact component={SingleTaskView} />
            </MainContainer>
          </AlertsProvider>
        </TasksContext.Provider>
      </Router>
    </div>
  );
}

export default App;
