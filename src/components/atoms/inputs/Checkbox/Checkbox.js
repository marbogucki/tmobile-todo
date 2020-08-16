import React from "react";

// Libraries
import { css, jsx } from "@emotion/core";

// Styles
import { labelStyle, inputStyle } from "./style/CheckboxStyle";

/** @jsx jsx */

const Checkbox = ({ id, name, value, onChange }) => {
  return (
    <div className="input-slider-wrapper" data-testid="checkbox">
      <input
        onChange={onChange}
        css={inputStyle}
        id={id}
        type="checkbox"
        name={name}
        value={value}
        placeholder=" "
      />
      <label css={labelStyle(value)} htmlFor={id}>
        {value ? "done" : "in progress"}
      </label>
    </div>
  );
};

export default Checkbox;
