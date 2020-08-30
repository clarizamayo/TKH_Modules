//https://repl.it/@clarizamayo/TKH-Module-5-Challenge-1#index.js

let weeklyIncome = parseInt(prompt("What is your weekly income?"));
let foodCost = parseInt(prompt("What is your weekly food cost?"));
let housingCost = parseInt(prompt("What is your weekly housing cost?"));
let transpoCost= parseInt(prompt("How much do you spend on transportation per week?"));
let otherCost = parseInt(prompt("How much do you spend on other things per week?"));
let yearSavings = parseInt(prompt("How much do you want to save in a year?"));
let possibleSavings = yearSavings/52;
console.log(possibleSavings);
let actualSavings = weeklyIncome - (foodCost + housingCost+transpoCost + otherCost);
console.log(actualSavings);
if(actualSavings >= possibleSavings){
  console.log("You are on track!");
}
else{
  let xAmount = possibleSavings - actualSavings;
  console.log("You need to save " + xAmount + " more in order to be on track");
}
