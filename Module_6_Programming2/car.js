//https://repl.it/@clarizamayo/carjs#index.js

let car = {
    color: "green",
    model: "1997",
    engine: "V4",
    doortype: [2, 4, 5],
    headlight: "highbean",
    newcar: function(){
      console.log("congratulations!")
    },
    get shan(){
      return this.model;
    },
    set custumize(custumize){
      this.headlight = custumize;
    },
  };
  
  console.log(car.color)
  car.newcar()
  console.log(car.model)
  console.log(car.engine)
  console.log(car.doortype)
  console.log(car.shan)
  car.custumize = "anything";
  console.log(car.headlight)
