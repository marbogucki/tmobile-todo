import React from "react";
import EditTaskFormButton from "../EditTaskFormButton";

import { AlertsProvider } from "../../../context/AlertsContext";
// import {  } from "../../../context/TasksContext";

export default {
  title: "EditTaskFormButton",
  component: EditTaskFormButton,
};

export const Default = () => (
  <AlertsProvider>
    <EditTaskFormButton taskData={{ id: 1 }} />
  </AlertsProvider>
);
