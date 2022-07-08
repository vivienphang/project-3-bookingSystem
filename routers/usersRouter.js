// individual routes for each table
// define URL paths
const express = require('express')
const router = express.Router()

// router redirects traffic to corressponding function in the controller
class UsersRouter {
  constructor(controller) {
    this.controller = controller
  }
  router() {
    // POST sign up form
    router.post('/postClientRegister', this.controller.postClientRegister.bind(this.controller))
    router.post('/postInstructorRegister', this.controller.postInstructorRegister.bind(this.controller))
    // POST login form
    router.post('/postClientLogin', this.controller.postClientLogin.bind(this.controller))
    router.post('/postInstructorLogin', this.controller.postInstructorLogin.bind(this.controller))
    router.get('/getUsersLoginId', this.controller.getUsersLoginId.bind(this.controller))

    // POST instructor's sign up form

    return router;
  }
}
module.exports = UsersRouter