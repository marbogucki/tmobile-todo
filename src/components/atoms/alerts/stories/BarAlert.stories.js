import React from "react";

import BarAlert from "../BarAlert";

export default {
  title: "BarAlert",
  component: BarAlert,
};

export const Default = () => <BarAlert alertText="Default style" />;
export const Danger = () => <BarAlert alertType="danger" alertText="Danger!" />;
export const Success = () => <BarAlert alertType="success" alertText="Yay!" />;
export const Warning = () => (
  <BarAlert alertType="warning" alertText="Watch out!" />
);
