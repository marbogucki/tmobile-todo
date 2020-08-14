import React from "react";

// Libraries
import axios from "axios";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";

//Components
import ToggleStatusBadge from "../atoms/badges/ToggleStatusBadge";
import SectionHeader from "../atoms/headers/SectionHeader";

// Utils
import curlText from "../../utils/curlText";

/** @jsx jsx */

const tableWrapper = css`
  /* display: inline-block; */
  /* width: calc(50% - 2rem); */
  overflow-y: scroll;
  vertical-align: top;
  /* @media screen and (max-width: 1050px) {
    display: block;
    width: 100%;
  } */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const tableStyle = css`
  font-size: 1.6rem;
  text-align: left;
  background-color: #fff;
  border-collapse: collapse;
  & thead tr {
    font-weight: 700;
    color: #7e84cc;
    border-bottom: 1px solid #b4b8e1;
  }
  th,
  td {
    padding: 1.6rem;
    &:nth-of-type(2n + 1) {
      background-color: #f8f8fc;
    }
  }
`;

const rowStyle = css`
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  &:hover {
    border-bottom: 1px solid #b4b8e1;
    /* cursor: pointer; */
  }
`;

const linkStyle = css`
  color: #7e84cc;
  font-weight: 700;
  text-decoration: none;
`;

const TestsListing = ({ tasksState, headerText, taskUpdateHandler }) => {
  return (
    <div css={tableWrapper}>
      <SectionHeader text={headerText} />
      <table css={tableStyle}>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasksState.map(({ id, title, description, done }) => (
            <tr css={rowStyle} key={id}>
              <td css={linkStyle}>
                <Link css={linkStyle} to={`/tasks/${id}`}>{`#${id}`}</Link>{" "}
              </td>
              <td>{curlText(title, 10)}</td>
              <td>{curlText(description, 10)}</td>
              <td>
                <ToggleStatusBadge
                  isTaskDone={done}
                  id={id}
                  title={title}
                  description={description}
                  taskUpdateHandler={taskUpdateHandler}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestsListing;
