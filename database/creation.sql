create database avoTravelerDB;
use avoTravelerDB;

create table destination(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(25),
discription VARCHAR(100),
img VARCHAR(25),
longitude decimal(4, 6),
latitude decimal(4, 6)
);

