const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: "password",
    database: 'avoTravelerDB'
});

db.connect(err => {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log("Connected to MySQL database")
});

app.get("/destinations", (req, res) => {
    const q = "SELECT * FROM destination";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/users", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post("/users", (req, res) => {
    const q = "INSERT INTO products(`roles`, `userName`, `email`, `passwords`) VALUES (?)";

    const values = [
        req.body.roles = "User",
        req.body.userName,
        req.body.email,
        req.body.passwords,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend. on port 8800");
});


