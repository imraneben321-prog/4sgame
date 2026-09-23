const games=[
{name:"Sudoku",category:"puzzle",icon:"🔢",description:"Solve numbers and complete the Sudoku grid."},
{name:"2048",category:"brain",icon:"🧠",description:"Combine numbers and reach the 2048 tile."},
{name:"Car Racing",category:"cars",icon:"🏎️",description:"Drive fast and try to finish the race."},
{name:"Memory Cards",category:"brain",icon:"🃏",description:"Match the cards and test your memory."},
{name:"Space Shooter",category:"arcade",icon:"🚀",description:"Defend yourself against incoming enemies."},
{name:"Puzzle Blocks",category:"puzzle",icon:"🧩",description:"Arrange the blocks and solve the puzzle."}
];

const gameList=document.getElementById("game-list");
const search=document.getElementById("search");

function displayGames(list){
  gameList.innerHTML="";
  list.forEach(game=>{
    const card=document.createElement("div");
    card.className="game";
    card.innerHTML=`<div class="game-image">${game.icon}</div><h3>${game.name}</h3><p>${game.description}</p><a class="play" href="#">Play</a>`;
    gameList.appendChild(card);
  });
}

function filterGames(category){
  if(category==="all"){displayGames(games);return;}
  displayGames(games.filter(game=>game.category===category));
}

search.addEventListener("input",()=>{
  const query=search.value.toLowerCase();
  displayGames(games.filter(game=>game.name.toLowerCase().includes(query)));
});

displayGames(games);
