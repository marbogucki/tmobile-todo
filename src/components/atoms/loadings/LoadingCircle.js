import React from "react";
import { css, jsx } from "@emotion/core";

/** @jsx jsx */
const loaderStyle = css`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  & > .loading-gif {
    /* margin-left: auto;
    margin-right: auto;
    display: inline-block; */
  }
`;

const LoadingCircle = () => {
  return (
    <div css={loaderStyle}>
      <img
        className="loading-gif"
        src="/animations/loading_sharks.gif"
        alt="Loading please wait..."
      />
    </div>
  );
};

export default LoadingCircle;
