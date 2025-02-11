"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirst) {
        this._firstName = theFirst;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Martin", "Dixon");
//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
