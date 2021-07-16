const { RESULT_END, RESULT_START } = require("./text");
const dict = require("./dict");

const asciiToHtmlEntityEnc = (htmlCode) => {
  return htmlCode
    .split("")
    .map((c) => dict[c])
    .join("");
};

const displayResult = (xssCode) => {
  console.log(`${RESULT_START}\n${xssCode}\n${RESULT_END}`);
};

module.exports = {
  asciiToHtmlEntityEnc,
  displayResult,
};
