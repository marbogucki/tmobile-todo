import { css, jsx } from "@emotion/core";

/** @jsx jsx */
const doubleColumnGridStyle = css`
  @media screen and (min-width: 1052px) {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
    &:after {
      position: absolute;
      content: "";
      height: 100%;
      width: 1px;
      left: 50%;
      top: 0;
      background-color: #92a2ae;
    }
  }
`;

const DoubleColumnGrid = ({ children }) => (
  <div css={doubleColumnGridStyle}>{children}</div>
);

export default DoubleColumnGrid;
