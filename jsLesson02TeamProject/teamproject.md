# Team Profile Page - Project Guide

## Project Overview

You and your team will create another "About Us" page that shows information about each team member - similar to our first website and our first data collection effort. However, this time you'll use JavaScript variables to store information and also use JavaScript to do some simple calculations to display interesting team stats!


**Team Size:** 2 students

---

## What You'll Learn

- Working together on one shared project
- Using variables to store information
- Doing simple calculations (adding, averaging, etc.)
- Displaying the stored information on a webpage
- Making it look presentable with CSS

---

## 👥 Team Roles

Everyone contributes! Here's how you might divide the work:

### Content
- Collect everyone's information
- Help organize the HTML structure
- Make sure everyone's section is included

### Coding
- Set up the JavaScript variables
- Write the calculations
- Connect JavaScript to HTML

### Design
- Style the page with CSS
- Choose colors and fonts
- Make it look professional

**IMPORTANT:** Everyone should write at least SOME JavaScript!  Use live share in VS Code to split up the work.  For example, someone can plug in their variable values in a shared JavaScript file.  Someone could work on the CSS on their own too, and share the styling with their teammate who is working more on the HTML and JavaScript. 

---

## Project Requirements

Your project MUST include:

### For Each Team Member (fill the following in and pick at least two more of your own questions/answers):
- [ ] First name
- [ ] Age
- [ ] Favorite video game
- [ ] Favorite song or artist
- [ ] Best thing they've ever eaten
- [ ] Where they'd go out to eat on a Monday night
- [ ] Do they think pit bulls are scary? (Yes/No)
- [ ] Kobe or LeBron?
- [ ] What they'll be doing in 5 years
- [ ] *You must add at least two of your own questions! Maybe how many of you have won knockout 😊*

### Team Calculations (at least these 3):
- [ ] Total combined age of team
- [ ] Average age of team
- [ ] Total number of team members
- [ ] *Add more if you want!*

