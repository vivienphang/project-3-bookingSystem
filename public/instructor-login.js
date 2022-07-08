// POST: instructor login form
const loginInstructorBtn = document.getElementById('login-btn')

const clickLoginInstructor = async (event) => {
  // use preventDefault so overrides form function in EJS
  event.preventDefault()
  // define each input tag
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const output = {
    email: email,
    password: password,
  }
  try{
    const result = await axios.post('/register/postInstructorLogin', output)
    console.log(result)
    window.location = '/dashboard-instructor'
  } catch (err) {
    console.log('error', err)
    alert('You have the wrong email/password!')
  }

};
loginInstructorBtn.addEventListener('click', clickLoginInstructor)