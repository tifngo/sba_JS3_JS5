import Person from '/Person.js';

const btn = document.getElementById('send');
const displayMessage = document.getElementById('message');
const storeInformation = [];

function theEventListener() {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const age = document.getElementById('age');

  let firstValue = firstName.value;
  let lastValue = lastName.value;
  let ageValue = age.value;

  console.log(firstValue);
  console.log(lastValue);
  console.log(ageValue);

  const user = new Person(firstValue, lastValue, ageValue);
  storeInformation.push(user);
  console.log(user);
  console.log(storeInformation);

  displayMessage.innerHTML = "Hello, " + firstValue + " " + lastValue + "! " + "You are " + ageValue + " years old.";
}

btn.addEventListener('click', theEventListener);

/*
  Here you will write your the functionality for your webpage
  I have already written the import and export statements for the Person class, so once you have it written in the other file it should be available here
*/

