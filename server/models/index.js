var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'select * from messages';
      db.query(queryString, function(error, results){
        callback(results);
      });
    }, // a function which produces all the messages
   
    post: function (message) {      
      console.log("our message", message);
      // INSERT INTO messages (text, roomname) VALUES ('textvalue', 'roomname')
      var queryString = 'insert into messages (text, roomname) values ("' + message.message + '", "' + message.roomname + '")';
      console.log('THIS IS MY Q STR: ' + queryString);
      db.query(queryString, function(error, results){
        if(error) throw error;
        console.log('this worked', results);
      });
     // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (message) {
     console.log("our users", message);
      db.query('insert into users (username) values (?)',[message.username], function(error, results){
        if(error) throw error;
        console.log('this user thing worked', results);
      });
    }
  }
};

