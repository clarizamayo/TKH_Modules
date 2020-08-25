//https://repl.it/@clarizamayo/teamjs#index.js

let team = {
    type: "soccer",
    numbersofplayers: "12",
    positions:["goalkeeper", "defender", "Midfield", "Offender"],
    cards:["red", "green", "yellow"],
    name: "",
    jointeam: function(){
    console.log("Congratulations on your new pet!")
    },
    get teampositions(){
      return this.positions;
    },
    set custumize(custumize){
      this.name = custumize;
    },
  };
  
  console.log(team.type)
  team.jointeam()
  console.log(team.numbersofplayers)
  console.log(team.cards)
  console.log(team.teampositions)
  team.custumize = "anything";
  console.log(team.name)
