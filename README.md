# CellarDex

## Description 

_Duration: 3 Week Sprint_

One Paragraph of project description goes here

## Screen Shots



### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [AWS](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

## Installation

1. Create a database named `cellar_dex`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. We recommend using Postico to run those queries as that was used to create the queries
3. Create an AWS S3 bucket and configure your .ENV with bucket name, region, access key, and secret key
4. Open up your editor of choice and run an `npm install`
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab for you!

## Built With

The front end was built with React & Material UI. The server was built on Node & Express. The database was built with PostgreSQL & AWS.

The following packages were utilized: 

* Axios
* Bcrypt
* Passport
* Redux
* Router-dom
* React-s3
* Redux Saga

## Acknowledgement

Many people helped with this project along the way, but special attention is deserved to the following.

[Prime Digital Academy](www.primeacademy.io), with special thanks to Mary Mosman, who equipped and helped me to make this application a reality.

[Hailey Haferman](https://www.haileyhaferman.com/), who designed the CellarDex logo and provided many valuable design insights along the way.

[Joel Eckerson](https://github.com/JoelEckerson), for countless rubber duck sessions.