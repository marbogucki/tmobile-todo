import { css, jsx } from "@emotion/core";

/** @jsx jsx */

const tableWrapper = css`
  overflow-y: scroll;
  vertical-align: top;
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

export { tableWrapper, tableStyle, rowStyle, linkStyle };
