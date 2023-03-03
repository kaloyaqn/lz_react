import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
    host: '79.98.104.3',
    user: 'ttonevco_lz1kamuser',
    password: 'lodkazabokluk11!',
    database: 'ttonevco_lz1kamdbsklad'
});


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

app.post('/produkti', (req,rs) => {
    const q = "INSERT INTO produkti (`ime`, `firma`) VALUES (?)"
    const values = ["tosho kukata", "kukata OOD"]

    db.query(q, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.listen(8800, () => {
    console.log("Bakenda bachka!");
});

//https://youtu.be/fPuLnzSjPLE?t=986