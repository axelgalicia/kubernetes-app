# kubernetes-app
A simple App which will be containerized using Docker and then deploy into Kubernetes


# Requirements

    - Docker installed
    - Having a MySQL database started in another container
    
# MySQL container

``` sh
docker run --name mysql-test -d -e MYSQL_ROOT_PASSWORD=temporal1 -v mysql-data:/var/lib/mysql mysql:5.7
```
# Create user and database

db: summit
user: user_test
pass: user_pass

# Database table

``` sql
CREATE DATABASE summit;

USE summit;

CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `yearsOfExperience` int(11) NOT NULL DEFAULT '0',
  `onContract` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


CREATE USER 'user_test'@'%';
ALTER USER 'user_test'@'%'
IDENTIFIED BY 'user_pass' ;
GRANT Delete ON summit.* TO 'user_test'@'%';
GRANT Insert ON summit.* TO 'user_test'@'%';
GRANT Select ON summit.* TO 'user_test'@'%';
GRANT Update ON summit.* TO 'user_test'@'%';
FLUSH PRIVILEGES;

```


# Start Container

``` sql
docker run -p 3000:3000 --link mysql-test:mysql-test -e MYSQL_USER=user_test -e MYSQL_PASSWORD=user_pass -e MYSQL_DATABASE=summit arknot/summit-kubernetes:0.0.20
```

#Starting via Docker Stack

``` yml

version: "3"
services:
  mysql-kuber:
    image: mysql:5.7
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: "0.1"
          memory: 100M
      restart_policy:
        condition: none
    ports:
      - "3306:3306"
    networks:
      - users-network
    environment:
      - MYSQL_ROOT_PASSWORD=temporal1
    volumes:
      - mysql-data:/var/lib/mysql
  kubernetes-summit-app:
    image: arknot/summit-kubernetes:0.0.20
    deploy:
      replicas: 10
      resources:
        limits:
          cpus: "0.1"
          memory: 50M
      restart_policy:
        condition: on-failure
    ports:
      - "3000:3000"
    networks:
      - users-network
    environment:
      - MYSQL_USER=user_test
      - MYSQL_PASSWORD=user_pass
      - MYSQL_DATABASE=summit
      - MYSQL_TEST_PORT_3306_TCP_ADDR=mysql-kuber
      - MYSQL_TEST_PORT_3306_TCP_PORT=3306

volumes:
  mysql-data:
    external:
      name: mysql-data
networks:
  users-network:

  ```

# REST API

**GET** http://localhost:3000/  -- shows container id 

**GET** http://localhost:3000/user  -- list of users

**GET** http://localhost:3000/user/:username  -- shows only username
    [username]: The username for the user

**POST** http://localhost:3000/user  -- Creates a new user
 body:
   ``` json 
    {
            "username": "romina",
            "name": "Romina Galicia",
            "role": "Business Analyst Senior",
            "yearsOfExperience": 10,
            "onContract": false
        }
```

**PUT** http://localhost:3000/user/:username  -- Updates a user
 body:
   ``` json 
    {
            "name": "Romina Galicia",
            "role": "Business Analyst Senior",
            "yearsOfExperience": 10,
            "onContract": false
        }
```

**DELETE** http://localhost:3000/user/:username  -- Deletes a user

@Author:  by Axel Galicia

Identify spaces from tabs yaml in vi

```sh

:syntax on
:set syntax=whitespace

```
