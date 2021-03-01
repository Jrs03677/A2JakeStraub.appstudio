/* let name = prompt("enter name")
let state = prompt("enter state")
let temperature = prompt("enter temperature") 

let messages = ['wear a warm coat, hat, scarf and gloves.', "wear a warm coat but you won't need a hat, scarf or gloves.",'wear your warmest coat, a warm hat, a scarf, and warm gloves.','wear a warm coat, hat and gloves. Maybe a scarf too.'


if (state == 'NE' && temperature < 32) { 
  console.log(`${name}, ${messages[0]}`)
 } else if (state == 'NE' && temperature > 32 && temperature < 50) { 
  console.log(`${name}, ${messages[1]}`)
 } else if (state == 'FL' && temperature > 32 && temperature < 50) { 
  console.log(`${name}, ${messages[2]}`)
 } else if (state == 'FL' && temperature > 50 && temperature < 70) { 
  console.log(`${name}, ${messages[3]}`)
 } else {
  console.log("For your state, I have no advice")
 }
*/