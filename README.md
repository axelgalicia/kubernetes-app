# kubernetes-app
A simple App which will be containerized using Docker and then deploy into Kubernetes


#Requirements

Having a MySQL database started in another container

#MySQL container
docker run --name mysql-test -d -e MYSQL_ROOT_PASSWORD=temporal1 -v mysql-data:/var/lib/mysql mysql:5.7

#Create user and database


db: summit
user: user_test
pass: user_pass



CREATE DATABASE summit;

CREATE USER 'user_test'@'%';
ALTER USER 'user_test'@'%'
IDENTIFIED BY 'user_pass' ;
GRANT Delete ON summit.* TO 'user_test'@'%';
GRANT Insert ON summit.* TO 'user_test'@'%';
GRANT Select ON summit.* TO 'user_test'@'%';
GRANT Update ON summit.* TO 'user_test'@'%';
FLUSH PRIVILEGES;


#Database table
CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `yearsOfExperience` int(11) NOT NULL DEFAULT '0',
  `onContract` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

# Start Container
docker run -p 3000:3000 --link mysql-test:mysql-test -e MYSQL_USER=user_test -e MYSQL_PASSWORD=user_pass -e MYSQL_DATABASE=summit arknot/summit-kubernetes:0.0.20

