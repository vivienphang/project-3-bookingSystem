// POST: instructor sign up form
const registerInstructorBtn = document.getElementById('register-btn')

const clickRegisterInstructor = async (event) => {
  // use preventDefault so overrides form function in EJS
  event.preventDefault()
  // define each input tag
  const firstName = document.getElementById('validationFName').value;
  const lastName = document.getElementById('validationLName').value;
  const email = document.getElementById('validationEmail').value;
  const mobile = document.getElementById('validationMobile').value;
  const password = document.getElementById('validationPassword').value;
  const output = {
    FName: firstName,
    LName: lastName,
    email: email,
    password: password,
    mobile: mobile,
  }
  await axios.post('/register/postInstructorRegister', output)
}
registerInstructorBtn.addEventListener('click', clickRegisterInstructor)