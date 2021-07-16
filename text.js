const HEADER = `
===============================================================
██╗  ██╗███████╗███████╗      ██╗     ██╗   ██╗██████╗ ███████╗
╚██╗██╔╝██╔════╝██╔════╝      ██║     ██║   ██║██╔══██╗██╔════╝
 ╚███╔╝ ███████╗███████╗█████╗██║     ██║   ██║██████╔╝█████╗  
 ██╔██╗ ╚════██║╚════██║╚════╝██║     ██║   ██║██╔══██╗██╔══╝  
██╔╝ ██╗███████║███████║      ███████╗╚██████╔╝██████╔╝███████╗
╚═╝  ╚═╝╚══════╝╚══════╝      ╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝
===============================================================`;
const RESULT_START = `
ASCII to HTML Entity Number for XSS:
----------------(start)-----------------`;

const RESULT_END = `
-----------------(end)------------------`;

const USAGE = `
USAGE: node index.js <filename>

Please try again.`;

module.exports = { HEADER, USAGE, RESULT_END, RESULT_START };