class Person {
  // in modern js, this is how u make a field private and inaccessible!
  #ID = "";
  constructor(firstName, lastName, age, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#ID = id;
  }

  // simple member functions
  // regular javascript is very limited
  greetPerson() {
    const greeting = `Hello there ${this.firstName} ${this.lastName}`;
    console.log(greeting);
  }

  canGoClubbing() {
    let msg;
    const cango = this.age > 20;

    if (!cango) {
      msg = "Sorry, ur too young";
    } else {
      msg = "have fun partying, be safe!";
    }
    console.log(msg);
  }
}

const app = () => {
  const Emeka = new Person("Nnaemeka", "Onyeokoro", 24);
  console.log(Emeka.firstName);
};

app();
