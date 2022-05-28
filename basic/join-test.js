// /public/images/upload/member
let dirs = ["public", "images", "upload", "member"];
let aryJoin = dirs.join("/");
console.log(aryJoin);

// node.js 內建的 path 模組
const path = require("path");
let realPath = path.join("public", "images", "upload", "member");
console.log(realPath);
// \public\images\upload\member
// path.join()可以解決不同電腦路徑 '/' 或 '\' 的問題
