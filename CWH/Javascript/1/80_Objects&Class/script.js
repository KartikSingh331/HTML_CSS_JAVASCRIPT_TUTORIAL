class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("kha rha hoon")
    }
    jumps(){
        console.log("Kood rha hoon")
    }
}
 
class Lion extends Animal{
    constructor(name){
        super(name)
      
        console.log("lion is created to roor...")
    }
     eats(){
        console.log("kha rha hoon")
    }
}

let a = new Animal("Bunny");
console.log(a);
let l = new Lion("Shera");
console.log(l);
