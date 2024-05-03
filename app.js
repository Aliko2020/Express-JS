const express = require("express")
const path = require('path');

const app = express()

const Port = process.env.Port || 8080

app.get("/",(req,res)=>{
    res.send("HELLO WORLD")
})

let publicP = path.join(__dirname, "/public");

app.use("/public",express.static(publicP))



app.get('/about',(req,res)=>{
    let path = __dirname + "/pages/index.html"
    res.sendFile(path)
})

app.listen(Port,()=>{
    console.log(`App listening on port: ${Port}`);
})