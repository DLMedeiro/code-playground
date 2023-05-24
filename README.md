# Welcome to the CodePlayground

It's messy, it's fun, It's how I learn

View at: https://pink-jellyfish.surge.sh

## Contents
### War Card Game
__Description__
Two-player card game 'War' built to closely replicate game play through a website format. Application allows two users to play against one another on a single device, or against a computer.
__Technologies__
Backend API: Node JS, Express, PostgreSQL. Frontend: React, Redux, Bootstrap, CSS.

[View Site](https://warcardgame-frontend.onrender.com/)

[View Source Code](https://github.com/DLMedeiro/war-frontend.git)

### Lights Out
__Description__
A logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off.
__Technologies__
React, JavaScript, CSS, HTML

[View Site](https://dlmedeiro.github.io/Lights-Out/)

[View Source Code](https://github.com/DLMedeiro/Lights-Out.git)

### Connect Four
__Description__
Two players alternate turns dropping a tile down a column until a player gets four-in-a-row (horiz, vert, or diag) or until board fills resulting in a tie.
__Technologies__
JavaScript, CSS, HTML

[View Site](https://dlmedeiro.github.io/Connect4-OO/)

[View Source Code](https://github.com/DLMedeiro/Connect4-OO.git)

### Memory Match
__Description__
Players are shown a collection of cards, face down, and can click on two cards at a time to reveal what’s underneath. The goal of the game is to match up all the pairs.
__Technologies__
JavaScript, CSS, HTML

[View Site](https://dlmedeiro.github.io/Springboard-MemoryGame/)

[View Source Code](https://github.com/DLMedeiro/Springboard-MemoryGame)

### Magic Eight Ball
__Description__
Simulation of the classic Magic Eight Ball.
__Technologies__
React, JavaScript, CSS, HTML

[View Site](https://dlmedeiro.github.io/Magic-Eight-Ball/)

[View Source Code](https://github.com/DLMedeiro/Magic-Eight-Ball.git)

### Deck of Cards
__Description__
Application that displays a deck of cards, one card at a time. Utilizes the Deck of Cards API for the creation of a full deck of cards. This project practices the use of useState and UseEffect.
__Technologies__
React, JavaScript, CSS, HTML

[View Site](https://dlmedeiro.github.io/Deck-of-Cards/)

[View Source Code](https://github.com/DLMedeiro/Deck-of-Cards.git)

### Action Tracker
__Description__
This application focuses on DOM manipulation and the utilization of local storage to track and save user 'todos'.
__Technologies__
JavaScript, CSS, HTML

[View Site](https://dlmedeiro.github.io/Springboard-ToDoApp/)

[View Source Code](https://github.com/DLMedeiro/Springboard-ToDoApp.git)

## Application Notes
To run locally: ```npm start```
To update project using Surge, run ```surge``` in the project directory and input the same domain already being used as the domain.

## Learnings
### Deployment of frontend with surge
```npm run build```
```cd build```
```cp index.html 200.html```
```surge```

### Running list of enhancement and notes
* User gets logged out when redirected to home page
* Create a dummy login / account
* optimize login / logout for navigation 
* Testing
    * Tests to incorporate: what happens when you log in, how long, what do you see if there is an error
* Profile view and editing capabilities
* Additional Game animation
* Further updates to responsiveness / Formatting updates
* Additional Game stats
* Front-end Component Structure