CREATE DATABASE MySQL_GQ;
USE  MySQL_GQ;
SET SQL_SAFE_UPDATES=0;

-- very easy 
CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(20), 
    model VARCHAR(20), 
    year YEAR
);
INSERT INTO cars (make, model, year)
VALUES ('Toyota', 'RAV4', 2019), ('Subaru', 'Impreza', 2020);
INSERT INTO cars (make, model, year)
VALUES ('Ford', 'Explorer', 2019), ('Toyota', 'Corolla', 2020), ('Ford', 'Focus', 2019);
SELECT * FROM cars;
DROP TABLE cars;

-- easy 
CREATE TABLE books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    publish_date year, 
    author_firstname VARCHAR(255),
    author_lastname VARCHAR(255)
);
INSERT INTO books (title, publish_date, author_firstname, author_lastname)
VALUES ('The Lord of the Rings', 1954, 'J.R.R', 'Tolkien'), ('The Little Prince', 1943, 'Antoine', 'de Saint-Exupery'), ('The Alchemist', 1988, 'Paulo', 'Coelho'), ('The Hobbit', 1937, 'J.R.R', 'Tolkien'), ('Harry Potter and the Philosopher\'s Stone', 1997, 'J.K', 'Rowling');
DELETE FROM books ORDER BY publish_date ASC LIMIT 1;
SELECT COUNT(1) FROM books;
SELECT * FROM books;
DROP TABLE books;

-- medium 
CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating DECIMAL(2,1)
);
INSERT INTO movies (title, release_date, rating)
VALUES ('The Wrong Missy', 2020, 5.7), ('Scoob!', 2020, 5.8), ('Joker', 2019, 8.5), ('Capon', 2020, 4.8), ('Extraction', 2020, 6.8), ('Once Upon a Time... in Hollywood', 2019, 7.7), ('Parasite', 2019, 8.6), ('365 Days', 2020, 3.6), ('The Gentlemen', 2019, 7.9), ('Snowpiercer', 2019, 7.9);
SELECT * FROM movies 
WHERE title LIKE '%s%' ORDER BY release_date ASC;
DROP TABLE movies;

-- hard
CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating DECIMAL(2,1)
);
INSERT INTO movies (title, release_date, rating)
VALUES ('The Wrong Missy', 2020, 5.7), ('Scoob!', 2020, 5.8), ('Joker', 2019, 8.5), ('Capon', 2020, 4.8), ('Extraction', 2020, 6.8), ('Once Upon a Time... in Hollywood', 2019, 7.7), ('Parasite', 2019, 8.6), ('365 Days', 2020, 3.6), ('The Gentlemen', 2019, 7.9), ('Snowpiercer', 2019, 7.9);
ALTER TABLE movies ADD COLUMN director_first VARCHAR(255);
ALTER TABLE movies ADD COLUMN director_last VARCHAR(255);
UPDATE movies 
	SET director_first = 'Tyler', director_last = 'Spindel'
	WHERE title = 'The Wrong Missy';
UPDATE movies 
	SET director_first = 'Tony', director_last = 'Servon'
	WHERE title = 'Scoob!';
UPDATE movies 
	SET director_first = 'Todd', director_last = 'Philips'
	WHERE title = 'Joker';
UPDATE movies 
	SET director_first = 'Josh', director_last = 'Trank'
	WHERE title = 'Capon';
UPDATE movies 
	SET director_first = 'Sam', director_last = 'Hargrave'
	WHERE title = 'Extraction';
UPDATE movies 
	SET director_first = 'Quentin', director_last = 'Tarantino'
	WHERE title = 'Once Upon a Time... in Hollywood';
UPDATE movies 
	SET director_first = 'Boog', director_last = 'Ho'
	WHERE title = 'Parasite';
UPDATE movies 
	SET director_first = 'Barbara', director_last = 'Bialowas'
	WHERE title = '365 Days';
UPDATE movies 
	SET director_first = 'Guy', director_last = 'Ritchie'
	WHERE title = 'The Gentlemen';
UPDATE movies 
	SET director_first = 'Bong', director_last = 'Ho'
	WHERE title = 'Snowpiercer';

ALTER TABLE movies ADD COLUMN fullname VARCHAR(50);
UPDATE movies SET fullname = CONCAT(director_first, ' ', director_last);
SELECT * FROM movies ORDER BY fullname;
DELETE FROM movies WHERE REGEXP_LIKE(director_last, '[r-z]$');
SELECT * FROM movies ORDER BY fullname LIMIT 3;
SELECT * FROM movies;
DROP TABLE movies;

-- very hard
CREATE TABLE cars (
	id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(20), 
    model VARCHAR(20), 
    year YEAR
);
INSERT INTO cars (make, model, year)
VALUES ('Toyota', 'RAV4', 2019), ('Subaru', 'Impreza', 2020), ('Ford', 'Explorer', 2019);
ALTER TABLE cars ADD COLUMN prices INT;
ALTER TABLE cars ADD COLUMN colors VARCHAR(255);
UPDATE cars SET prices=25850,  colors='Black, Light Gray, Nutmeg, Mocha' WHERE make = 'Toyota';
UPDATE cars SET prices=18695,  colors='Crystal Black Silica, Crystal White Pearl, Dark Gray Metallic' WHERE make = 'Subaru';
UPDATE cars SET prices=36675,  colors='Agate Black Metallic, Blue Metallic, Burgundy Velvet Metallic' WHERE make = 'Ford';
ALTER TABLE cars ADD COLUMN makemodel VARCHAR(50);
UPDATE cars SET makemodel = CONCAT(make, ' ', model);
SELECT make, COUNT(1) FROM cars GROUP BY make; -- works but just selects
SELECT * FROM cars;
DROP TABLE cars;

-- Utility, not part of the Guided Inquiry 
DROP TABLE cars;
DESCRIBE movies;
SELECT * FROM movies;
DROP DATABASE MySQL_GQ;

