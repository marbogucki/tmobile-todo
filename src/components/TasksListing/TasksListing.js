import React from "react";
import { css, jsx } from "@emotion/core";

import DeleteBtn from "../atoms/buttons/DeleteButton";

/** @jsx jsx */

const tableWrapper = css`
  overflow-y: scroll;
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

const TestsListing = ({ tasksState }) => {
  console.log(tasksState);
  return (
    <section css={tableWrapper}>
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
          {tasksState.map((task) => (
            <tr css={rowStyle} key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.done}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TestsListing;
