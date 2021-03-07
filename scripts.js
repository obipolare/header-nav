const aname = "Shira";
const anotherName = "and gustavo are married";

const plus = aname.padEnd(name.length + 33, ` ${anotherName} to death`);

console.log(plus);

const base = 2;
const exponent = 4;

const baseAndExponent = base ** 5;

console.log(baseAndExponent);

const factorial = (num = undefined) => {
  num === undefined && console.error(`you need to put a number`);
  typeof num !== "number" &&
    console.error(`you need to put a number, not a string`);
  Math.sign(num) === -1 && console.error(`you need to put positive number`);

  num === 0 && console.info(`your aswenser is 1`);

  let saveResult = 1;

  for (let i = num; i > 1; i--) {
    saveResult *= i;
  }
  return console.info(`${saveResult} is the factorial of ${num}`);
  //   4 * 1 = 4
  //   3 * 4 = 12
  //   2 * 12 = 24
  //   1 * 24 = 24
};

// factorial();
// factorial("5");
// factorial(-1);
// factorial(0);
// factorial(5);

const changeElements = (word = "") => {
  wordChange = word;
  return console.info(
    `${word} with "e" intead of "a" is like this : ${word.replaceAll("a", "e")}`
  );
};
changeElements("sebastian");

const heroes = [
  {
    id: "dc-batman",
    superhero: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    characters: "Bruce Wayne",
  },
  {
    id: "dc-superman",
    superhero: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    characters: "Kal-El",
  },
  {
    id: "dc-flash",
    superhero: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen",
  },
  {
    id: "dc-green",
    superhero: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    characters:
      "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
  },
  {
    id: "dc-arrow",
    superhero: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "More Fun Comics #73",
    characters: "Oliver Queen",
  },
  {
    id: "dc-wonder",
    superhero: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "All Star Comics #8",
    characters: "Princess Diana",
  },
  {
    id: "dc-martian",
    superhero: "Martian Manhunter",
    publisher: "DC Comics",
    alter_ego: "J'onn J'onzz",
    first_appearance: "Detective Comics #225",
    characters: "Martian Manhunter",
  },
  {
    id: "dc-robin",
    superhero: "Robin/Nightwing",
    publisher: "DC Comics",
    alter_ego: "Dick Grayson",
    first_appearance: "Detective Comics #38",
    characters: "Dick Grayson",
  },
  {
    id: "dc-blue",
    superhero: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    characters: "Dan Garret, Ted Kord, Jaime Reyes",
  },
  {
    id: "dc-black",
    superhero: "Black Canary",
    publisher: "DC Comics",
    alter_ego: "Dinah Drake",
    first_appearance: "Flash Comics #86",
    characters: "Dinah Drake, Dinah Lance",
  },
  {
    id: "marvel-spider",
    superhero: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    characters: "Peter Parker",
  },
  {
    id: "marvel-captain",
    superhero: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    characters: "Steve Rogers",
  },
  {
    id: "marvel-iron",
    superhero: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    characters: "Tony Stark",
  },
  {
    id: "marvel-thor",
    superhero: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    characters: "Thor Odinson",
  },
  {
    id: "marvel-hulk",
    superhero: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    characters: "Bruce Banner",
  },
  {
    id: "marvel-wolverine",
    superhero: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    characters: "James Howlett",
  },
  {
    id: "marvel-daredevil",
    superhero: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    characters: "Matthew Michael Murdock",
  },
  {
    id: "marvel-hawkeye",
    superhero: "Hawkeye",
    publisher: "Marvel Comics",
    alter_ego: "Clinton Francis Barton",
    first_appearance: "Tales of Suspense #57",
    characters: "Clinton Francis Barton",
  },
  {
    id: "marvel-cyclops",
    superhero: "Cyclops",
    publisher: "Marvel Comics",
    alter_ego: "Scott Summers",
    first_appearance: "X-Men #1",
    characters: "Scott Summers",
  },
  {
    id: "marvel-silver",
    superhero: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    characters: "Norrin Radd",
  },
];
const form = document.getElementById("form");

const input = document.getElementById("input");

const getNamesByName = (name = "") => {
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};

// let superheroes = [];
// input.addEventListener("keyup", () => {

//   superheroes = heroes;
// });
// console.log(superheroes);
const section = document.getElementById("section");
const fragmentSearch = document.createDocumentFragment();
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heroes = getNamesByName(input.value.trim().toLowerCase());
  console.log(heroes);
  for (const hero of heroes) {
    const p = document.createElement("p");
    p.textContent = hero.superhero;
    fragmentSearch.appendChild(p);
  }
  section.appendChild(fragmentSearch);
});

const fragmentHeroes = document.createDocumentFragment();
for (let hero of heroes) {
  const p = document.createElement("p");
  p.textContent = hero.superhero;
  fragmentHeroes.appendChild(p);
}

section.appendChild(fragmentHeroes);
