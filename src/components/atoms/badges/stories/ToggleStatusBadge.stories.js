import React from "react";

import ToggleStatusBadge from "../ToggleStatusBadge";

import { AlertsProvider } from "../../../../context/AlertsContext";

export default {
  title: "ToggleStatusBadge",
  component: ToggleStatusBadge,
};

export const Done = () => (
  <AlertsProvider>
    <ToggleStatusBadge task={{ done: true }} />
  </AlertsProvider>
);

export const InProgress = () => (
  <AlertsProvider>
    <ToggleStatusBadge task={{ done: false }} />
  </AlertsProvider>
);
