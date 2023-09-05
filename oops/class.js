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