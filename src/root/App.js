import React, { useState, useContext } from "react";

// Custome hooks
import useAlerts from "../hooks/useAlerts";
import useAxiosGetCall from "../hooks/useAxiosGetCall";

// Context
import TasksContext from "../context/TasksContext";
import AlertsContext from "../context/AlertsContext";

// Components
import MainContainer from "../components/MainContainer/MainContainer";

// Pages
import SingleTaskView from "../pages/SingleTaskView";
import LandingPageView from "../pages/LandingPageView";

// Libraries
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Global } from "@emotion/core";
import { v4 as uuidv4 } from "uuid";

// Styles
import globalStyles from "./globalStyles";

// Authorization
import { tasksAPIUrl } from "../auth/tasksAPISettings";

function App() {
  const [tasksState, setTasksState] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [alerts, setAlerts] = useState([]);

  useAxiosGetCall(tasksAPIUrl, setIsloading, (data) => {
    setTasksState(data);
  });

  const removeAlert = (id) => {
    setAlerts([...alerts].filter((alert) => alert.id !== id));
  };

  useAlerts(alerts, removeAlert);

  const addAlert = (alertType, alertText) => {
    const id = uuidv4();
    const updatedAlerts = [
      ...alerts,
      {
        text: alertText,
        type: alertType,
        id: id,
      },
    ];
    setAlerts(updatedAlerts);
  };

  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Router>
        <AlertsContext.Provider value={{ alerts, addAlert, removeAlert }}>
          <MainContainer>
            <TasksContext.Provider
              value={{ tasksState: tasksState, setTasksState }}
            >
              <Route path="/" exact component={LandingPageView} />
            </TasksContext.Provider>
            <Route path="/tasks/:id" exact component={SingleTaskView} />
          </MainContainer>
        </AlertsContext.Provider>
      </Router>
    </div>
  );
}

export default App;
