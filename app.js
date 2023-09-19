"use strict";

function greet() {
  let username = prompt("What is your name?");
  document.write(username + "!");
  console.log("Hello there " + username);
}

function raccoonQ() {
  let raccoonP = prompt("Do I like raccoons? (yes or no)");
  let raccoonQ = raccoonP.toLowerCase();
  if (raccoonQ === "yes") {
    alert("Hell yes I do!");
  } else if (raccoonQ === "no") {
    alert("That's a lie! I love raccoons!");
  }
  console.log(raccoonQ);
}

function pizzaQ() {
  let pizzaP = prompt("Will I eat meat on a pizza? (yes or no)");
  let pizzaQ = pizzaP.toLowerCase();
  if (pizzaQ === "yes") {
    alert("No, how rude!");
  } else if (pizzaQ === "no") {
    alert("That's right, veggies only for meeee");
  }
  console.log(pizzaQ);
}

function drinkQ() {
  let drinkP = prompt("Is an IPA my go-to pint? (yes or no)");
  let drinkQ = drinkP.toLowerCase();
  if (drinkQ === "yes") {
    alert("Hell no! Guinness for the win!");
  } else if (drinkQ === "no") {
    alert("That's right, Guinness please.");
  }
  console.log(drinkQ);
}

function napQ() {
  let napP = prompt("Should I have a nap? (yes or no)");
  let napQ = napP.toLowerCase();
  if (napQ === "yes") {
    alert("Yeah you're right, thank you.");
  } else if (napQ === "no") {
    alert("Hmm not sure about that, should probably have a nap and reassess");
  }
  console.log(napP);
}

function roomQ() {
  let roomP = prompt(
    "Have you ever seen The Room (2003, Tommy Wiseau)? (yes or no)"
  );
  let roomQ = roomP.toLowerCase();
  if (roomQ === "yes") {
    alert("You have been blessed, congratulations.");
  } else if (roomQ === "no") {
    alert("Cancel all of your evening plans.");
  }
  console.log(roomP);
}
