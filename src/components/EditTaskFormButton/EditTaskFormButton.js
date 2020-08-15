// Libs
import React, { useState, Fragment } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
// Components
import InputSlider from "../atoms/inputs/InputSlider";
import FormButton from "../atoms/buttons/FormButton";
import CloseWindowButton from "../atoms/buttons/CloseWindowButton";
import LoadingDefault from "../atoms/loadings/LoadingCircle";
import Checkbox from "../atoms/inputs/Checkbox";

// Authorization
import { tasksAPIUrl, httpHeader } from "../../auth/tasksAPISettings";

/** @jsx jsx */

const formWrapper = css`
  /* position: relative; */
  display: inline-block;
  @media screen and (max-width: 768px) {
    padding: 1.6rem 0;
  }
`;

const barFormStyle = (isFormToggled) => css`
  position: absolute;
  left: 50%;
  top: 16rem;
  transform: translate(-50%, -50%);
  max-width: 1170px;
  background-color: #fff;
  display: flex;
  margin-bottom: 4rem;
  background-color: #fff;
  display: ${isFormToggled ? "block" : "none"};
  padding: 4rem;
  border-radius: 16px;
  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);

  width: calc(100vw - 32px);
  @media screen and (max-width: 768px) {
    top: 16rem;
    left: 0;
  }
  & > .inputWrapper {
    margin-right: 1.6rem;
  }
  & > .input-slider-wrapper {
    margin-right: 1.6rem;
  }

  & > .input-slider-wrapper {
    margin-bottom: 2rem;
  }
  & > .close-window-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

const editButtonStyle = css`
  background-color: #3fbe90;
  border: none;
  padding: 0.8rem;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  display: inline-block;
`;

const EditTaskFormButton = ({
  tasksState,
  taskData,
  setTasksState,
  addAlert,
}) => {
  const [isMobileFormToggled, setIsMobileFormToggled] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const initialState = {
    ...taskData,
  };

  const [formState, setFormState] = useState(initialState);

  const updateTaskCall = async () => {
    setIsloading(true);
    try {
      const { data } = await axios.put(tasksAPIUrl, formState, httpHeader);
      setIsloading(false);
      setTasksState([...tasksState, data]);
    } catch (error) {
      setIsloading(false);
      addAlert(
        "danger",
        "Ups. Unable to edit task. Check data and try again",
        3000
      );
      console.log(error);
    }
  };

  const onSubmitHandler = (event) => {
    updateTaskCall();
  };

  const onChangeHandler = (event) => {
    const {
      target: { name },
    } = event;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
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
              id="taskStatus"
              name="done"
              value={formState.done}
              onChange={onChangeHandler}
            />
            <InputSlider
              id={"taskTitle"}
              type={"text"}
              name={"title"}
              labelText={"task title"}
              value={formState.title}
              onChange={onChangeHandler}
            />
            <InputSlider
              id={"taskDescription"}
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
