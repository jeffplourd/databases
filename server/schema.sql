CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  user_id int NOT NULL auto_increment,
  username varchar(15),
  PRIMARY KEY(user_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id int NOT NULL auto_increment,
  text varchar(140),
  roomname varchar(10),
  user_id int,
  PRIMARY KEY(message_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);




-- SELECT "list-of-columns"

-- FROM table1,table2

-- WHERE "search-condition(s)"


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

