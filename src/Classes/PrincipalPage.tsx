class Person {
  protected address: string;
  protected name: string;
  protected age: number;
  protected employed: boolean;

  constructor(address: string, name: string, age: number, employed = true) {
    this.address = address;
    this.name = name;
    this.age = age;
    this.employed = employed;
  }
  protected Presentation() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  }

  public Working() {
    let text = "";
    if (this.employed) {
      text = "employed";
    } else {
      text = "unemployed";
    }

    return (
      <h2 className={`${this.employed ? "color1" : "color2"}`}>
        {this.name} it's {text}
      </h2>
    );
  }

  public Change(bool: boolean) {
    if (!bool) {
      return (this.employed = true);
    } else {
      return (this.employed = false);
    }
  }
}


export { Person };
