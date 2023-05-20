import { createSlice } from "@reduxjs/toolkit";

const player2Slice = createSlice({
  name: "player2",
  initialState: {
    player: [],
    cards: [],
    war: [],
    battle: [],
    collection: [],
  },
  reducers: {
    addPlayer: (state, action) => {
      state.player = action.payload;
    },
    removePlayer: (state, action) => {
      state.player = [];
    },
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards.shift();
    },
    addToWar: (state, action) => {
      state.war.push(action.payload);
    },
    removeFromWar: (state, action) => {
      state.war = [];
    },
    addToBattle: (state, action) => {
      state.battle.push(action.payload);
    },
    removeFromBattle: (state, action) => {
      state.battle = [];
    },
    addToCollection: (state, action) => {
      state.collection.push(action.payload);
    },
    removeFromCollection: (state, action) => {
      state.collection = [];
    },
    endGame: (state, action) => {
      state.cards = [];
      state.war = [];
      state.battle = [];
      state.collection = [];
    },
  },
});

export const player2Actions = player2Slice.actions;

export default player2Slice;
