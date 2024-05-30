const form = document.getElementById('form'),
      button = document.getElementById('button'),
      eyeicon = document.getElementById('eyeicon'),
      firstName = document.querySelector('.firstName'),
      lastName = document.querySelector('.lastName'),
      email = document.querySelector('.email'),
      password = document.querySelector('.password'),
      errorMessage = document.getElementsByClassName('error');


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    errorMessage[0].innerHTML = 'First name cannot be empty';
  } else {
    errorMessage[0].innerHTML = '';
  }
  // Check last name

  if (lName === '') {
    errorMessage[1].innerHTML = 'Last name cannot be empty';
  } else {
    errorMessage[1].innerHTML = '';
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    errorMessage[2].innerHTML = 'Looks like this is not an email';
  } else {
    errorMessage[2].innerHTML = '';
  }

  // Check password

  if (passwordVal === '') {
    errorMessage[3].innerHTML = 'Password cannot be empty';
  } else {
    errorMessage[3].innerHTML = '';
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

eyeicon.onclick = function(){
  if (password.type == 'password') {
    password.type = 'text'
    eyeicon.src = '/images/eye-open.png'
  }else{
    password.type = 'password'
    eyeicon.src = '/images/eye-close.png'
  }
}



