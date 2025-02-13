const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/home'){
        res.writa("<h1>Hello From the home.</h1>")
        res.end();
    }
    else if(url==='/about'){
        res.write("<h1>This is about Page</h1>")
        res.end();
    }
    else{
        res.write("<h1>Cant't find 404</h1>")
        res.end();
    }
});


server.listen(3000,()=>{
    console.log("Sever runnin on port no 8080");
})