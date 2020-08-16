// Libraries
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const paginationStyle = (currentPage) => css`
  margin-top: 0.8rem;
  & .pages-list {
    display: flex;
    flex-wrap: wrap;
  }

  & .pages-list__item {
    border-top: 0.5px solid #92a2ae;
    border-left: 0.5px solid #92a2ae;
    border-radius: 3px 0 0 0;

    list-style: none;
    &:nth-of-type(${currentPage}) {
      background-color: #f8f8fc;
      color: #7e84cc;
      font-weight: bold;
    }
  }

  & .pages-list__link {
    display: inline-block;
    color: #92a2ae;
    padding: 0.8rem;
  }
`;

export default paginationStyle;
