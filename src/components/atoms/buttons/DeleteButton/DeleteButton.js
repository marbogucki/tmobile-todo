import React, { useState, Fragment } from "react";

// Components
import LoadingCircle from "../../loadings/LoadingCircle";

// Libraries
import axios from "axios";
import { jsx, css } from "@emotion/core";

// Authorization
import { tasksAPIUrl, httpHeader } from "../../../../auth/tasksAPISettings";

// Styles
import {
  modalStyle,
  deleteBtnStyle,
  confirmStyle,
  declineStyle,
} from "./style/DeleteButtonStyle";

/** @jsx jsx */

const DeleteBtn = ({ btnText, modalText, id, onTaskDeletionHandler }) => {
  const toggleModalHandler = () => {
    setIsToggled(!isToggled);
  };

  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const deleteItemCall = async (id) => {
    try {
      setIsloading(true);
      const taskURL = `${tasksAPIUrl}/${id}`;
      await axios.delete(taskURL, httpHeader);
      setIsloading(false);
      onTaskDeletionHandler();
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  const onConfimHandler = () => {
    deleteItemCall(id);
  };
  return (
    <Fragment>
      <button onClick={toggleModalHandler} css={deleteBtnStyle(isToggled)}>
        {btnText}
      </button>
      {isToggled ? (
        <div css={modalStyle}>
          {isLoading ? (
            <LoadingCircle />
          ) : (
            <Fragment>
              <p>{modalText} </p>

              <button
                className="modal-button"
                onClick={onConfimHandler}
                css={confirmStyle}
              >
                Yes
              </button>
              <button
                className="modal-button"
                onClick={toggleModalHandler}
                css={declineStyle}
              >
                No
              </button>
            </Fragment>
          )}
        </div>
      ) : null}
    </Fragment>
  );
};

export default DeleteBtn;
