import gameSlice from "../../store/game-slice";
import { gameActions } from "../../store/game-slice";

// Add and remove players
test("should return the initial state", () => {
  expect(gameSlice.reducer(undefined, { type: undefined })).toEqual({
    players: [],
    currentPlayer: [],
    winner: [],
  });
});

test("should handle a player", () => {
  const previousState = {
    players: [],
    currentPlayer: [],
    winner: [],
  };

  expect(
    gameSlice.reducer(previousState, gameActions.addPlayer("Player1"))
  ).toEqual({ players: ["Player1"], currentPlayer: [], winner: [] });
});

test("should handle a second player", () => {
  const previousState = { players: ["Player1"], currentPlayer: [], winner: [] };
  expect(
    gameSlice.reducer(previousState, gameActions.addPlayer("Player2"))
  ).toEqual({ players: ["Player1", "Player2"], currentPlayer: [], winner: [] });
});

test("should remove all players", () => {
  const previousState = {
    players: ["Player1", "Player2"],
    currentPlayer: [],
    winner: [],
  };
  expect(gameSlice.reducer(previousState, gameActions.removePlayers())).toEqual(
    { players: [], currentPlayer: [], winner: [] }
  );
});

// Set and remove current players
test("should handle adding a current player", () => {
  const previousState = {
    players: ["Player1", "Player2"],
    currentPlayer: [],
    winner: [],
  };

  expect(
    gameSlice.reducer(previousState, gameActions.setCurrentPlayer("Player1"))
  ).toEqual({
    players: ["Player1", "Player2"],
    currentPlayer: "Player1",
    winner: [],
  });
});

test("should handle removing a current player", () => {
  const previousState = {
    players: ["Player1", "Player2"],
    currentPlayer: ["Player1"],
    winner: [],
  };

  expect(
    gameSlice.reducer(previousState, gameActions.removeCurrentPlayer())
  ).toEqual({ players: ["Player1", "Player2"], currentPlayer: [], winner: [] });
});

// Set and remove winner
test("should handle adding a winner", () => {
  const previousState = {
    players: ["Player1", "Player2"],
    currentPlayer: [],
    winner: [],
  };

  expect(
    gameSlice.reducer(previousState, gameActions.addWinner("Player2"))
  ).toEqual({
    players: ["Player1", "Player2"],
    currentPlayer: [],
    winner: ["Player2"],
  });
});

test("should handle removing a winner", () => {
  const previousState = {
    players: ["Player1", "Player2"],
    currentPlayer: [],
    winner: ["Player2"],
  };

  expect(gameSlice.reducer(previousState, gameActions.removeWinner())).toEqual({
    players: ["Player1", "Player2"],
    currentPlayer: [],
    winner: [],
  });
});
