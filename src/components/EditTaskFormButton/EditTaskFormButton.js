// Libs
import React, { useState, Fragment, useContext } from "react";
import { css, jsx } from "@emotion/core";

// Context
import { TasksContext } from "../../context/TasksContext";
import { AlertsContext } from "../../context/AlertsContext";

// Components
import InputSlider from "../atoms/inputs/InputSlider/InputSlider";
import FormButton from "../atoms/buttons/FormButton";
import CloseWindowButton from "../atoms/buttons/CloseWindowButton/CloseWindowButton";
import LoadingDefault from "../atoms/loadings/LoadingCircle";
import Checkbox from "../atoms/inputs/Checkbox/Checkbox";

// Utils
import editTaskCall from "../../utils/httpAxiosCalls/editTaskCall";
import setFormChanges from "../../utils/setFormChanges";

// Authorization
import { tasksAPIUrl } from "../../auth/tasksAPISettings";

// Styles
import {
  formWrapper,
  barFormStyle,
  editButtonStyle,
} from "./style/EditTaskFormButtonStyle";

/** @jsx jsx */

const EditTaskFormButton = ({ taskData }) => {
  const [isMobileFormToggled, setIsMobileFormToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { updateOneTaskState } = useContext(TasksContext);
  const { addAlert } = useContext(AlertsContext);

  const { id } = taskData;

  const taskAPIUrl = `${tasksAPIUrl}/${id}`;

  const initialState = {
    title: "",
    description: "",
    done: false,
  };

  const [formState, setFormState] = useState(initialState);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    editTaskCall(taskAPIUrl, formState, setIsLoading, addAlert, (data) => {
      updateOneTaskState(id, data);
    });
  };

  const onChangeHandler = (event) => {
    setFormChanges(event, setFormState, formState);
  };

  const toggleMobileFormHandler = (event) => {
    event.preventDefault();
    setIsMobileFormToggled(!isMobileFormToggled);
  };
  return (
    <div css={formWrapper}>
      <button onClick={toggleMobileFormHandler} css={editButtonStyle}>
        Edit
      </button>

      <form css={barFormStyle(isMobileFormToggled)} onSubmit={onSubmitHandler}>
        {isLoading ? (
          <LoadingDefault />
        ) : (
          <Fragment>
            <CloseWindowButton onClickHandler={toggleMobileFormHandler} />
            <Checkbox
              id="editTaskStatus"
              name="done"
              value={formState.done}
              onChange={onChangeHandler}
            />
            <InputSlider
              id={"editTaskTitle"}
              type={"text"}
              name={"title"}
              labelText={"task title"}
              value={formState.title}
              onChange={onChangeHandler}
            />
            <InputSlider
              id={"editTaskDescription"}
              type={"text"}
              name={"description"}
              labelText={"task description"}
              value={formState.description}
              onChange={onChangeHandler}
            />
            <FormButton btnText="Edit task" />{" "}
          </Fragment>
        )}
      </form>
    </div>
  );
};

export default EditTaskFormButton;
