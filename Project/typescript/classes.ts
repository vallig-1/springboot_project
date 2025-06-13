//Customer class

class Customer{
    //properties.. They are public by default
    // firstName : string;
    // lastName : string;

    private _firstName : string;
    private _lastName : string;
    //constructors
    constructor(theFirs: string, theLast: string){
        this._firstName=theFirs;
        this._lastName=theLast;
    }

    //getter/setter methods : To access private properties, we use this

    // METHOD 1
    // public getFirstName(): string{ //methodname:return_type
    //     return this.firstName;
    // }
    // public setFirstName(theFirst: string) : void { //methodName, param, return type
    //     this.firstName = theFirst;
    // }

    // METHOD 2
    public get firstName():string{
        return this._firstName;
    }
    public set firstName(value:string){
        this._firstName = value;
    }

}

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
// let my = new Customer("Sri", "G");
// my.setFirstName("Sridhar");
// console.log(my.getFirstName());

//PROBLEM: EVEN IF THERE IS A COMPILATION ERROR, JS FILE IS CREATED
// AND THE CODE WILL STILL RUN DUDE!
// THATS CRAZY

//To prevent
//Use tsc --noEmitonError <fileName>.ts
//Now js is not created

//Get/set is only avail on ES5 and higher...
// You have to set a compiler flag to compile code
// tsc --target ES5 --noEmitOnError <fileName>.ts

//To avoid these compiler flags, typeScript has a config file: tsconfig.json
// tsc --init
