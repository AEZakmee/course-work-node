## Requirments

System for students

Generate a module named Students for the system of students. Create controller named Students that will handle individual endpoints. The student must have properties: id, name, status, GPA(Grade Point Average), major. Into the controller create four different methods which are:

getAllStudentsByGPA() - Method: GET, Used to fetch the list of all students with GPA more than 5.50.

getStudent() - Method: GET, Used to retrieve the details of a particular student by passing the studentID as a parameter.

addStudent() - Method: POST, Used to create and post a new student to the existing student list.

deleteStudent() - Method: DELETE, Used to delete a student by passing the studentID as a query parameter.

The StudentsController must use a StudentsService that is responsible for storing and retrieving data.

Use sqllite or other relational database for backend

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
