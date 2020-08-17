import React from "react";
import DeleteButton from "../DeleteButton";

export default {
  title: "DeleteButton",
  component: DeleteButton,
};

export const Primary = () => (
  <DeleteButton
    btnText="Delete"
    modalText="Are you sure you want to delete this task?"
  />
);
