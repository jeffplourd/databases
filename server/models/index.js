var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'select * from messages';
      // 
      db.query(queryString, function(error, results){
        callback(results);
      });
    }, // a function which produces all the messages
   
    post: function (message) {      
      // console.log("our message", message);
      // INSERT INTO messages (text, roomname) VALUES ('textvalue', 'roomname')
      var queryString = 'insert into messages (text, roomname) values ("' + message.text + '", "' + message.roomname + '")';
      // console.log('THIS IS MY Q STR: ' + queryString);
      db.query(queryString, function(error, results){
        if(error) throw error;
        // console.log('this worked', results);
      });

      var queryStringUser = 'insert into users (username) values ("' + message.username + '")';
      db.query(queryStringUser, function(error, results) {
        if(error) throw error;
        console.log('added user');
      });
     // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
    },
    post: function (message) {
     // console.log("our users", message);
      var queryString = 'select username from users where username=' + message.username + '"';
      db.query(queryString, function(error, results){
        if(error) throw error;
      });

      db.query('insert into users (username) values (?)', function(error, results){
        if(error) throw error;
        // console.log('this user thing worked', results);
      });
    }
  }
};

