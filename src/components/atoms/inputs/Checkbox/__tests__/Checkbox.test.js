// Libraries
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import Checkbox from "../Checkbox";

afterEach(cleanup);

it("renders checkbox without crashing", () => {
  const divContainer = document.createElement("div");
  ReactDOM.render(<Checkbox />, divContainer);
  ReactDOM.unmountComponentAtNode(divContainer);
});

it("renders ToggleStatusBadge with correct text when checked", () => {
  const { getByTestId } = render(
    <Checkbox
      id="form-input-id"
      name="task-status"
      value={true}
      onChange={() => null}
    />
  );
  expect(getByTestId("checkbox")).toHaveTextContent("done");
});

it("renders ToggleStatusBadge with correct text when not checked", () => {
  const { getByTestId } = render(
    <Checkbox
      id="form-input-id"
      name="task-status"
      value={false}
      onChange={() => null}
    />
  );
  expect(getByTestId("checkbox")).toHaveTextContent("in progress");
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
      <Checkbox
        id="form-input-id"
        name="task-status"
        value={false}
        onChange={() => null}
      />
    )
    .toJSON();

  expect(DOMTree).toMatchSnapshot();
});
