import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: { players: [], currentPlayer: [], winner: [] },
  reducers: {
    addPlayer: (state, action) => {
      state.players.push(action.payload);
    },
    removePlayers: (state, action) => {
      state.players = [];
    },
    setCurrentPlayer: (state, action) => {
      state.currentPlayer = action.payload;
    },
    removeCurrentPlayer: (state, action) => {
      state.currentPlayer = [];
    },
    addWinner: (state, action) => {
      state.winner.push(action.payload);
    },
    removeWinner: (state, action) => {
      state.winner = [];
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
