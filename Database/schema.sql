CREATE DATABASE FEC;

USE FEC;

CREATE TABLE product
(
  id int(11) NOT NULL
  AUTO_INCREMENT,
  productName varchar
  (255),
  tid int
  (11) not null UNIQUE,
  primary key
  (id)
);

  CREATE TABLE image
  (
    id int(11) NOT NULL
    AUTO_INCREMENT,
    urlLink varchar
    (255),
    product_id int
    (11) NOT NULL REFERENCES product
    (id),
    primary key
    (id)
);