export const fontSizeDetector = (text, customLength) => {
  if (text.length <= customLength) {
    return "";
  } else if (text.length > customLength * 2) {
    console.log("extralarge");
    return "extralarge";
  } else if (text.length > customLength * 1.5) {
    console.log("large");
    return "large";
  } else {
    console.log("medium");
    return "medium";
  }
};
