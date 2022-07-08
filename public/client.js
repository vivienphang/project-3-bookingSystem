// GET: landing page
// window.location.href "/index"

// POST: client sign up form
const registerClientBtn = document.getElementById('register-btn')

const clickRegisterClient = async (event) => {
  try {
    // use preventDefault so overrides form function in EJS
    event.preventDefault()
    // define each input tag
    const firstName = document.getElementById('validationFName').value;
    const lastName = document.getElementById('validationLName').value;
    const username = document.getElementById('validationUsername').value;
    const email = document.getElementById('validationEmail').value;
    const mobile = document.getElementById('validationMobile').value;
    const address = document.getElementById('validationAddress').value;
    const password = document.getElementById('validationPassword').value;
    const output = {
      FName: firstName,
      LName: lastName,
      username: username,
      email: email,
      password: password,
      address: address,
      mobile: mobile,
    }
    await axios.post('/register/postClientRegister', output)
  } catch (err) {
    console.log(err)
  }

}
registerClientBtn.addEventListener('click', clickRegisterClient)