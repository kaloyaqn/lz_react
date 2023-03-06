import express from 'express';
import mysql from 'mysql';
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ttonevco_lz1kamdbsklad'
});

app.use(cors());

app.get("/", (req,res) => {
    res.json("Hello this is the backend");
})

app.get("/produkti", (req,res) => {
    const q = "SELECT * FROM produkti";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})


app.listen(8800, () => {
    console.log("Bakenda bachka!");
});

//https://youtu.be/fPuLnzSjPLE?t=986