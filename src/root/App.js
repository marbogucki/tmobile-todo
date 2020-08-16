import React, { useState } from "react";

// Context
import { TasksProvider } from "../context/TasksContext";
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

function App() {
  const [isLoading, setIsloading] = useState(false);

  return (
    <div className="App">
      <Global styles={globalStyles} />
      <Router>
        <TasksProvider setIsloading={setIsloading}>
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
        </TasksProvider>
      </Router>
    </div>
  );
}

export default App;
