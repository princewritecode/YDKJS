console.log("oops concepts");

class Product {
    //properteis->variables->data member
    /*
        name;
        price;
        rating;
    */
    constructor(n, p, r) {
        //** this keyword refers to calling context  */
        this.name = n;
        this.price = p;
        this.rating = r;
        console.log("calling the constructor");
        //!if we return non primitive than it will be returned
        // return { x: 0, y: 20 };
    }
    // properties and behaviour behaviour can be represented as function
    display() {
        console.log(`displaying the value of this ${this}`);
        console.log(this.name, this.price, this.rating);

    }
}
//** new creates an empty plain object */
const p = new Product("iphone", 20000, 5);
//** new with class name with parenthesis it calls a special function called constructor every class has default constructor*/
console.log(p);
//! let's see the power of this below p is calling display object so the value of this will be p
p.display();