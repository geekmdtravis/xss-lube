const { exit } = require("process");

const { HEADER, RESULT_END, RESULT_START, USAGE } = require("./text");
const dict = require("./dict");

const asciiToHtmlEntityEnc = (htmlCode) => {
  return htmlCode
    .split("")
    .map((c) => dict[c])
    .join("");
};

const displayResult = (xssCode, fileName) => {
  console.log(
    `${fileName.toUpperCase()} - ${RESULT_START}\n${xssCode}\n${RESULT_END}`
  );
};

const displayHeader = () => {
  console.log(HEADER);
};

const displayUsage = () => {
  console.log(USAGE);
  exit(1);
};

module.exports = {
  asciiToHtmlEntityEnc,
  displayHeader,
  displayResult,
  displayUsage,
};
