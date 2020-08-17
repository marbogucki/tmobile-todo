import React from "react";

import PaginationNav from "../PaginationNav";

export default {
  title: "PaginationNav",
  component: PaginationNav,
};

let currentPage = 1;
const paginationOnClickHandler = (event, number) => {
  event.preventDefault();
  currentPage = number;
};
export const Deafault = () => (
  <PaginationNav
    itemsPerPage={20}
    totalNumberOfItems={100}
    currentPage={1}
    paginationOnClickHandler={paginationOnClickHandler}
  />
);
