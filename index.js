const dict = require("./dict");

const asciiToHtmlEntityEnc = (htmlCode) => {
  return htmlCode
    .split("")
    .map((c) => {
      switch (c) {
        case "\n":
          return "";
        case " ":
          return "&nbsp;";
        default:
          return dict[c];
      }
    })
    .join("");
};

var htmlCode = `
<script>
    alert("Hello, world!");
</script>
`;

var xssCode = asciiToHtmlEntityEnc(htmlCode);

console.log(xssCode);
