//Customer class
var Customer = /** @class */ (function () {
    //constructors
    function Customer(theFirs, theLast) {
        this.firstName = theFirs;
        this.lastName = theLast;
    }
    //getter/setter methods : To access private properties, we use this
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    return Customer;
}());
//EXAMPLE: if u use only properties
// let hola = new Customer();
// hola.firstName = "Valli";
// console.log(hola.firstName);
//EXAMPLE: if u use the constructor
// let me = new Customer("Vishnu", "G");
// console.log(me.lastName);
//Access Modifiers - public, protected, private
//Public: open, Protected: class+subclass, Private: only that class
//EXAMPLE: if u use getter/setter
var my = new Customer("Sri", "G");
my.setFirstName("Sridhar");
console.log(my.getFirstName());
//PROBLEM: EVEN IF THERE IS A COMPILATION ERROR, JS FILE IS CREATED
// AND THE CODE WILL STILL RUN DUDE!
// THATS CRAZY
//To prevent
//Use tsc --noEmitonError <fileName>.ts
//Now js is not created
