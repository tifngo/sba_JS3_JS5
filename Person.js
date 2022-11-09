/*
  in this file, write your person class to be exported to your main.js file
  take care not to unintentionally change the name of the class or the export statement!!!
*/
// const displayMessage = document.getElementById('message');

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

export default Person;

