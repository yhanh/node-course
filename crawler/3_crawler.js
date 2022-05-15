// await version
// 1. read stock no from file (fs)
// 2. axios.get to request data

// npm i axios
const axios = require("axios");
const fs = require("fs");

let p = new Promise((resolve, reject) => {
  fs.readFile("stock.txt", "utf-8", (err, stockNo) => {
    if (err) {
      // console.error("read file error", err);
      reject("read file error", err);
    } else {
      // console.log("read stock no from file:", stockNo);
      resolve("read stock no from file:", stockNo);
      // https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220301&stockNo=2330
      axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
        params: {
          // 設定 query string
          response: "json",
          date: "20220301",
          stockNo: stockNo,
        },
      });
    }
  });
});

async function getData() {
  try {
    let response = await p;
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}

getData();
