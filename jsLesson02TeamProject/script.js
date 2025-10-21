// ============================================
// TEAM PROFILE PAGE
// Team Members: [Giovanni, Bradley]
// ============================================

// ============================================
// MEMBER 1 VARIABLES
// ============================================

let member1Name = "Giovanni";
let member1Age = 17;
let member1Game = "GW2";
let member1Music = "Up by forest frank";
let member1BestFood = "Chicken Alfredo";
let member1Restaurant = "ChiC-FlA";
let member1PitBull = "NO";
let member1Basketball = "LeBron";
let member1Future = "College";


// ============================================
// MEMBER 2 VARIABLES
// ============================================
let member2Name = "Bradley";
let member2Age = 16;
let member2Game = "NBA 2K";
let member2Music = "Drake";
let member2BestFood = "Steak";
let member2Restaurant = "Longhorn Steakhouse";
let member2PitBull = "No";
let member2Basketball = "LeBron";
let member2Future = "Hopefully have a job that makes me financially confortable and happy.";

//Just copy from member 1 and change values: 
// let's debug the member2Age issue here - we need to define the member2Age variable or the .js won't run //


// ============================================
// TEAM CALCULATIONS
// ============================================

// How many team members?
let totalMembers = 2;  // Change this to 3 if you have 3 people!

// Calculate total age
let totalAge = member1Age + member2Age;  // Add member3Age if needed

// Calculate average age
let averageAge = totalAge / totalMembers;

// ============================================
// DISPLAY TEAM STATS
// ============================================

document.getElementById('totalMembers').textContent = totalMembers;
document.getElementById('totalAge').textContent = totalAge;
document.getElementById('averageAge').textContent = averageAge.toFixed(1);

// ============================================
// DISPLAY MEMBER 1
// ============================================

document.getElementById('member1Name').textContent = member1Name;
document.getElementById('member1Age').textContent = member1Age;
document.getElementById('member1Game').textContent = member1Game;
document.getElementById('member1Music').textContent = member1Music;
document.getElementById('member1BestFood').textContent = member1BestFood;
document.getElementById('member1Restaurant').textContent = member1Restaurant;
document.getElementById('member1PitBull').textContent = member1PitBull;
document.getElementById('member1Basketball').textContent = member1Basketball;
document.getElementById('member1Future').textContent = member1Future;


// ============================================
// DISPLAY MEMBER 2
// ============================================
document.getElementById('member2Name').textContent = member2Name;
document.getElementById('member2Age').textContent = member2Age;
document.getElementById('member2Game').textContent = member2Game;
document.getElementById('member2Music').textContent = member2Music;
document.getElementById('member2BestFood').textContent = member2BestFood;
document.getElementById('member2Restaurant').textContent = member2Restaurant;
document.getElementById('member2PitBull').textContent = member2PitBull;
document.getElementById('member2Basketball').textContent = member2Basketball;
document.getElementById('member2Future').textContent = member2Future;

// again copy from member 1, but remember to change the element IDs: 'member2-name' etc.



// ============================================
// LOG TO CONSOLE (for testing)
// ============================================

console.log("Team loaded!");
console.log("Total members:", totalMembers);
console.log("Total age:", totalAge);
console.log("Average age:", averageAge);