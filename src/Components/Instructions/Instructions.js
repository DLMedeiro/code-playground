import React from "react";
import { Card, CardBody } from "reactstrap";

function Instructions() {
  return (
    // <div className="modal-body">
    <Card>
      <CardBody className="instructions">
        <p>
          <b>Objective: </b>The objective of the game is to collect all cards.
        </p>
        <p>
          <b>Number of Players: </b>2 players
        </p>
        <p>
          <b>Number of Cards: </b>Standard 52 card deck
        </p>
        <p>
          <b>Card Ranking: </b>Ace (high), King, Queen, Jack, 10, 9, 8, 7, 6, 5,
          4, 3, and 2 (low).
        </p>
        <p>
          <b>The Deal: </b>Each player receives 26 cards, placed face down on
          their section of the board.
        </p>

        <b>Game Play:</b>
        <p>
          Players flip a single card from their hand, placing it face up in the
          center of the table.
        </p>
        <p>
          The player with the higher card wins and collects both cards,
          returning the cards to their personal deck.
        </p>
        <p>If players flip the same card, a battle begins.</p>

        <b>Battle:</b>
        <p>
          During a battle, each player places four more cards on the table.
          Whoever’s fourth card is the highest is the winner, and they collect
          all the cards (10 in total), and the next round begins. If the fourth
          cards are also the same, repeat the previous instructions until there
          is a winner.
        </p>
        <p>
          If a player does not have enough cards for the battle, that player
          forfeits their remaining cards to their opponent and the game is over.
        </p>

        <b>Winning the Game:</b>
        <p>
          The player that collects all 52 cards into their deck wins the game.
        </p>
      </CardBody>
    </Card>
    // </div>
  );
}

export default Instructions;

// Rules modified from: https://gamerules.com/rules/war-card-game/
