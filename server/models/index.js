var db = require('../db');




module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
   
    post: function (message) {      
       console.log("our message", message);
       // INSERT INTO messages (text, roomname) VALUES ('textvalue', 'roomname')
      db.query('insert into messages (text, roomname) values ?',[message.text, message.roomname], function(error, results){
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
      db.query('insert into users (username) values ?',[message.username], function(error, results){
        if(error) throw error;
        console.log('this user thing worked', results);
      });
    }
  }
};

