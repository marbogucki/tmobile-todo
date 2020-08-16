// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import BarAlert from "../BarAlert";

afterEach(cleanup);

it("renders BarAlert without crashing", () => {
  const divContainer = document.createElement("div");
  ReactDOM.render(<BarAlert />, divContainer);
  ReactDOM.unmountComponentAtNode(divContainer);
});

it("renders BarAlert correctly", () => {
  const { getByTestId } = render(
    <BarAlert
      alertText="Warning, something went wrong"
      alertType="danger"
      removeAlert={() => null}
      id="#2345"
    />
  );
  expect(getByTestId("bar-alert")).toHaveTextContent(
    "Warning, something went wrong"
  );
});

it("matches snapshot 1", () => {
  const DOMTree = renderer
    .create(
      <BarAlert
        alertText="Warning, something went wrong"
        alertType="danger"
        removeAlert={() => null}
        id="#2345"
      />
    )
    .toJSON();

  expect(DOMTree).toMatchSnapshot();
});
