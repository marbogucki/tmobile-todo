import React, { useEffect, useState } from "react";

// Custome hooks
import useAlerts from "./hooks/useAlerts";

// Components
import MainContainer from "./components/MainContainer/MainContainer";
import Dashbord from "./components/Dashboard/Dashboard";
import TasksListing from "./components/TasksListing/TasksListing";
import SectionHeader from "./components/atoms/headers/SectionHeader";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

// Layouts
import SingleTaskView from "./layout/SingleTaskView";

// Libraries
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Global } from "@emotion/core";
import { v4 as uuidv4 } from "uuid";

// Styles
import globalStyles from "./globalStyles";

function App() {
  const [tasksState, setTasksState] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [alerts, setAlerts] = useState([]);

  const populateTasksListing = async () => {
    try {
      setIsloading(true);
      const { data } = await axios.get("https://jarzebak.eu/dawid/tasks", {
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "dawid",
          password: "WAFmkpSI",
        },
      });
      setTasksState(data);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    populateTasksListing();
  }, []);

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
        <MainContainer alerts={alerts}>
          <Route
            path="/"
            exact
            render={() => (
              <Dashbord>
                <SectionHeader text={"Tasks in progress"} />
                <AddTaskForm
                  addAlert={addAlert}
                  tasksState={tasksState}
                  setTasksState={setTasksState}
                />
                <TasksListing tasksState={tasksState} />
              </Dashbord>
            )}
          />
          <Route path="/tasks/:id" component={SingleTaskView} />
        </MainContainer>
      </Router>
    </div>
  );
}

export default App;
