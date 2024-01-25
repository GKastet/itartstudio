export const fontSizeDetector = (text, customLength) => {
  if (text.length <= customLength) {
    return "";
  } else if (text.length > customLength * 2) {
    return "extralarge";
  } else if (text.length > customLength * 1.5) {
    return "large";
  } else {
    return "medium";
  }
};
