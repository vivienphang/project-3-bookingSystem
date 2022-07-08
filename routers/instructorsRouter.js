// individual routes for each table
// define URL paths
const express = require('express')
const router = express.Router()

// router redirects traffic to corressponding function in the controller
class InstructorsRouter {
  constructor(controller) {
    this.controller = controller
  }
  router() {
    // GET instructor name
    router.get('/', this.controller.displayInstructor.bind(this.controller))



    return router;
  }
};

module.exports = InstructorsRouter;