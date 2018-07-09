var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var mysql = require('mysql');

var mySqlConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "10K91a1208",
  database: "NodeDb"
});
mySqlConnect.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 4600;
// const routes = require('./server/routes/routes');
// app.use(express.static(path.join(__dirname, 'dist/angular-node')));
// app.use('/routes', routes);

// middleware to use for all requests
router.use(function(req, res, next) {
  console.log('Something is happening.');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var sql = "Select * from Test";

router.route('/routes')
.get(function(req, res) {
  mySqlConnect.query(sql, function (err, result) {
    if (err){
      return res.json(err);
    } else {
      return res.json(result);
    }
  });
});

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/angular-node/index.html'));
// });
app.use('/api', router);
app.listen(port, (req, res) => {
  console.log(`Running on port ${port}`);
});
