// import tools
const express = require ('express')
const db = require('./models/index')
const cookieParser = require('cookie-parser')
const app = express()
const jsSHA = require('jsSHA')
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())
app.set('view engine', 'ejs')

// import controllers
const UsersCtrl = require('./controllers/usersCtrl')
const InstructorsCtrl = require('./controllers/InstructorsCtrl')
const ClassesCtrl = require('./controllers/classesCtrl')

// initialize controllers
const usersCtrl = new UsersCtrl(db.users, db)
const instructorsCtrl = new InstructorsCtrl(db.instructors, db)
const classesCtrl = new ClassesCtrl(db.classes, db)

// import routers
const UsersRouter = require('./routers/usersRouter')
const InstructorsRouter = require('./routers/instructorsRouter')
const ClassesRouter = require('./routers/classesRouter')

// initialize routers
const usersRouter = new UsersRouter(usersCtrl).router()
const instructorsRouter = new InstructorsRouter(instructorsCtrl).router()
const classesRouter = new ClassesRouter(classesCtrl).router()


// app.get to render pages to frontend
app.get('/home', (req, res)=> {
  res.render('home')
})
app.get('/register-client', (req, res)=>{
  res.render('register')
})
app.get('/login-client', (req, res)=> {
  res.render('login')
})
app.get('/register-instructor', (req, res)=>{
  res.render('register-inst')
})
app.get('/login-instructor', (req, res)=> {
  res.render('login-inst')
})
app.get('/dashboard', (req, res)=> {
  res.render('dashboard')
})
app.get('/dashboard-instructor', (req, res)=> {
  res.render('dashboard-inst')
})
app.get('/availability', (req, res)=> {
  res.render('availability-form')
})
app.get('/getReservation/:id', (req, res)=> {
  res.render('single-rsvp')
})


// app.use to link to routers
app.use('/register', usersRouter)
app.use('/classes', classesRouter)
app.use('/instructor', instructorsRouter)

// initialize PORT
const PORT = 8000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`))


