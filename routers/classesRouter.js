const express = require('express')
const router = express.Router()

// router redirects traffic to corresponding function in the controller
class ClassesRouter{
  constructor(controller) {
    this.controller = controller
  }
  router() {
    // GET all classes
    router.get('/', this.controller.getAllClasses.bind(this.controller))

    // POST classes
    router.post('/post', this.controller.postClasses.bind(this.controller))

    // GET class cards
    router.get('/display', this.controller.displayClassCard.bind(this.controller))

     // GET single class card
    router.get('/getReservation/:id', this.controller.displaySingleReservation.bind(this.controller))
    
    // EDIT single reservation 
    router.post('/editReservation/:id', this.controller.editClass.bind(this.controller))


    return router;

  }
}

module.exports = ClassesRouter