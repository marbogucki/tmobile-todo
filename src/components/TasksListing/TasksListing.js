import React, { useState } from "react";

// Libraries
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";

//Components
import ToggleStatusBadge from "../atoms/badges/ToggleStatusBadge";
import SectionHeader from "../atoms/headers/SectionHeader";
import PaginationNav from "../PaginationNav/PaginationNav";

// Utils
import curlText from "../../utils/curlText";
import sortItems from "../../utils/sortItems";

// Styles
import {
  tableWrapper,
  tableStyle,
  rowStyle,
  linkStyle,
} from "./styles/TaskListingStyles";

/** @jsx jsx */

const TestsListing = ({ tasks, headerText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const numberOfTasks = tasks.length;

  const currentTasks = sortItems([...tasks], "id", "desc").slice(
    indexOfFirstTask,
    indexOfLastTask
  );
  const paginationOnClickHandler = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <div css={tableWrapper}>
      <SectionHeader text={headerText} />
      <PaginationNav
        itemsPerPage={tasksPerPage}
        totalNumberOfItems={numberOfTasks}
        paginationOnClickHandler={paginationOnClickHandler}
        currentPage={currentPage}
      />
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
          {currentTasks.map((task) => (
            <tr css={rowStyle} key={task.id}>
              <td css={linkStyle}>
                <Link
                  css={linkStyle}
                  to={`/tasks/${task.id}`}
                >{`#${task.id}`}</Link>{" "}
              </td>
              <td>{curlText(task.title, 10)}</td>
              <td>{curlText(task.description, 10)}</td>
              <td>
                <ToggleStatusBadge task={task} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestsListing;
