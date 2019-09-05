const server = require("./api/server.js");

require("dotenv").config();
console.log("environment", process.env.NODE_ENV);
const port = 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
