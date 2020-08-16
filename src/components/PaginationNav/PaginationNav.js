import React from "react";

// Libraries
import { css, jsx } from "@emotion/core";

// Styles
import paginationStyle from "./styles/paginationStyle";

/** @jsx jsx */

const PaginationNav = ({
  itemsPerPage,
  totalNumberOfItems,
  paginationOnClickHandler,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNumberOfItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={"pagination-nav"} css={() => paginationStyle(currentPage)}>
      <ul className={"pages-list"}>
        {pageNumbers.map((number) => (
          <li key={number} className={"pages-list__item"}>
            {" "}
            <a
              onClick={(event) => paginationOnClickHandler(event, number)}
              href="!#"
              className={"pages-list__link"}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationNav;
