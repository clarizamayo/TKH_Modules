https://repl.it/@clarizamayo/animaljs#index.js

let animal = {
    legs: "4",
    color: "white",
    reproduction: "asexually",
    mobility: "run",
    lifecycle: "",
    newpet: function(){
      console.log("Congratulations on your new pet!")
    },
    get animalreproduction(){
      return this.reproduction;
    },
    set custumize(custumize){
      this.lifecycle = custumize;
    },
  };
  
  console.log(animal.color)
  animal.newpet()
  console.log(animal.legs)
  console.log(animal.mobility)
  console.log(animal.animalreproduction)
  animal.custumize = "anything";
  console.log(animal.lifecycle)