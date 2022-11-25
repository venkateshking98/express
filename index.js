const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const students=require("./data.js")
const emp={id:1,name:"king",position:"queen"}

app.use(cors())
app.get("/",(req,res)=>{
	res.send("I am Negan")
})
app.get("/user",(req,res)=>{
	res.send("Who are you")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})

app.listen(port,()=>console.log("Server is started"))