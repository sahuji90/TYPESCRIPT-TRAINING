class Customer{
    private _firstName: string;
    private _lastName: string;
    
    
    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string{
        return this._firstName;
    }
    public set firstName(theFirst: string){
        this._firstName = theFirst;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Martin", "Dixon");
//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";
console.log(myCustomer.firstName+" "+myCustomer.lastName);