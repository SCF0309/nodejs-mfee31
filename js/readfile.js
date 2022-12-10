const fs = require("fs");

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        fs.readFile("text.txt", "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }, 3000);
});
p.then((data) => {
    console.log('成功讀取資料',data)
}).catch((err) => {
    console.log('發生錯誤',err)
})