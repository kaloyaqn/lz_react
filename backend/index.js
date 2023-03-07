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

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database with threadId ' + db.threadId);
});

app.use(cors());

// chupi app.use(express.json);

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

app.post("/produkti", (req,res) => {
    const q = "INSERT INTO produkti (`ime`,`firma`,`lice`,`broi`,`cena`) VALUES (?)";
    const values = [
        req.body.ime,
        req.body.firma,
        req.body.lice,
        req.body.broi,
        req.body.cena,
    ]
})


app.listen(8800, () => {
    console.log("Bakenda bachka!");
});

//https://youtu.be/fPuLnzSjPLE?t=986