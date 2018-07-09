const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var app = express();

var mySqlConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "10K91a1208",
    database: "NodeDb"
});
mySqlConnect.connect();
var sql = "Select * from Test";

app.get('/routes', (req, res) => {
  mySqlConnect.query(sql, function (err, result) {
    if (err){
      console.error(err);
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});
module.exports = router;
