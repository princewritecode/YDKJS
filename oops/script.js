console.log("oops concepts");

class Product {
    //properteis->variables->data member
    /*
        name;
        price;
        rating;
    */
    //! private data member has to be declared
    #rating;
    constructor(n, p, r) {
        //** this keyword refers to calling context below properties are public  */
        this.name = n;
        this.price = p;
        this.#rating = r;
        console.log("calling the constructor");
        //!if we return non primitive than it will be returned
        /**
         * This keyword in js is diff than other languages
         * this keyword refers to the context from where we called
         * in the function constructor also
         * -if return primitive it is ignored
         * if you return non primitive it's returned
         *
         */
        // return { x: 0, y: 20 };
    }

    static custom() {
        console.log(`calling a static method`);
    }

    getRating() {
        console.log(this.#rating);
    }
    setRating(r) {

        if (r < 0) return;
        this.#rating = r;

    }

    // properties and behaviour behaviour can be represented as function
    display() {
        console.log(`displaying the value of this ${this}`);
        console.log(this.name, this.price, this.#rating);
    }
}
//** new creates an empty plain object */
const p = new Product("iphone", 20000, 5);
//** new with class name with parenthesis it calls a special function called constructor every class has default constructor*/
console.log(p);
//! let's see the power of this below p is calling display object so the value of this will be p
p.display();
//** i can access everthing using object this can cause security issue in application to protect this */
p.name = "blacberry";
p.display();
//!static method is class method or else it will throw error cannot be called with object
Product.custom();
