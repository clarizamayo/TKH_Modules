https://repl.it/@clarizamayo/TKH-Module-5-Challenge-5#index.js

let quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to representme, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "

let array = quote.split(" ")
for(let i=0; i < array.length; i++){
  if (array[i].includes("s") || array[i].includes("S")){
    let temp = array[i].replace(/s/ig, "$");
    array[i] = temp
  }
}
let newString = array.join(" ")
console.log(newString)