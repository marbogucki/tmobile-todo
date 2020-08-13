// Libs
import React, { useState, Fragment } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
// Components
import InputSlider from "../atoms/inputs/InputSlider";
import FormButton from "../atoms/buttons/FormButton";
import CloseWindowButton from "../atoms/buttons/CloseWindowButton";
import ToggleFormButton from "../atoms/buttons/ToggleFormButton";
import LoadingDefault from "../atoms/loadings/LoadingCircle";
import Checkbox from "../atoms/inputs/Checkbox";

/** @jsx jsx */

const formWrapper = css`
  @media screen and (max-width: 768px) {
    padding: 1.6rem 0;
  }
`;

const barFormStyle = (isFormToggled) => css`
  background-color: #fff;
  display: flex;
  margin-bottom: 4rem;
  & > .inputWrapper {
    margin-right: 1.6rem;
  }
  & > .input-slider-wrapper {
    margin-right: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    background-color: #fff;
    display: ${isFormToggled ? "block" : "none"};
    padding: 4rem;
    border-radius: 16px;
    box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);
    left: 16px;
    width: calc(100vw - 32px);
    & > .input-slider-wrapper {
      margin-bottom: 2rem;
    }
    & > .close-window-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;

const AddTaskForm = ({ tasksState, setTasksState, addAlert }) => {
  const [isMobileFormToggled, setIsMobileFormToggled] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const initialState = {
    title: "",
    description: "",
    done: false,
  };

  const [formState, setFormState] = useState(initialState);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("form state:", formState);
    setIsloading(true);
    axios
      .post("https://jarzebak.eu/dawid/tasks", formState, {
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: "dawid",
          password: "WAFmkpSI",
        },
      })
      .then((res) => {
        setIsloading(false);
        setTasksState([...tasksState, res.data]);
      })
      .catch((error) => {
        setIsloading(false);
        addAlert(
          "danger",
          "Ups. Unable to add test. Check data and try again",
          3000
        );
        console.log(error);
      });
  };

  const onChangeHandler = (event) => {
    const {
      target: { name },
    } = event;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    console.log(value);
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
      <ToggleFormButton
        buttonText="New task"
        onClickHandler={toggleMobileFormHandler}
      />

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
              value={formState.sizeX}
              onChange={onChangeHandler}
            />
            <FormButton btnText="Add task" />{" "}
          </Fragment>
        )}
      </form>
    </div>
  );
};

export default AddTaskForm;
