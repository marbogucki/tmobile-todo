// Libraries
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import ToggleStatusBadge from "../ToggleStatusBadge";

// Context
import { AlertsProvider } from "../../../../context/AlertsContext";

afterEach(cleanup);

it("renders ToggleStatusBadge without crashing", () => {
  const divContainer = document.createElement("div");
  const taskMockData = {
    id: 20,
    done: true,
    title: "test",
    description: "test",
  };
  ReactDOM.render(
    <AlertsProvider>
      <ToggleStatusBadge task={taskMockData} />
    </AlertsProvider>,
    divContainer
  );
  ReactDOM.unmountComponentAtNode(divContainer);
});

it("renders ToggleStatusBadge with correct text", () => {
  const taskMockData = {
    id: 20,
    done: true,
    title: "test",
    description: "test",
  };
  const { getByTestId } = render(
    <AlertsProvider>
      <ToggleStatusBadge task={taskMockData} />
    </AlertsProvider>
  );
  expect(getByTestId("toggle-status-badge")).toHaveTextContent("done");
});

it("matches snapshot 1", () => {
  const taskMockData = {
    id: 20,
    done: false,
    title: "test 2",
    description: "test2",
  };
  const DOMTree = renderer
    .create(
      <AlertsProvider>
        <ToggleStatusBadge task={taskMockData} />
      </AlertsProvider>
    )
    .toJSON();

  expect(DOMTree).toMatchSnapshot();
});
