var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ievvmoil01",
  user: "OilTradeUser",
  password: "tRad$PfM",
  database: "oiltrade-QA"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "select * from ClientBanksAttachedToClients";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
