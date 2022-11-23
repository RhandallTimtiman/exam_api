# # UserManagement-NodeJS
A User Management System CRUD using Mysql and Express
 
# Setup

### Database Setup
```
- create a database named user_db
- open config file in config folder to check if details matches with database information
```

# Running the project

### Database Migration
```
- run npx/npm sequelize-cli db:migrate
- run npx/npm sequelize-cli db:seed:all
```

### Running the project
```
- Make Sure that nodemon is installed in your system by running npm i nodemon -g
- after installing run nodemon index.js
```

### Unit Test
```
- run npm/npx run db:create:test
- run npm test
```
