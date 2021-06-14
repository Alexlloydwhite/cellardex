# CellarDex

## Description 

_Duration: 3 Week Sprint_

CellarDex is a responsive web application, it is designed to be used on either a desktop or mobile phone. This application recommends food and wine pairings and allows users saved pairings and provide personal insights to each recomendation.

The first week (10 hours) was spent scoping and creating wireframes, ERD, and schedule. [Scope Document](https://docs.google.com/document/d/1IAG9kzpyiUrBTeM6Jlw4kzjVstKT_DsWuwPXNqJ6K4k/edit?usp=sharing)

The next 2 weeks were entirely devoted to coding, testing, bug fixing, and implementing the numerous features.

## Screen Shots

![Landing Page](https://user-images.githubusercontent.com/77769682/121894730-15305c00-cce5-11eb-8521-89f228dcfe2e.png)
![Search](https://user-images.githubusercontent.com/77769682/121896481-f4690600-cce6-11eb-8ecb-af83cbf5613a.png)
![Mobile View Form](https://user-images.githubusercontent.com/77769682/121894847-3b55fc00-cce5-11eb-8c16-29b235a0759e.png)
![Profile](https://user-images.githubusercontent.com/77769682/121896567-0e0a4d80-cce7-11eb-80ca-89ec49dc4782.png)

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

Many people helped with this project, but special attention is deserved to the following.

[Prime Digital Academy](www.primeacademy.io), with special thanks to Mary Mosman, who equipped and helped me to make this application a reality.

[Hailey Haferman](https://www.haileyhaferman.com/), who designed the CellarDex logo and provided many valuable design insights along the way.

[Joel Eckerson](https://github.com/JoelEckerson), for countless rubber duck sessions.
