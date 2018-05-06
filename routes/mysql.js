var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "ediehl1",
  password: "ediehl1@421"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

/* GET customer listing. */
router.get('/fp1_purchase', function(req, res, next) {
	con.query("SELECT * FROM ediehl1.fp1_purchase", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post customer data. */
router.post('/fp1_purchase', function(req, res, next) {
  var sql = con.query("INSERT INTO ediehl1.fp1_purchase set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    // res.send(result);
    res.json({"status": "Order Placed"}); // your own
  });
});


module.exports = router;

