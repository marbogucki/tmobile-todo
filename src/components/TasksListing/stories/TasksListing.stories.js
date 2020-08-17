import React from "react";

import TasksListing from "../TasksListing";

import { Router } from "react-router-dom";

export default {
  title: "TasksListing",
  component: TasksListing,
};

export const Empty = () => (
  <TasksListing tasks={[]} headerText="Listing header" />
);
