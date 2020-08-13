const curlText = (text, maxWidth) =>
  text.length > maxWidth ? text.substring(0, maxWidth) + "..." : text;

export default curlText;
