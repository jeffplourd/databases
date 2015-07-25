var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('you made this request, dude');
      models.message.get(function(results) {
        res.send(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages');
      // when a message comes in,
      // store the message in the messages table (username, message, roomname)
      models.messages.post(req.body);
      res.send("message sent"); 
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users are here using the GET function');
    },
    post: function (req, res) {
      console.log('users')
      res.send("users sent");  
    }
  }
};

