// get all class types
const displayAllClasses = async () => {
  // get classes data via axios
  const result = await axios.get('/classes')
  // get db.instructors data via axios
  const instructorName = await axios.get('/instructor')
  const displayName =instructorName.data.FName
  const nameDiv = document.getElementById('instructor-name')
  nameDiv.innerText = 'Instructor: ' + displayName
  const classes = result.data
  const select = document.getElementsByTagName('select')
  // console.log(select)

  // loop through class object
  classes.forEach(element => {
    // console.log('this is element', element)
    const option = document.createElement('option')
    const classId = element.id
    const className = element.name
    const classDesc = element.description
    option.innerText = className // display class name in dropdown list
    option.id = classId // input id for each class name in html
    option.value = classDesc // input class desc as the option value
    select[0].appendChild(option)
  })
} // corresponds to onchange event function in EJS
const displayDesc = () => {
   const desc = document.getElementById("classes-select").value;
   document.getElementById("class-desc").innerHTML = desc;
}
displayAllClasses()

// get the button element
const createBtn = document.getElementById('create-btn')

const submitAvailability = async () => {
  const instructor = await axios.get('/instructor')
  const instructorId =instructor.data.id
  console.log('instructor Id: ', instructorId)
  const select = document.getElementById('classes-select')
  const option = document.getElementsByTagName('option')
  const optionSelected = parseInt(option[select.selectedIndex].id); // included parseInt() because model requires data type: INTEGER
  const dateInput = document.getElementById('class-date').value;
  const timeInput = document.getElementById('class-time').value;
  const venueInput = document.getElementById('class-venue').value;
  const commentInput = document.getElementById('comment').value;
  const priceInput = document.getElementById('price').value;
  

  const output = {
    instructors_id: instructorId,
    classes_id: optionSelected,
    date: dateInput,
    time: timeInput,
    venue: venueInput,
    price: priceInput,
    comments: commentInput,
  }
  try {
    const result = await axios.post('/classes/post', output)
    window.location = '/home'
  } catch (err) {
    console.log(err)
  }
  // await axios.post('/classes/post', output)
  
  // document.getElementsByClassName('problem')[1].value = '';
  // document.getElementsByClassName('error-text')[1].value = '';
}
createBtn.addEventListener('click', submitAvailability)





