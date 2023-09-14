class Car {
    constructor(name){
        this.brand = name;
    }
    present(){
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.present() + ', It is a ' + this.model
    }
}

const mycar = new Model("Ford", "Mustang");
console.log(mycar.show());

// -------------------------------------------------------------------

class Student {
    constructor(name){
        this.name = name;
    }
    present(){
        return 'This students name is' +" "+ this.name +" ";
    }
}

class Gender extends Student {
    constructor(name,gender){
        super(name);
        this.gender = gender;
    }
    show(){
        return this.present() + 'and a'+" " + this.gender;
    }
}

const a  = new Gender("hans", "girl");
console.log(a.show());

