import React, { useEffect, useState } from "react";

// Custome hooks
import useAlerts from "../hooks/useAlerts";

// Components
import MainContainer from "../components/MainContainer/MainContainer";

// Pages
import SingleTaskView from "../pages/SingleTaskView";
import LandingPageView from "../pages/LandingPageView";

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

  const taskUpdateHandler = async (id, newTaskData) => {
    try {
      //   setIsloading(true);
      const taskURL = `https://jarzebak.eu/dawid/tasks/${id}`;
      const { data } = await axios.put(taskURL, newTaskData, {
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "dawid",
          password: "WAFmkpSI",
        },
      });
      // setTaskData(data);
      //   setIsloading(false);
    } catch (error) {
      //   setIsloading(false);
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
              <LandingPageView
                addAlert={addAlert}
                tasksState={tasksState}
                setTasksState={setTasksState}
                taskUpdateHandler={taskUpdateHandler}
              />
            )}
          />
          <Route
            path="/tasks/:id"
            exact
            render={(props) => (
              <SingleTaskView
                {...props}
                taskUpdateHandler={taskUpdateHandler}
              />
            )}
          />
        </MainContainer>
      </Router>
    </div>
  );
}

export default App;
