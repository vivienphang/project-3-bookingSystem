  // make functions for routes here
// reference baseCtrl
const BaseCtrl = require('./baseCtrl')
// initialize class
class ClassesCtrl extends BaseCtrl {
  constructor(model, db) {
    super(model)
    this.db = db
  }
  async getAllClasses (req, res) {
    try {
      console.log('running classes\'s controller: getAllClasses')
      const classTypes = await this.db.classes.findAll()
      console.log('this is classTypes: ', classTypes)
      res.send(classTypes)
    } catch (err) {
      console.log('error in getAllClasses:', err)
    }
  }
  async postClasses (req, res) {
    try {
      console.log('running on classesCtrl:  /postClasses')
      const { instructors_id, classes_id, date, time, venue, price, comments } = req.body;
      await this.db.reservations.create({
        instructorsId: instructors_id,
        classesId: classes_id,
        date: date,
        time: time,
        venue: venue,
        price: price,
        comments: comments, 
      }, {
        returning: true
      })
      res.send({ success: true })

    } catch (err) {
      console.log('error in postClasses:', err)
    }
  }
  
  async displayClassCard (req, res) {
    try {
      console.log('running classes\'s controller: displayClassCard')
      const classCards = await this.db.reservations.findAll()
      const resArr = []
      for ( let i = 0; i < classCards.length; i += 1) {
        const classId = classCards[i].classesId;
        const instructorId = classCards[i].instructorsId;
        const cardClass = await this.db.classes.findByPk(classId);
        const cardInstructor = await this.db.instructors.findByPk(instructorId);
        let user = {
          FName: undefined,
          LName: undefined,
          mobile: undefined,
        };
        if (classCards[i].usersId !== null) {
          console.log('querying users')
          user = await this.db.users.findByPk(classCards[i].usersId)
        }
        // console.log(classCards[i]);
        // console.log(cardClass);
        // console.log(cardInstructor);
        // console.log(user)
        const resObj = {
          id: classCards[i].id,
          date: classCards[i].date,
          time: classCards[i].time,
          price: classCards[i].price,
          comments: classCards[i].comments,
          venue: classCards[i].venue,
          userFirstName: user.FName || undefined,
          userLastName: user.LName || undefined,
          userMobile: user.mobile || undefined,
          className: cardClass.name,
          classDescription: cardClass.description,
          instructorFirstName: cardInstructor.FName,
          instructorLastName: cardInstructor.LName,
          instructorName: `${cardInstructor.FName} ${cardInstructor.LName}`,
        }
        console.log('pushing...')
        resArr.push(resObj);
      };

      // console.log('<===== this is resArr =====>')
      // console.log(resArr)
      res.send(resArr)

    } catch (err) {
      console.log('error in displayClassCards: ', err)
    }
  }


  async editClass (req, res) {
  try {
    console.log('running on classesCtrl:  /editClasses')
    console.log('this is req.body: ', req.body)
    console.log('this is req.cookie:', req.cookies)
    const { address, comments } = req.body;
    const { users_id } = req.cookies;
    const { id } = req.params;
    console.log('this is req.params:', id)
    const userData = await this.db.users.findOne( { where: { id: users_id}})
    console.log('this is userData.id:', userData.id)
    console.log('about to run this.db.reservations')
    await this.db.reservations.update({
      venue: address,
      comments: comments,
      usersId: userData.id,
    }, { where: {
      id: id
    }}, {
      returning: true
    })
    res.send({success: true});
  } catch (err) {
    console.log('error in editClasses:', err)
  }
}

  async displaySingleReservation (req, res) {
    const { id } = req.params
    // new array containing reservation id, instructor and users
      try {
        console.log('running classes\'s controller: displaySingleReservation')
        console.log('this is this.db: ',this.db.reservations)
        // get single reservation 
        const result = await this.db.reservations.findOne({ where: {
          id: id
        }})
        const displayData = result
        const classDate = displayData.date
        const classTime = displayData.time
        const price = displayData.price
        const instructorId = displayData.instructorsId
        const classId = displayData.classesId
        // get single instructor
        const instructorData = await this.db.instructors.findByPk(instructorId)
        const instructorName = `${instructorData.FName} ${instructorData.LName}`
        // get single class
        const classData = await this.db.classes.findByPk(classId)
        const className = classData.name
        const classDesc = classData.description

        // group single reservation data 
        const newObj = {
          instructor: instructorName,
          class: className,
          classDescription: classDesc,
          date: classDate,
          time: classTime,
          price: price,
        }
        console.log('this is newObj: ', newObj)
        res.send(newObj)
    } catch (err) {
      console.log('error in displaySingleReservation: ', err)
    }
  }


};

module.exports = ClassesCtrl;