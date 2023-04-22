-- create database avoTravelerDB;
use avoTravelerDB;

-- create table destination(
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- location VARCHAR(25),
-- img VARCHAR(45),
-- longitude decimal(10, 6),
-- latitude decimal(10, 6)
-- );

--  insert into destination (location, img, longitude,latitude) values
-- 	('Charlotte, USA','../../images/charlotteSkyline.png',-80.841141,35.223789),
--     ('London, UK','../../images/londonSkyline.png',-0.127758,51.507351),
--     ('San Juan, Puerto Rico','../../images/sanjuanSkyline.png',-66.105721,18.466333),
--     ('São Paulo, Brazil','../../images/saopauloSkyline.png',-46.625290,-23.533773);

ALTER USER 'chingvang'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON destination.* TO 'chingvang'@'localhost';