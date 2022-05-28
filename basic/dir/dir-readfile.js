const fs = require("fs/promises");
const path = require('path');

(async () => {
  let result = await fs.readFile(path.join(__dirname, "test.txt"), "utf-8");
  console.log(result);
})();

// 本來 readfile 裡的檔案，會根據"人"在哪裡而決定
// 更好的方法: 用程式碼檔案自己的位置 ==> dir name
