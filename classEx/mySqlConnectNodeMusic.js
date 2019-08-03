var mysql = require("mysql");

var connection = mysql.createConnection({ 
host: "localhost",
port: 3306,
user: "root",
password: "root",
database: "musicDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connection as id ' + connection.threadId)
    connection.end();
});