const express = require('express');
//利用express 這個框架建立一個web app
const app = express();

// middleware => pipeline pattern(大數據分析使用)



//使用一個中間件函式
//沒有next();會一直轉圈(沒有收到response)
app.use((req, res, next) => {
    console.log('這裡是第一個中間件 A');
    // //TODO:檢查是否已經登入
    // if(login){
    //     next();
    // }else{
    //     res.send('檢查登入失敗');
    // }

    // res.send('這裡是 A 中間件');
    next();
});

app.use((req, res, next) => {
    console.log('這裡是第二個中間件 B');
    req.mfee31 = '想下斑';
    req.dt = new Date().toISOString();
    next();
});

//app.[Method]
//get, post , put, patch, delete, option, head 
//路由中間件(方法對網址對才進入)
app.get('/', (req,res) => {    
    console.log('這裡是首頁2', req.dt, req.mfee31);
    res.send('Hello Express 9');    
});

app.get('/test', (req, res, next) => {
    console.log('這裡是 test 頁面', req.dt, req.mfee31);
    res.send('Hello Test 1');
});

//路由中間件後面另外放一件路由中間件(比對不到網址資料)
//放在所有路由器中間件的後面
//前面所有的路由器都比不到對面的網址時,就會掉到這裡來
//-->這就是一個404狀況
//利用了中間件會依照程式碼順序來執行的特性
app.use((req, res, next) => {
    console.log('這裡是404');
    res.send('沒有這個網頁啦');
});

//只要大於1024且不為3306(被mysql使用)
app.listen((3001), ()=>{
    console.log('Server running at port 3001');
});

