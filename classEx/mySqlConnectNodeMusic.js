var mysql = require("mysql");

var connection = mysql.createConnection({ 
host: "localhost",
port: 3306,
user: "root",
password: "root",
database: "musicDB"
});

function createProduct(){
    console.log("inserting new artist");
    var query = connection.query("INSERT INTO musicians SET ?",{
        title: "Break Stuff",
        artist: "Limp Bizkit",
        genre: "Rap Rock"
    })
}

connection.connect(function(err){
    
    ////// Confirms you are properly connected to database
    if (err) throw err;
    console.log('connection as id ' + connection.threadId)
    createProduct();
    ////////Receive response from Database..... Can add additional queries using WHERE... then more with AND
    connection.query("SELECT * FROM musicians WHERE genre=? AND artist=?", ["Pop", "Britney Spears"], function(error, response){
        if (error) throw error;

        ///////for loop to access all of the objects within the array
        for (var i = 0; i < response.length; i++){
        console.log(`ID: ${response[i].id} Title: ${response[i].title}`);
        }


        //////now with forEach
        response.forEach(function(element, index){
            console.log(`Artist: ${element.artist}`)
            console.log(index)
        })
    });
    
    
    
    connection.end();
});

