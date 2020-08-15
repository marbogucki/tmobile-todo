import { css } from "@emotion/core";

/** @jsx jsx */
const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    background-color: #f0f3f8;
    margin: 0;
    padding: 0;
  }
  ul,
  li,
  ol {
    margin: 0;
    padding-inline-start: 0;
  }
`;

export default globalStyles;
