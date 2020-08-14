import React, { useState } from "react";

// Custome hooks
import useAlerts from "../hooks/useAlerts";
import useAxiosGetCall from "../hooks/useAxiosGetCall";

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

// Authorization
import { tasksAPIUrl, httpHeader } from "../auth/tasksAPISettings";

function App() {
  const [tasksState, setTasksState] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [alerts, setAlerts] = useState([]);

  useAxiosGetCall(tasksAPIUrl, setIsloading, (data) => {
    setTasksState(data);
  });

  const taskUpdateHandler = async (id, newTaskData) => {
    try {
      //   setIsloading(true);
      const taskURL = `${tasksAPIUrl}/${id}`;
      console.log(taskURL, newTaskData);
      const { data } = await axios.put(taskURL, newTaskData, httpHeader);
      // setTaskData(data);
      //   setIsloading(false);
    } catch (error) {
      //   setIsloading(false);
      console.log(error);
    }
  };

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
