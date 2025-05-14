CREATE TABLE actors (
    id INT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL
);

INSERT INTO actors (id, firstname, lastname)
VALUES (2, 'my', 'name');

--1. Count how many actors are in the table.
select count(*) from actors

INSERT INTO actors (firstname, lastname)
VALUES ('', '');