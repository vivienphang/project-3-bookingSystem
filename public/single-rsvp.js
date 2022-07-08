const displaySingleReservation = async () => {
  // get reservations via axios.get
  const url = window.location.href
  const id = url[url.length-1]
  console.log(id)
  const result = await axios.get(`/classes/getReservation/${id}`)
  
  const displayOne = result.data;
  console.log(displayOne)
  // get instructors db
  
  const instructorName = displayOne.instructor
  const nameDiv = document.getElementById('instructor-name')
  nameDiv.innerText =  'Instructor: ' + instructorName
  const classNameDiv = document.getElementById('class-name')
  const className = displayOne.class
  classNameDiv.innerText = 'Class: ' + className
  const classDescDiv = document.getElementById('class-desc')
  const classDescription = displayOne.classDescription
  classDescDiv.innerText = 'Class Description: ' + classDescription
  const dateDiv = document.getElementById('class-date')
  const classDate = displayOne.date
  dateDiv.innerText = 'Date: ' + classDate
  const timeDiv = document.getElementById('class-time')
  const classTime = displayOne.time
  timeDiv.innerText = 'Time: ' + classTime
  const priceDiv = document.getElementById('class-price')
  const classPrice = displayOne.price
  priceDiv.innerText = 'Price : ' + classPrice + ' SGD'
  
}
displaySingleReservation()

const bookBtn = document.getElementById('book-btn')
const editReservation = async () => {
  console.log('running editReservation')
  // PUT: single reservation form
  const userAddress = document.getElementById('class-venue').value
  const userComment = document.getElementById('user-comment').value
  const output = {
    address: userAddress,
    comments: userComment,
  }
  // GET: user data who edited form
  console.log('running axios.get: getUsersLogin')
  const user = await axios.get('/register/getUsersLoginId')
  const userData = user.data
  console.log(userData.FName, userData.LName, userData.mobile)
  // get reservation id
  const url = window.location.href
  const id = url[url.length-1]
  // const id = url[/[0-9]+/]
  console.log(id)
  // GET: single reservation id
  const singleReservation = await axios.get('/classes/display')
  const displayOne = singleReservation.data.at(id);
  console.log(displayOne)
  // PUT: send edited form back
  await axios.post(`/classes/editReservation/${id}`, output)
  window.location = '/dashboard'
}

bookBtn.addEventListener('click', editReservation)