const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/projects",(req,res)=>{

    db.query(
    "SELECT * FROM projects",
    (err,result)=>{

        if(err){
            res.status(500).json(err);
        }else{
            res.json(result);
        }

    });

});

app.listen(5000,()=>{
    console.log("Server running");
});

app.post("/contact",(req,res)=>{

const {name,email,message}=req.body;

db.query(
"INSERT INTO contacts(name,email,message) VALUES(?,?,?)",
[name,email,message],
(err,result)=>{

if(err){
res.status(500).json(err);
}
else{
res.json({
message:"Saved"
});
}

});
});