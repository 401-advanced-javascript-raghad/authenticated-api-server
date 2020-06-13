# authenticated-api-server
Implement a fully functional, authenticated and authorized API Server using the latest coding techniques

Over the course of the previous 2 modules, you have separately created an auth-server and an api-server … In this lab, you will be integrating those 2 servers to create a single, authenticated API server.
API Routes must now be protected with the proper permissions based on user capability, using Bearer Authentication and an ACL
app.get(...) should require authentication only, no specific roles
app.post(...) should require the create capability
app.put(...) should require the update capability
app.patch(...) should require the update capability
app.delete(...) should require the delete capability
Clean and modularize Auth Middleware
Clean/Tighten the Auth Model
Stretch Goal
Turn authorization/authentication on or off using a variable in your .env file
This can allow us to run an API server that does or does not require authenticated users

### Author: Raghad Al-Quran

### Links and Resources
- [submission PR class-15](https://github.com/401-advanced-javascript-raghad/auth-server/pull/2)

### Modules
#### `Node.js` , `Postman` , `Swagger`

### Packages
#### `express` , `jest` , `supertest` , `base-64` ,mongoose`, `pcryptjs`

#### How to initialize/run your application
- signin : POST - http://localhost:3000/signin
- signup: POST - http://localhost:3000/signup


- add : POST - http://localhost:3000/add
- read: GET - http://localhost:3000/read
- change : PUT - http://localhost:3000/change
- patch : PATCH - http://localhost:3000/change
- delete : DELETE - http://localhost:3000/delete

#### Tests

- Test: `node index.js` or `nodemon` or `npm run start`

#### UML
![UML-Diagram]()




