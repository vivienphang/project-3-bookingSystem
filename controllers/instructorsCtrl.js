// make functions for routes here
// reference baseCtrl
const BaseCtrl = require('./baseCtrl')
// initialize class
class InstructorsCtrl extends BaseCtrl {
  constructor(model, db) {
    super(model)
    this.db = db
  }
  // GET: retrieve instructor name
  async displayInstructor (req, res) {
    try {
      console.log('running instructor\'s controller: displayInstructor')
      const { instructor_id } = req.cookies
      const instructorId = await this.db.instructors.findOne( { where: { id: instructor_id}, attributes: ['id', 'FName', 'LName']})
      console.log('instructor name: ', instructorId)
      res.send(instructorId)
    } catch (err) {
      console.log('error in displayInstructor:', err)
    }
  }
  
};

module.exports = InstructorsCtrl;