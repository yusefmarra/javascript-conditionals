var running = true;

function phoneValidation (number) {
  if (number[3] === "-" && number[7] === "-") {
    return true;
  } else {
    return false;
  }
}

function birthValidation(date){
  if (date[2] === "/" && date[5] ==="/" && date) {
    return true;
  } else {
    return false;
  }
}

function postalValidation(zipcode) {
  if (zipcode.length > 5 && zipcode[4] === "-") {
    return true;
  } else if (zipcode.length < 5){
    return false;
  } else if (zipcode.length === 5) {
    return true;
  } else {
    return false;
  }
}

function stateValidation(state) {
  if (state.length > 2 || state.length < 2){
    return false;
  } else {
    return true;
  }
}

while(true){

  var phoneNumber = window.prompt('What is your phone number?', 'XXX-XXX-XXX');
  if (phoneValidation(phoneNumber)) {
    window.alert("Your phone number is close enough to correct.");
  } else {
    window.alert("At least put the hyphens in the right place okay? Let's start over.");
    continue;
  }

  var birthDate = window.prompt("What is your birthdate?", "xx/xx/xx");
  if (birthValidation(birthDate)) {
    window.alert("Hey good job following instructions.");
  } else {
    window.alert("Wow. Okay, one more time from the top. Check your formatting.");
    continue;
  }

  var zipcode = window.prompt("What's your zipcode?", "XXXXXX or XXXXXX-XXXX");
  if (postalValidation(zipcode)) {
    window.alert("Top of the class!");
  } else {
    window.alert("Get it together, man. Use the formatting. It's right there for you. AGAIN FROM THE TOP.");
    continue;
  }

  var state = window.prompt("What's your state abbreviation?", "XX");
  if (stateValidation(state)) {
    window.alert("There may be hope for you.");
  } else {
    window.alert("Your issues with formatting are wasting both of our time.");
    continue;
  }

  var married = window.prompt("Are you married?", "yes or no");
  if (married.toUpperCase() === "YES" || married.toUpperCase() === "NO") {
    window.alert("Hey great job, you got through it. Finally.");
  } else {
    window.alert("I give up. Lets just do it again.");
    continue;
  }

  break;
}



window.onload = function() {
  var nameElement = document.getElementById('name');
  nameElement.innerHTML = "Here's the info I painstakingly collected:<br>";
  nameElement.innerHTML += phoneNumber + "<br>" + birthDate + "<br>" + zipcode + "<br>" + state + "<br>" + "Married: " + married;
}
