const { createConnection } = require("mysql2")

express = require("express")
mysql = require("mysql2")
bodyparser = require("body-parser")

app = express()
app.use(express.json())
const port = 3000

const db = createConnection({
    host:"localhost",
    user:"root",
    password:"2302",
    database:"test"
})

db.connect((err,result)=>{
    if (err){
        console.log("error")
    }

    else{
        console.log("success db")
    }
})

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get('/info',(req,res)=>{
    const query = "select * from test"
    db.query(query,(err,resu)=>{
        if (err){
            console.log("err")
        }
        else{
            console.log("suceesss query")
            res.json(resu)
        }
    })
})

app.get('/info/:id',(req,res)=>{
    const {id} = req.params
    const query = "select * from test where id=?"
    db.query(query,[id],(err,result)=>{
        if(err){
            return res.status(500).json(result)
        }
        res.json(result)
    })
})

app.post('/post',(req,res)=>{
    const {id,name,age} = req.body;
    const query = "insert into test (id,name,age) values (?,?,?)"
    db.query(query,[id,name,age],(err,result)=>{
        if(err){
            return result.status(500).json({
                error:'db error',details:err.message
            })
        }
        res.json(result)
    })
})

app.put('/put/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const query = "update test set name=? where id=?"
    const values = [name,id]

    db.query(query,values,(err,result)=>{
        if(err){
            return res.status(500).json({
               error:'update error',details:err.message
            })
        }
        res.status(200).json(result)
    })
})

app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params
    const query = "delete from test where id=?"
    db.query(query,[id],(err,result)=>{
        if(err){
            return res.err()
        }
        res.send("deleted")
    })
})


app.listen(port,()=>{
    console.log("server succ")
})