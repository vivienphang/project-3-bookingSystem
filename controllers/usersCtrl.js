// make functions for routes here
// reference baseCtrl
const BaseCtrl = require('./baseCtrl')
const jsSHA = require('jsSHA')
const e = require('express')
// initialize class
class UsersCtrl extends BaseCtrl {
  constructor(model, db) {
    super(model)
    this.db = db
  }
  // ----- Registration -----
  // POST: sign up function
  async postClientRegister (req, res) {
    try {
      console.log('running on usersCtrl: /postClientRegister')
      const {FName, LName, username, email, password, address, mobile} = req.body;
      console.log('First name: ', FName, 'Last name: ', LName)
      // hash password
      const shaObj = new jsSHA('SHA-512', 'TEXT', {encoding: 'UTF8'} );
      // input password from request to the SHA object
      shaObj.update(password);
      // get the hashed password as output from SHA object
      const hashedPassword = shaObj.getHash('HEX');
      // input data into our DB
      await this.model.create({
        FName: FName,
        LName: LName,
        username: username,
        email: email,
        password: hashedPassword,
        address: address,
        mobile: mobile,
      }, {
        returning: true
      })
    } catch (err) { console.log('error in postClientRegister: ', err) }
  };

  async postInstructorRegister (req, res) {
    try {
      console.log('running on usersCtrl: /register/postInstructorRegister')
      console.log('this is req.body: ', req.body)
      const {FName, LName, email, password, mobile} = req.body;
      // hash password
      const shaObj = new jsSHA('SHA-512', 'TEXT', {encoding: 'UTF8'} );
      // input password from request to the SHA object
      shaObj.update(password);
      // get the hashed password as output from SHA object
      const hashedPassword = shaObj.getHash('HEX');
      // input data into our DB
   
      await this.db.instructors.create({
        FName: FName,
        LName: LName,
        email: email,
        password: hashedPassword,
        mobile: mobile,
      }, {
        returning: true
      })
    } catch (err) { console.log('Error in post instructor register', err)}
  }

  // POST: login function
  async postClientLogin (req, res) {
    try {
      console.log('running on post client login!')
      const { email, password } = req.body;
      const userData = await this.db.users.findOne( { where: { email: email}})
      console.log(userData)
      if (userData === null) {
        res.status(403).send('You have an incorrect email.')
        return;
      }
      // check if email exists
      if (userData.email !== email) {
        res.status(403).send('You do not have an account. Please register.')
        return;
      }
      // get user data input
      const userId = userData.id
      const username = userData.username
      //initialise shaObj
      const shaObj = new jsSHA('SHA-512', 'TEXT', {encoding: 'UTF8'});
      // input the password from the request to shaObj
      shaObj.update(req.body.password);
      // hash the password we have gotten
      const inputPassword = shaObj.getHash('HEX');

      // check input password against DB password
      if (userData.password !== inputPassword) {
        // there is an error in the login password
        res.status(403).send('Oh snap! Password is incorrect. Please try again.');
        return;
      }
      res.cookie('loggedIn', true);
      res.cookie("users_id", userId)
      res.cookie("users_name", username)
      // // redirect to dashboard
      res.render('dashboard')
      console.log('redirect works')
    } 
    catch (err) {console.log('error in postClientLogin: ', err)}
  };

  async postInstructorLogin (req, res) {
    try {
      console.log('running on post instructor login!')
      const { email, password } = req.body;
      const userData = await this.db.instructors.findOne( { where: { email: email}})
      if (userData === null) {
        res.status(403).send('You have an incorrect email.')
        return;
      }
      // check if email exists
      if (userData.email !== email) {
        res.status(403).send('You do not have an account. Please register.')
        return;
      }
      // get user data input
      const instructorId = userData.id
      const instructorName = userData.username
      //initialise shaObj
      const shaObj = new jsSHA('SHA-512', 'TEXT', {encoding: 'UTF8'});
      // input the password from the request to shaObj
      shaObj.update(req.body.password);
      // hash the password we have gotten
      const inputPassword = shaObj.getHash('HEX');

      // check input password against DB password
      if (userData.password !== inputPassword) {
        // there is an error in the login password
        res.status(403).send('Oh snap! Password is incorrect. Please try again.');
        return;
      }
      res.cookie('loggedIn', true);
      res.cookie("instructor_id", instructorId)
      res.cookie("instructor_name", instructorName)
      // redirect to dashboard
      res.render('dashboard-inst')
    } 
    catch (err) {console.log('error in postInstructorLogin: ', err)}
  };

  async getUsersLoginId (req, res) {
    try {
      console.log('running getUsersLoginId')
      console.log(req.cookies)
      const { users_id } = req.cookies
      const usersLoggedIn = await this.db.users.findOne(
        { where: { id: users_id } })
      console.log('this is usersLoggedIn', usersLoggedIn)
      res.send(usersLoggedIn)
    } catch (err) {
      console.log('error in getUsersLoginId:', err)
    }
  }
};

module.exports = UsersCtrl;
