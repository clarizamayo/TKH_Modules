https://repl.it/@clarizamayo/TKH-Module-5-Challenge-3#index.js

let names = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];
const firstName = [];
const lastName = [];
for(let i = 0; i < names.length; i++){
  let temp = names[i].split(" ");
  firstName.push(temp[0])
  lastName.push(temp[1])
}
console.log(firstName)
console.log(lastName)