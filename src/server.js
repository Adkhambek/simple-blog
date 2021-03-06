const app = require("./app");
const { PORT } = require("./config");
const chalk = require("chalk");

app.listen(PORT, () => {
  console.log(`${chalk.bold.bgGreen(
    `Server is working on http://localhost:${PORT}`
  )}
    `);
});
