const { error } = require('console');
const fs = require('fs');


function myReadFile(){
    try{
        const data = fs.readFileSync("dummy.txt","utf-8");
        if(data){
            console.log("file Data",data);
        }else{
            throw err;
        }
    
    }catch(err){
        console.log("File Erro",err.message);
    }
}



// now writing the data into the new file 
function myWriteFile(){


    try{
        const data = "Hello EveryOne How you all are Doing";
        fs.writeFileSync("written.txt", data);
        console.log(data);
    }
    catch(err){
        console.log("File Write Error!!",err.message);
    }
    
}

module.exports = {myReadFile, myWriteFile, username: "abhishek"};