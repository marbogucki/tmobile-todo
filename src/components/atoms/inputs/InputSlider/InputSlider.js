import React from "react";

// Libraries
import { css, jsx } from "@emotion/core";

// Styles
import {
  inputWrapperStyle,
  inputStyle,
  labelStyle,
} from "./style/InputSliderStyle";

/** @jsx jsx */

const InputSlider = ({
  id,
  type,
  name,
  labelText,
  value,
  onChange,
  required,
}) => {
  return (
    <div
      className="input-slider-wrapper"
      css={inputWrapperStyle}
      data-testid="input-slider"
    >
      <input
        onChange={onChange}
        css={inputStyle}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder=" "
        required={required}
      />
      <label css={labelStyle} htmlFor={id}>
        {labelText}
      </label>
    </div>
  );
};

export default InputSlider;
