const fs = require("fs");
const path = require("path");
const { exit } = require("process");

const { HEADER, USAGE } = require("./text");
const { asciiToHtmlEntityEnc, displayResult } = require("./utils");

console.log(HEADER);
if (process.argv.length < 3) {
  console.log(USAGE);
  exit(1);
}
const fileName = process.argv.slice(2)[0];

const fileContents = fs.readFileSync(path.resolve(fileName), {
  encoding: "utf8",
});
var xssCode = asciiToHtmlEntityEnc(fileContents);
displayResult(xssCode);
