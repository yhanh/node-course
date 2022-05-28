const fs = require("fs/promises");
const path = require('path');

(async () => {
  let result = await fs.readFile(path.join(__dirname, "test.txt"), "utf-8");
  console.log(result);
})();
