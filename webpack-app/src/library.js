class Hero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  show() {
    console.log('[name, age]', this.name, this.age);
  }
}

export {Hero};
