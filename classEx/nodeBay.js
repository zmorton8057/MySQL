var mysql = require("mysql");
var inquirer = require("inquirer");

var prompt = inquirer.createPromptModule();
 
prompt(questions).then(/* ... */);

.prompt([
    /* Pass your questions in here */
    
    questions = [
    Confirm(name='POST', message="Post on an Item"),
    Confirm(name='BID', message="Bid on an Item")
]






  ])
  .then(answers => {





    // Use user feedback for... whatever!!
  });



var connection = mysql.createConnection({ 
host: "localhost",
port: 3306,
user: "root",
password: "root",
database: "nodeBayDB"
});



connection.connect(function(err){
    
    ////// Confirms you are properly connected to database
    if (err) throw err;
    console.log('connection as id ' + connection.threadId)
   
    ////////Receive response from Database..... Can add additional queries using WHERE... then more with AND
    connection.query("SELECT * FROM auctions WHERE category=?", ["Baseball Cards"], function(error, response){
        if (error) throw error;

        ///////for loop to access all of the objects within the array
        // for (var i = 0; i < response.length; i++){
        // console.log(`Response: ${response[i]}`);
        // }
        console.log(response)

        // //////now with forEach
        // response.forEach(function(element, index){
        //     console.log(`Artist: ${element.artist}`)
        //     console.log(index)
        // })

    });
    
    
    
    connection.end();
});