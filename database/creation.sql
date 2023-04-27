-- create database avoTravelerDB;
use avoTravelerDB;

-- create table destination(
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- location VARCHAR(25),
-- img VARCHAR(60),
-- pathing varchar(45),
-- longitude decimal(10, 6),
-- latitude decimal(10, 6)
-- );

--  insert into destination (location, img, pathing, longitude, latitude) values
-- 	('Charlotte, USA','./images-public/charlotteSkyline.png',"/destinations/charlotte",-80.841141,35.223789),
--     ('London, UK','./images-public/londonSkyline.png',"/destinations/london",-0.127758,51.507351),
--     ('San Juan, Puerto Rico','./images-public/sanjuanSkyline.png',"/destinations/puerto-rico",-66.105721,18.466333),
--     ('São Paulo, Brazil','./images-public/saopauloSkyline.png',"/destinations/brazil",-46.625290,-23.533773);



-- CREATE TABLE users (
-- 	id				INT		AUTO_INCREMENT		PRIMARY KEY,
--     roles			VARCHAR(10),
-- 	userNames		VARCHAR(40),
--     email			VARCHAR(40)		UNIQUE KEY,
--     passwords		VARCHAR(16)
-- );


-- INSERT INTO users (roles, userNames, email, passwords) 
-- VALUES
-- ("Admin", "Junior Leon", "jleon12@r2hstudent.org", "admin321"),
-- ("Admin", "Ching Vang", "chingvang12@r2hstudent.org", "adminadmin456"),
-- ("Admin", "Diana Capellan", "dcapellan12@r2hstudent.org", "AvoTrav$43"),
-- ("Admin", "Joseph Vang", "jvang12@r2hstudent.org", "Honeybacon121");

	INSERT INTO users (roles, userNames, email, passwords)
    VALUES
    -- ("User", "John Doe", "johnD@gmail.com", "password123"),
    ("User", "Jimmy Jons", "jimmyJ@gmail.com", "password123");
    

select * from users;

-- ALTER USER 'chingvang'@'localhost' IDENTIFIED BY 'password';
-- GRANT ALL PRIVILEGES ON destination.* TO 'chingvang'@'localhost';

ALTER USER 'juniorleon'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON destination.* TO 'juniorleon'@'localhost';