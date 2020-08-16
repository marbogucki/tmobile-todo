// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import ToggleStatusBadge from "../ToggleStatusBadge";

afterEach(cleanup);

it("renders ToggleStatusBadge without crashing", () => {
  const divContainer = document.createElement("div");
  ReactDOM.render(ToggleStatusBadge, divContainer);
  ReactDOM.unmountComponentAtNode(divContainer);
});

// it("renders ToggleStatusBadge with correct text", () => {
//   const taskMockData = {
//     id: 20,
//     done: true,
//     title: "test",
//     description: "test",
//   };
//   const { getByTestId } = render(<ToggleStatusBadge task={taskMockData} />);
//   expect(getByTestId("toggle-status-badge")).toHaveTextContent("done");
// });
