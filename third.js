// inputs
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('password-confirm')
// submit button
const submitButton = document.getElementById('submit')
// booleans
var errors = 0;
var startChecking = 0;

submitButton.addEventListener('click', function (e) {
  e.preventDefault()
  checkinputs();
})

function checkinputs() {
  errors = 0;
  if (firstname.value.trim() === '') {
    errors++;
    seterrorfor(firstname, "please fill this field");
  } else {
    errors--;
    setsuccesfor(firstname);
  }
  if (lastname.value.trim() === '') {
    errors++;
    seterrorfor(lastname, "please fill this field");
  } else {
    errors--;
    setsuccesfor(lastname);
  }
  if (username.value.trim() === '') {
    errors++;
    seterrorfor(username, "please fill this field");
  } else {
    errors--;
    setsuccesfor(username);
  }
  if (email.value.trim() === '') {
    errors++;
    seterrorfor(email, "please fill this field");
  } else {
    errors--;
    setsuccesfor(email);
  }
  if (password.value.trim() === '') {
    errors++;
    seterrorfor(password, "please fill this field");
  } else {
    errors--;
    setsuccesfor(password);
  }
  if (confirmpassword.value.trim() === '') {
    errors++;
    seterrorfor(confirmpassword, "please fill this field");
  } else {
    errors--;
    setsuccesfor(confirmpassword);
  }

  if (password.value.trim() === '' || confirmpassword.value.trim() === '' || password.value.trim() != confirmpassword.value.trim()) {
    errors++;
    seterrorfor(confirmpassword, "this must match the password");
  } else {
    errors--;
    setsuccesfor(confirmpassword);
  }
};

document.querySelectorAll('input').forEach(function (element) {
  element.addEventListener('keyup', function (e) {
    if ( startChecking == 1 ) checkinputs();
  });
});

function seterrorfor(input, message) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerText = message;
  formcontrol.classname = 'unfilled';
  small.classList.remove('hidden');
}

function setsuccesfor(input) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerText = "";
  console.log(input.value + ' This is the value')
}

document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault();
  startChecking = 1;
  checkinputs();
  if ( errors && errors == -7 ) window.location.href = 'site2.html';
});