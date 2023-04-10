const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Sep@2018",
  database: "nuvanco",
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection created with Mysql successfully");
  }
});

connection.query(
  "SELECT * FROM basic_details",
  function (error, results, fields) {
    if (error) throw error;

    results.forEach((result) => {
      //console.log(result);
    });
  }
);

module.exports = connection;
