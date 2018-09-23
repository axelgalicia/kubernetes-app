# kubernetes-app
A simple App which will be containerized using Docker and then deploy into Kubernetes

docker run -p 3000:3000 --link mysql-test:mysql-test -e MYSQL_USER=user_test -e MYSQL_PASSWORD=user_pass -e MYSQL_DATABASE=summit arknot/summit-kubernetes:0.0.14

#Database table
CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `yearsOfExperience` int(11) NOT NULL DEFAULT '0',
  `onContract` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8