// Libraries
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

// Context
import { TasksProvider } from "../../../context/TasksContext";
import { AlertsProvider } from "../../../context/AlertsContext";

// Components
import AddTaskForm from "../AddTaskForm";

afterEach(cleanup);

it("renders AddTaskForm without crashing", () => {
  const divContainer = document.createElement("div");

  ReactDOM.render(
    <AlertsProvider>
      <AddTaskForm />
    </AlertsProvider>,
    divContainer
  );
  ReactDOM.unmountComponentAtNode(divContainer);
});

it("matches snapshot 1", () => {
  const DOMTree = renderer
    .create(
      <AlertsProvider>
        <AddTaskForm />
      </AlertsProvider>
    )
    .toJSON();

  expect(DOMTree).toMatchSnapshot();
});
