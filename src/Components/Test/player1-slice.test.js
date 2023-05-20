import player1Slice from "../../store/player1-slice";
import { player1Actions } from "../../store/player1-slice";

const card = {
  card_value: "3",
  code: "3S",
  game_value: 3,
  id: 6267,
  image_url: "https://deckofcardsapi.com/static/img/3S.png",
  player: 2,
};
const card2 = {
  card_value: "10",
  code: "0C",
  game_value: 10,
  id: 6268,
  image_url: "https://deckofcardsapi.com/static/img/0C.png",
  player: 1,
};
// Add and remove players
test("should return the initial state", () => {
  expect(player1Slice.reducer(undefined, { type: undefined })).toEqual({
    player: [],
    cards: [],
    war: [],
    battle: [],
    collection: [],
  });
});

test("should add a player", () => {
  const previousState = {
    player: [],
    cards: [],
    war: [],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.addPlayer("Player1"))
  ).toEqual({
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [],
  });
});

test("should handle removing a player", () => {
  const previousState = {
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.removePlayer())
  ).toEqual({
    player: [],
    cards: [],
    war: [],
    battle: [],
    collection: [],
  });
});

// Add and remove Card
test("should add a card", () => {
  const previousState = {
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.addCard(card))
  ).toEqual({
    player: "Player1",
    cards: [card],
    war: [],
    battle: [],
    collection: [],
  });
});
test("should add multiple cards", () => {
  const previousState = {
    player: "Player1",
    cards: [card],
    war: [],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.addCard(card2))
  ).toEqual({
    player: "Player1",
    cards: [card, card2],
    war: [],
    battle: [],
    collection: [],
  });
});

test("should remove a single card", () => {
  const previousState = {
    player: "Player1",
    cards: [card],
    war: [],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.removeCard())
  ).toEqual({
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [],
  });
});

// Add and remove Card from War
test("should add a card to war", () => {
  const previousState = {
    player: "Player1",
    cards: [card],
    war: [],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.addToWar(card2))
  ).toEqual({
    player: "Player1",
    cards: [card],
    war: [card2],
    battle: [],
    collection: [],
  });
});

test("should remove a card from war", () => {
  const previousState = {
    player: "Player1",
    cards: [card],
    war: [card2],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.removeFromWar())
  ).toEqual({
    player: "Player1",
    cards: [card],
    war: [],
    battle: [],
    collection: [],
  });
});

// Add and remove Card from battle
test("should add a card to battle", () => {
  const previousState = {
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.addToBattle(card))
  ).toEqual({
    player: "Player1",
    cards: [],
    war: [],
    battle: [card],
    collection: [],
  });
});
test("should add multiple cards to Battle", () => {
  const previousState = {
    player: "Player1",
    cards: [],
    war: [],
    battle: [card],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.addToBattle(card2))
  ).toEqual({
    player: "Player1",
    cards: [],
    war: [],
    battle: [card, card2],
    collection: [],
  });
});

test("should remove all cards from battle", () => {
  const previousState = {
    player: "Player1",
    cards: [],
    war: [],
    battle: [card, card2],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.removeFromBattle())
  ).toEqual({
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [],
  });
});

// Add and remove Card from collection
test("should add a card to collection", () => {
  const previousState = {
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.addToCollection(card))
  ).toEqual({
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [card],
  });
});
test("should add multiple cards to Collection", () => {
  const previousState = {
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [card],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.addToCollection(card2))
  ).toEqual({
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [card, card2],
  });
});

test("should remove all cards from collection", () => {
  const previousState = {
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [card, card2],
  };

  expect(
    player1Slice.reducer(previousState, player1Actions.removeFromCollection())
  ).toEqual({
    player: "Player1",
    cards: [],
    war: [],
    battle: [],
    collection: [],
  });
});

// End Game
test("should end game and remove all card data", () => {
  const previousState = {
    player: "Player1",
    cards: [card, card2],
    war: [card],
    battle: [card2],
    collection: [card],
  };

  expect(player1Slice.reducer(previousState, player1Actions.endGame())).toEqual(
    {
      player: "Player1",
      cards: [],
      war: [],
      battle: [],
      collection: [],
    }
  );
});
