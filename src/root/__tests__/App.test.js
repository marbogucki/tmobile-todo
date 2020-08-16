import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

it("renders App without crashing", () => {
  const divContainer = document.createElement("div");
  ReactDOM.render(<App />, divContainer);
  ReactDOM.unmountComponentAtNode(divContainer);
});
