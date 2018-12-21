CREATE DATABASE FEC;

USE FEC;

CREATE TABLE product
(
  id int(11) NOT NULL
  AUTO_INCREMENT,
  productName varchar
  (255),
  primary key
  (id),
  foreign key
  (image_id) references images
  (id)
);

  CREATE TABLE images
  (
    id int(11) NOT NULL
    AUTO_INCREMENT,
  urlLink varchar
    (255),
  primary key
    (id)
) ;