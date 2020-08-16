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

// describe("form submit", () => {
//   it("calls the form submit without invalid data", () => {
//     const { getByTestId, getByRole } = render(
//       <AlertsProvider>
//         <AddTaskForm />
//       </AlertsProvider>
//     );
//     expect(getByTestId("submit-btn");
//   });
//   // it.todo("calls the form submit with valid data", ()=> {

//   // })
// });

// it("renders BarAlert correctly", () => {
//   const { getByTestId } = render(
//     <BarAlert
//       alertText="Warning, something went wrong"
//       alertType="danger"
//       removeAlert={() => null}
//       id="#2345"
//     />
//   );
//   expect(getByTestId("bar-alert")).toHaveTextContent(
//     "Warning, something went wrong"
//   );
// });

// it("matches snapshot 1", () => {
//   const DOMTree = renderer
//     .create(
//       <BarAlert
//         alertText="Warning, something went wrong"
//         alertType="danger"
//         removeAlert={() => null}
//         id="#2345"
//       />
//     )
//     .toJSON();

//   expect(DOMTree).toMatchSnapshot();
// });
