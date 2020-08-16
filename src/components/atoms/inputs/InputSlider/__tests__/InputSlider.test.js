// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import InputSlider from "../InputSlider";

afterEach(cleanup);

it("renders InputSlider without crashing", () => {
  const divContainer = document.createElement("div");

  ReactDOM.render(<InputSlider />, divContainer);
  ReactDOM.unmountComponentAtNode(divContainer);
});

it("renders input with correct text", () => {
  const { getByTestId } = render(<InputSlider labelText="lebel test text" />);
  expect(getByTestId("input-slider")).toHaveTextContent("lebel test text");
});

it("matches snapshot 1", () => {
  const DOMTree = renderer.create(<InputSlider />).toJSON();

  expect(DOMTree).toMatchSnapshot();
});
