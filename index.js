class Student {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }

  get getFullName() {
    //выводит ФИ студента
    return `Мое полное имя и фамилия ${this.name} ${this.surname}`;
  }

  get getCourse() {
    //выводит текущий курс студента
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let student1 = new Student("Анастасия", "Зайцева", 2020);
let student2 = new Student("Александр", "Попов", 2019);
let student3 = new Student("Ирина", "Сорокина", 2017);
console.log(student1.getFullName);
console.log(student2.getFullName);
console.log(student3.getFullName);
console.log(student1.year);
console.log(student2.name);
console.log(student3.surname);
console.log(student1.getCourse);
console.log(student2.getCourse);
console.log(student3.getCourse);
