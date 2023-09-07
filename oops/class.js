/*
console.log("hello start of class");

class Person {
    constructor() {
        console.log("hello world");
    }

}


const newPerson = new Person();

*/
// constructor function
/*
function Rectangle() {
    this.height = 12,
        this.width = 23;
}
// create an object
const person = new Rectangle();
console.log(person);

const person2 = new Rectangle();
console.log(person2);

*/

/*
class Rectangle {
    constructor(_height, _width) {
        this.rectheight = _height;
        this.rectwidth = _width;
    }
    getArea() {

        return (this.rectheight * this.rectwidth);

    }
}
const newRectangle = new Rectangle(12, 13);
newRectangle;
const newRectangle2 = new Rectangle(12, 13);
newRectangle2;
console.log(newRectangle2.getArea());
*/

/*
class Parent {

    constructor(_name, _age, _salary) {
        this.name = _name;
        this.age = _age;
        this.salary = _salary;
        this.someFunction = function () {
            console.log("hello");
        };
        console.log(this.name, this.age, this.salary);
    };
    talk() {
        console.log(` ${this.name} is talking`);
    }
}

class Child extends Parent {

    constructor(_birthday, _birthyear, _category) {
        super("prince", 27, 444444440000000000);
        this.birthday = _birthday;
        this.birthyear = _birthyear;
        this.category = _category;
    }
    speak() {
        console.log(`${this.name} will do ${this.category} and salary ${this.salary}`);
    }
    childFunc() { }
};
const children = new Child(24, 1996, "OBC");

console.log(children);
children.speak();

*/
/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    const currentDate = new Date;
    this.calcAge = function () {
        console.log(` ${currentDate.getUTCFullYear() - this.birthYear} `);
    };
};
const prince = new Person("prince", 1996);
prince.calcAge();
const patel = new Person("patel", 1998);
patel.calcAge();

Person.prototype.calculateAge = function () {
    const currentDate = new Date;
    console.log(` ${currentDate.getUTCFullYear() - this.birthYear} `);
};

const tanish = new Person("tanish", 1997);
tanish.calculateAge();

console.log(Person.prototype == tanish.__proto__);
*/

/*
function Car(speed) {
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    console.log(`Increase speed by 10 ${this.speed + 10}`);
};
Car.prototype.brake = function () {
    console.log(`Decrease speed by 5 ${this.speed - 5}`);
};

const bmw = new Car(120);
bmw.accelerate();
bmw.brake();

*/

/*
const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

//let's understand how object.create works
/*
const protoObject = {
    calcAge() {
        console.log("inside protoObject");
    }
};
const protoObject2 = {
    calcAge() {
        console.log("inside protoOBject 2");
    }
};

const newObject = Object.create(protoObject);
console.log(newObject);
newObject.calcAge();

const newObject2 = Object.create(protoObject2);
newObject2.calcAge();
*/

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
    console.log(` ${2023 - this.birthYear} `);
};

const Student = function (firstName, birthyear, course) {
    Person.call(this, firstName, birthyear);
    this.course = course;
};
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course} here`);
};
const mike = new Student("mikepompeii", 2023, "computer science");
mike.introduce();