### Styling:
- [ ] Custom colors and fonts (DO NOT use what is provided - make it look the way you'd style your own personal website - look around online for inspiration)
- [ ] Each team member has their own styled section
- [ ] Page looks organized and fun

---

## 🚀 Starter Code

### Step 1: Create Your Files

Create three files:
- `index.html`
- `style.css`
- `script.js`

---

### Step 2: HTML Structure

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Team Profile</title>
    <link rel="stylesheet" href="style.css">
    <!-- Change the font below called Nova Script!!! This isn't  great choice here from Google.  Also, remember to update the CSS file accordingly. -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nova+Script">
</head>
<body>
    <div class="container">
        <h1>Meet Our Team! 🌟</h1>
        
        <!-- Team Stats Section -->
        <div class="team-stats">
            <h2>Team Statistics</h2>
            <p>Total Team Members: <span id="totalMembers">0</span></p>
            <p>Combined Age: <span id="totalAge">0</span> years</p>
            <p>Average Age: <span id="averageAge">0</span> years</p>
            <!-- Add more stats here! -->
        </div>

        <!-- Member 1 Section -->
        <div class="member-card">
            <h2 id="member1Name"></h2>
            <p><strong>🎂 Age:</strong> <span id="member1Age"></span></p>
            <p><strong>🎮 Favorite Video Game:</strong> <span id="member1Game"></span></p>
            <p><strong>🎵 Favorite Song/Artist:</strong> <span id="member1Music"></span></p>
            <p><strong>🍕 Best Food Ever Eaten:</strong> <span id="member1BestFood"></span></p>
            <p><strong>🍔 Monday Night Dinner Spot:</strong> <span id="member1Restaurant"></span></p>
            <p><strong>🐕 Are Pit Bulls Scary?:</strong> <span id="member1PitBull"></span></p>
            <p><strong>🏀 Kobe or LeBron?:</strong> <span id="member1Basketball"></span></p>
            <p><strong>🔮 In 5 Years I'll Be (doing what?):</strong> <span id="member1Future"></span></p>
        </div>

        <!-- Member 2 Section -->
        <div class="member-card">
            <h2 id="member2Name">Name</h2>
            <p><strong>🎂 Age:</strong> <span id="member2Age">0</span></p>
            <p><strong>🎮 Favorite Video Game:</strong> <span id="member2Game">?</span></p>
            <p><strong>🎵 Favorite Song/Artist:</strong> <span id="member2Music">?</span></p>
            <p><strong>🍕 Best Food Ever Eaten:</strong> <span id="member2BestFood">?</span></p>
            <p><strong>🍔 Monday Night Dinner Spot:</strong> <span id="member2Restaurant">?</span></p>
            <p><strong>🐕 Are Pit Bulls Scary?:</strong> <span id="member2PitBull">?</span></p>
            <p><strong>🏀 Kobe or LeBron?:</strong> <span id="member2Basketball">?</span></p>
            <p><strong>🔮 In 5 Years I'll Be (doing what?):</strong> <span id="member2Future">?</span></p>
        </div>

        <!-- Add Member 3 if you have 3 people! Just copy and paste a member-card section -->

    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

---

### Step 3: Basic Styling

**style.css**
```css
/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    min-height: 100vh;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    background-color: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 42px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Team Stats Section */
.team-stats {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.team-stats h2 {
    margin-bottom: 20px;
    font-size: 28px;
}

.team-stats p {
    font-size: 18px;
    margin: 10px 0;
}

.team-stats span {
    font-weight: bold;
    font-size: 24px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 5px 15px;
    border-radius: 20px;
}

/* Member Cards */
.member-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 25px;
    border-left: 8px solid #667eea;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.member-card h2 {
    color: #667eea;
    margin-bottom: 20px;
    font-size: 32px;
    border-bottom: 3px solid #667eea;
    padding-bottom: 10px;
}

.member-card p {
    margin: 12px 0;
    font-size: 17px;
    line-height: 1.6;
}

.member-card strong {
    color: #555;
    min-width: 200px;
    display: inline-block;
}

.member-card span {
    color: #333;
    font-weight: 500;
}

/* Different colors for each card */
.member-card:nth-child(2) {
    border-left-color: #f093fb;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.member-card:nth-child(2) h2 {
    color: #f093fb;
    border-bottom-color: #f093fb;
}

.member-card:nth-child(3) {
    border-left-color: #4facfe;
    background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
}

.member-card:nth-child(3) h2 {
    color: #4facfe;
    border-bottom-color: #4facfe;
}

.member-card:nth-child(4) {
    border-left-color: #43e97b;
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.member-card:nth-child(4) h2 {
    color: #43e97b;
    border-bottom-color: #43e97b;
}

/* Make it responsive */
@media (max-width: 600px) {
    .container {
        padding: 20px;
    }
    
    h1 {
        font-size: 32px;
    }
    
    .member-card strong {
        display: block;
        margin-bottom: 5px;
    }
}
```

---

### Step 4: JavaScript Starter

**script.js**
```javascript
// ============================================
// TEAM PROFILE PAGE
// Team Members: [Add your names here!]
// ============================================

// ============================================
// MEMBER 1 VARIABLES
// ============================================

let member1Name = "Alex";
let member1Age = 16;
let member1Game = "Minecraft";
let member1Music = "Bad Bunny";
let member1BestFood = "My grandma's tamales";
let member1Restaurant = "Chipotle";
let member1PitBull = "No, they're sweet!";
let member1Basketball = "LeBron";
let member1Future = "In college studying computer science";


// ============================================
// MEMBER 2 VARIABLES
// ============================================

let member2Name = "Jordan";
let member2Age = 17;
let member2Game = "Fortnite";
let member2Music = "Taylor Swift";
let member2BestFood = "Pizza";
let member2Restaurant = "Five Guys";
let member2PitBull = "They're adorable!";
let member2Basketball = "Kobe";
let member2Future = "Traveling the world";


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


// ============================================
// LOG TO CONSOLE (for testing)
// ============================================

console.log("Team loaded!");
console.log("Total members:", totalMembers);
console.log("Total age:", totalAge);
console.log("Average age:", averageAge);
```

---

## 📝 Step-by-Step Instructions

### Phase 1: Setup 

1. **Create your files** and copy the starter code
2. **Open in Live Server** to see it working
3. **Test it** - you should see Alex, Jordan, and Taylor's info
4. **Add your team member names** at the top of script.js

### Phase 2: Add Your Team's Real Info

1. **Each team member fills in their own section:**
   ```javascript
   let member1Name = "Your Real Name";
   let member1Age = 15;  // Your real age
   let member1Game = "Your favorite video game";
   let member1Music = "Your favorite song or artist";
   // ... and so on
   ```

2. **Take turns typing** - one person per member section

3. **Be honest and creative!** These are supposed to be fun answers

4. **Save and refresh** after each person to see the changes

5. **If you have 3 members:**
   - Copy and paste one of the member-card sections in HTML
   - Change all the numbers to 3 (member3-name, member3-age, etc.)
   - Update `totalMembers` to 3
   - Add `+ member3Age` to the totalAge calculation

### Phase 3: Customize the Style

**Make it look like YOUR team!**

**Quick Changes:**

Change the main gradient colors:
```css
body {
    background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
    /* Try different colors! */
}
```

Change the stats box colors:
```css
.team-stats {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
}
```

**Add a team name or motto** - add this to HTML right after the h1:
```html
<p class="team-motto">"Code Hard, Play Harder"</p>
```

Style it in CSS:
```css
.team-motto {
    text-align: center;
    font-size: 24px;
    color: #667eea;
    font-style: italic;
    margin-bottom: 30px;
}
```
## Optional to try this - this is getting into logic we have NOT explored yet, so feel free to skip it.  Also, it's not that interesting because there are only two to three members, but if you're curious, see what it does... 

### Phase 4: Add Fun Calculations!

**Make your stats section more interesting!**

**Example 1: Count who picked Kobe vs LeBron**
```javascript
// After your other team calculations, add:
let kobeCount = 0;
let lebronCount = 0;

// Count each person
if (member1Basketball === "Kobe" || member1Basketball === "Kobe forever") {
    kobeCount++;
} else {
    lebronCount++;
}

if (member2Basketball === "Kobe" || member2Basketball === "Kobe forever") {
    kobeCount++;
} else {
    lebronCount++;
}

if (member3Basketball === "Kobe" || member3Basketball === "Kobe forever") {
    kobeCount++;
} else {
    lebronCount++;
}

// Display it
document.getElementById('kobe-count').textContent = kobeCount;
document.getElementById('lebron-count').textContent = lebronCount;
```

Add to HTML in team-stats:
```html
<p>Team Kobe: <span id="kobe-count">0</span> | Team LeBron: <span id="lebron-count">0</span></p>
```

**Example 2: Count who thinks pit bulls are scary**
```javascript
let scaredCount = 0;
let notScaredCount = 0;

// Check each person (look for "yes" or "no" in their answer)
if (member1PitBull.toLowerCase().includes("yes") || member1PitBull.toLowerCase().includes("little")) {
    scaredCount++;
} else {
    notScaredCount++;
}

// ... repeat for member2 and member3

document.getElementById('scared-count').textContent = scaredCount;
document.getElementById('notscared-count').textContent = notScaredCount;
```

**Example 3: How old will everyone be in 5 years?**
```javascript
let member1AgeFuture = member1Age + 5;
let member2AgeFuture = member2Age + 5;
let member3AgeFuture = member3Age + 5;

// Display in each person's card (add to HTML first):
document.getElementById('member1-age-future').textContent = member1AgeFuture;
```

Add to each member's HTML:
```html
<p><strong>Age in 5 Years:</strong> <span id="member1-age-future">0</span></p>
```

**Example 4: Find the most popular restaurant**
```javascript
// This is advanced, but you can try!
console.log("Restaurant votes:");
console.log(member1Name + " votes: " + member1Restaurant);
console.log(member2Name + " votes: " + member2Restaurant);
console.log(member3Name + " votes: " + member3Restaurant);

// You can manually see which one appears most and add it to your page
```

---

## More Fun Ideas!

### 1. **Add Your Own Questions**

Don't like one of the questions? Change it! Here's how:

**In HTML**, change the question:
```html
<p><strong>🎬 Favorite Movie:</strong> <span id="member1-movie">?</span></p>
```

**In JavaScript**, add the variable:
```javascript
let member1Movie = "Spider-Man: Into the Spider-Verse";
```

**Display it:**
```javascript
document.getElementById('member1-movie').textContent = member1Movie;
```

**Other question ideas:**
- Favorite TikToker or YouTuber
- Dream car
- Favorite season (winter, spring, summer, fall)
- Cats or dogs?
- Pineapple on pizza? (Yes/No)
- Dream vacation spot
- Favorite subject in school
- If you could have any superpower?

### 2. **Make Cards Interactive**

Add this to your CSS:
```css
.member-card:hover {
    transform: scale(1.02) rotate(1deg);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}
```

### 3. **Add Profile Pictures (Emojis)**

Add at the top of each member card HTML:
```html
<div class="profile-emoji">🎮</div>
```

Style it:
```css
.profile-emoji {
    font-size: 80px;
    text-align: center;
    margin-bottom: 15px;
}
```

Let each person pick their own emoji!

### 4. **Add a "Team Agreements" Section**

Show where your team agrees:

```javascript
// Check if everyone likes LeBron
let allLikeLebron = false;
if (lebronCount === totalMembers) {
    allLikeLebron = true;
}

// Display it
if (allLikeLebron) {
    document.getElementById('team-agreement').textContent = "We all agree: LeBron is the GOAT! 🐐";
}
```


---

## Testing Checklist

Before you finish, check:

- [ ] All team member names display correctly
- [ ] All questions are answered for each person
- [ ] Total members count is correct
- [ ] Total age and average age are correct
- [ ] CSS looks good and colors work
- [ ] No spelling errors
- [ ] Page looks good on different screen sizes
- [ ] All team members have their names in the top comment

---

## Tips for Success

**Answering Questions:**
- Be creative! These should show your personality
- It's okay to be funny or silly
- Be honest - this is about getting to know your team
- If you don't have a favorite video game, pick any game you've played or heard of

**Working Together:**
- Take turns at the keyboard - rotate every 20 minutes
- Help each other come up with answers
- Save your work every 10 minutes!
- Have fun with it - this should be enjoyable!

**If Something Doesn't Work:**
- Check the console (F12) for error messages
- Make sure `id` names match exactly in HTML and JavaScript
- Check for typos in variable names
- Make sure quotation marks match (`"` not `"` or `'`)
- Ask a teammate to double-check your code

---

## What to Submit

1. All three files saved (HTML, CSS, JS)
2. Team member names at the top of script.js
3. All questions answered for each team member
4. At least 3 calculations in the team stats
5. Custom styling that makes it YOUR team's page
6. Be ready to present to the class!
7. Push to one of your teammates GitHub repo inside the main htmlCssJavaScript folder, in a subfolder called **"teamProfilePage"**

---

## Presentation

**Presentation is 3-4 mins:**
- Introduce your team members
- Show off your design/styling
- Share one funny or interesting answer from your team
- Point out the coolest calculation or stat

**Things to mention:**
- What was the hardest part?
- What was the most fun part?
- What would you add if you had more time?

---

## Challenge Extensions

**If you finish early:**

- Add more questions (favorite movie, dream job, etc.)
- Calculate total years until everyone graduates
- Count team agreements (how many picked the same restaurant?)
- Add more emojis throughout

---

Good luck, and have fun getting to know your teammates!