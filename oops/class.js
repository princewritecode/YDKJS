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
        console.log(`${this.name} will do ${this.category}`);
    }
    childFunc() { }
};
const children = new Child(24, 1996, "OBC");

console.log(children);
children.speak();