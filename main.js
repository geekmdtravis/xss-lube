const fs = require("fs");
const path = require("path");

const { USAGE } = require("./text");
const {
  asciiToHtmlEntityEnc,
  displayHeader,
  displayResult,
  displayUsage,
} = require("./utils");

const main = () => {
  displayHeader();

  if (process.argv.length < 3) {
    displayUsage();
  }

  const fileNameArg = process.argv.slice(2)[0];

  if (fileNameArg === "-h" || fileNameArg === "--help") {
    console.log(USAGE);
    exit(1);
  }

  const fileContents = fs.readFileSync(path.resolve(fileNameArg), {
    encoding: "utf8",
  });

  var xssCode = asciiToHtmlEntityEnc(fileContents);

  displayResult(xssCode, fileNameArg);
};

module.exports = main;
