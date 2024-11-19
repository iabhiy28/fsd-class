// const http = require('http');
// const readline = require('readline');
// const port = 3000;

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter Language: ', (lang) => {
//     console.log(calling(lang));
//     rl.close();
// });

// function calling(lang) {
//     let data;
//     if (lang === 'C') {
//         function cCompiler() {
//             return "You have selected the C Compiler";
//         }
//         data = cCompiler();
//     } else if (lang === 'java') {
//         function jCompiler() {
//             return "You have selected the Java Compiler";
//         }
//         data = jCompiler();
//     }
//     return data;
// }

// console.log(calling(java)); // Output: '135'

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, 'localhost', () => {
//     console.log(`Listening on Port ${port}`);
// // });

// div = document.getElementsByClassName('parent')[0];

// div.innerHTML = "<h2 style=color:red>ABES ENGINNEERING COLLEGE</h2>";

// a = document.createElement('h1')
// a.innerHTML = "this is generated"
// a.style.backgroundColor = 'yellow'
// console.log(a)

// div.appendChild(a)

// let b = document.createElement('img')

// b.src='abes.jpg'

// b.setAttribute("height","200")
// b.setAttribute("width","200")


// div.appendChild(b)
const btn = document.getElementById("btn");
function getData(){
    console.log("GetData Called");
    disp.innerHTML = "<h2>Dynamically crated the heading</h2>"
}
btn.addEventListener("click" ,getData);

const disp = document.getElementById("ancde");



