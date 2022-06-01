# database-api-nodejs-express-mysql
## _NodeJs-Express-MySql-Cors-CryptoJs_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

this API still in development stage, I do experiment using database in my local machine
the database named `bangkit` with articles table, articles table have 7 column:
| article_id | article |  mksa  | score1 | score2 | score3 | created_at | updated_at  |
| ---------- | ------- |  ----  | ------ | ------ | ------ | ---------- | ----------- |
| -- auto -- | ------- |  ----  | ------ | ------ | ------ | -- auto -- | -- auto -- |
to make articles table use this 
```sh
CREATE TABLE articles (
    articleid INT not null auto_increment PRIMARY KEY,
    article VARCHAR(5000),
    mksa VARCHAR(200),
    score1 INT not null,
    score2 INT not null,
    score3 INT not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
 ```
 use this to install the packages
 ```sh
 npm install express mysql cors
 ```
 this is opotional
 ```s
 npm i crypto-js
 ```
 this API takes input and output in Json format, 
 This API able to do GET, POST, PUT and DELETE request
 
just tell me if there's any problem or something thanks
