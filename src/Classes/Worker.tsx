import { Person } from "./PrincipalPage";

//
//* Class Worker
class Worker extends Person {
  public job: string;
  public experience: number;

  constructor(
    address: string,
    name: string,
    age: number,
    employed: boolean,
    job: string,
    experience: number
  ) {
    super(address, name, age, employed);
    this.job = job;
    this.experience = experience;
  }

  public Job() {
    console.log(`My name is ${this.name}, I'm looking for job as ${this.job}`);
  }
  public Address() {
    console.log("My address is " + this.address);
  }
  public Change(bool: boolean) {
    if (!bool) {
      return (this.employed = true);
    } else {
      return (this.employed = false);
    }
  }
}

let worker1 = new Worker("calle Santos", "Tom", 43, true, "Doctor", 5);
console.log(worker1);

//
//* Class Dev (Software developer)
class Dev extends Worker {
  public category: string;

  constructor(
    address: string,
    name: string,
    age: number,
    public employed: boolean,
    job: string,
    experience: number,
    category: string
  ) {
    super(address, name, age, employed, job, experience);
    this.category = category;
  }

  public override Presentation() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  }

  public Job() {
    let text = "";
    if (this.category) {
      text = " en ";
    }
    console.log(
      `My name is ${this.name}, I'm looking for job as ${this.job}${text}${this.category}`
    );
  }

  public Address() {
    console.log("My address is " + this.address);
  }

  public Change(bool: boolean) {
    if (!bool) {
      return (this.employed = true);
    } else {
      return (this.employed = false);
    }
  }
}

let dev1 = new Dev("calle Santos", "Joe", 27, true, "Dev", 3, "Frontend");
let dev2 = new Dev("calle Santos", "Alicia", 29, true, "Dev",  4, "Backend");
let dev3 = new Dev("calle Larios", "Matteo", 39, true, "Dev", 5, "Backend");
let dev4 = new Dev("calle Carreteria", "Mary", 40, true, "Dev", 5, "Cloud");


dev1.Address();
console.log(dev2.employed);


export { worker1, dev1, dev2, dev3, dev4 };
