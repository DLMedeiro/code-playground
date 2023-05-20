# WAR Card Game

[PLAY NOW!](https://warcardgame-frontend.onrender.com/)

## Overview 
The WAR Card Game is a two-player card game with the goal of collecting all 52 cards.  This application is intended to closely replicate game play through a website format, allowing two users to play against one another on a single device, or against a computer.

## Game Details
__Objective:__ 
    The objective of the game is to collect all cards.
    
__Number of Players:__ 2 players

__Number of Cards:__ Standard 52 card deck
    
__Card Ranking:__ Ace (high), King, Queen, Jack, 10, 9, 8, 7, 6, 5, 4, 3, and 2 (low).

__The Deal:__ Each player receives 26 cards, placed face down on their section of the board.

__Game Play:__ Players flip a single card from their hand, placing it face up in the center of the table.  The player with the higher card wins and collects both cards, returning the cards to their personal deck.  If players flip the same card, the a battle begins.

 __Battle:__ During a battle, each player places four more cards on the table. Whoever’s fourth card is the highest is the winner, and they collect all the cards (10 in total), and the next round begins. If the fourth cards are also the same, repeat the previous instructions until there is a winner.  If a player does not have enough cards for the battle, that player forfeits their remaining cards to their opponent and the game is over.
   
__Winning the Game:__ The player that collects all 52 cards into their deck wins the game.
   
## Program Details

### Tech Stack

Full-stack application with a heavy focus on front-end features.  

__Front-end:__ React, Redux, Bootstrap, CSS (Run with ```npm start```)

__Back-end:__ Node JS, Express, PostgreSQL (Run with ```npm start```)

__Testing:__ React Testing Library (Run with ```npm test``` *add file name to run specific tests*) *In Process*

### Data

The [Deck of Cards API](https://www.deckofcardsapi.com/) will generate all information regarding card data.

Card values are based on the card face value:
* Aces = 14
* Kings = 13
* Queens = 12
* Jacks = 11
* All remaining cards will keep their face value

The backend database will hold card data for the deck of cards being used in a game, and user information for those who create accounts.  

### Sensitive Information

If players choose to create an account, passwords will be secured through Bcrypt.  

Logged in players will have access to their profile information, where they can edit details regarding their account *In process*

Only users will have access to their specific account information.

User specific functionality will not be accessible to Non-registered users.

### User Story

As a player I should be able to:
1.	Execute game play with or without an Account
1.  Have access to game instructions with or without an Account
1.	Create an account
1.	Edit or delete my account only after account creation *In process* 
1.	Play with others on my device or against a computer

###  Model Design
#### useraccounts: 

Stores a player’s profile information. 

* username
* password
* first_name
* last_name
* email

#### cards: 

Stores card instance.

* **code:** Represents the abbreviated code for the card value and suit (Example: 5 of Hearts = 5H)

* **card_value:** assigned value provided by the deck of cards API.  This data is used to create the **game_value** for each card.

* **image_url:** Provides the card image correlated to the code

* **player:** At the start of each game, players are dealt 26 cards at random.  The players identified in this column represent the initial state of the game and where cards are located.

* **game_value:** Based on the card face value Aces = 14, Kings = 13, Queens = 12, Jacks = 11, and all remaining cards will keep their face value.


## Future Enhancements
1.  Testing
1.  Profile view and editing capabilities
1.  Additional Game animation
1.	Further updates to responsiveness / Formatting updates
1.	Additional Game stats
1.  Front-end Component Structure