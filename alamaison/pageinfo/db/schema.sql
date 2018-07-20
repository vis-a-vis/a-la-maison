DROP DATABASE IF EXISTS HousesList;
CREATE DATABASE HousesList;
USE HousesList;

-- create a table to store 
-- unique id, name, quantity fields

CREATE TABLE houses (
  id int NOT NULL AUTO_INCREMENT,
  categoryId int NOT NULL
  house_name varchar(100) NOT NULL,
  city varchar(100) NOT NULL,
  guessNum int NOT NULL, 
  bedroomNum int NOT NULL,
  bedNum int NOT NULL,
  bathNum int NOT NULL,
  description varchar(1000) NOT NULL,
  ReadMoreDescription varchar(6000) NOT NULL,
  HouseRules varchar(6000) NOT NULL,
  Cancellation varchar(1000) NOT NULL,
  ReadMoreCancellation varchar(1000) NOT NULL,
  Availability varchar(1000) NOT NULL,
  Accessibility varchar(100)

  PRIMARY KEY(id)
  FOREIGN KEY(categoryId) REFERENCES category(id)
)


