const fs = require('fs');
const { myWriteFile } = require('./fileSync');


function myReadFile(){
    try{
        fs.readFile("dummy.txt", "utf-8",(err,data)=>{
          if(err){
            throw err
          }
          else{
            console.log(data);
          }
        });
    }catch(err){
        console.log(err.message);
    }
}
myReadFile()


/// now making the write file

function ReadFile(){
    try{
        const data = "This is my data";
        fs.writeFile('written.txt', data,(err)=>{
            if(err){
                console.log("found the error")
            }
            else{
                console.log("Text added in file Written...");
            }
        })
    }catch(err){
        console.log(err.message)
    }
}

myWriteFile()