import React, { useState, Fragment } from "react";

// Components
import LoadingCircle from "../loadings/LoadingCircle";

// Libraries
import axios from "axios";
import { Redirect } from "react-router-dom";
import { jsx, css } from "@emotion/core";

// Authorization
import { tasksAPIUrl, httpHeader } from "../../../auth/tasksAPISettings";

/** @jsx jsx */
const buttonStyle = css`
  border-radius: 2px;
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 0.8rem;
  display: inline-block;
`;

const modalStyle = css`
  padding: 2rem 4rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & .modal-button:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

const deleteBtnStyle = (isToggled) => css`
${buttonStyle}
background-color: ${isToggled ? "#5f5f5f" : "#db2828"} ;
cursor: ${isToggled ? "not-allowed" : "pointer"}  ;
`;

const confirmStyle = () => css`
  ${buttonStyle}
  background-color:#3dba7c;
`;

const declineStyle = css`
  ${buttonStyle}
  background-color: #db2828;
`;

const DeleteBtn = ({ btnText, modalText, id, removeItemFromState }) => {
  const toggleModalHandler = () => {
    setIsToggled(!isToggled);
  };

  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isRedirected, setIsredirected] = useState(false);

  const deleteItem = async (id) => {
    try {
      setIsloading(true);
      const taskURL = `${tasksAPIUrl}/${id}`;
      await axios.delete(taskURL, httpHeader);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  const onConfimHandler = () => {
    deleteItem(id);
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
