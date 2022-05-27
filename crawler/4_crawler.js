// read stock no from mysql database

// mysql2 是一個第三方套件
// npm i mysql2
// 引用進來

const mysql = require("mysql2/promise");

require("dotenv").config();
// 幫我們把 .env 裡的變數讀進來(因為有些是機密，所以 .env 要放在 .gitignore 裡，所以要再建立一個 .env.example 把移除機密資料後的其他 env 資料放進去，重要的資料不可以推上 github)

(async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  let [data, fields] = await connection.execute("SELECT * FROM stocks");
  console.log(data);

  connection.end();
})();