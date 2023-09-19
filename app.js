console.log("Hello there");

function greet() {
  let username = prompt("What is your name?");
  document.write(username + "!");
}

console.log("Hello " + username);

function raccoonQ() {
  let raccoonP = prompt("Do I like raccoons? (yes or no)");
  let raccoonQ = raccoonP.toLowerCase();
  if (raccoonQ === "yes") {
    alert("Hell yes I do!");
  } else if (raccoonQ === "no") {
    alert("That's a lie! I love raccoons!");
  }
}

function pizzaQ() {
  let pizzaP = prompt("Will I eat meat on a pizza? (yes or no)");
  let pizzaQ = pizzaP.toLowerCase();
  if (pizzaQ === "yes") {
    alert("No, how rude!");
  } else if (pizzaQ === "no") {
    alert("That's right, veggies only for meeee");
  }
}
