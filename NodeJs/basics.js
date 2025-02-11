
// const math = require("./math")
const {add,sub} = require("./math")
console.log(add(2,3))

const fs = require("fs")
fs.readFile("./text.txt",'utf-8',(err,data)=>{
    if (err) throw err
    console.log(data)
})
