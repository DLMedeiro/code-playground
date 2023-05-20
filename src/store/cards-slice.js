import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WarApi from "../warApi";

export const fetchCards = createAsyncThunk("game/setup", async () => {
  const cards = await WarApi.getCards();
  return cards;
});
export const clearCards = createAsyncThunk("game/teardown", async () => {
  const cards = await WarApi.removeCards();
  return cards;
});

const cardSlice = createSlice({
  name: "cardDeck",
  initialState: {
    cardDeck: [],
    loading: false,
    gameReady: false,
  },
  reducers: {
    startGame: (state, action) => {
      state.gameReady = true;
    },
    endGame: (state, action) => {
      state.gameReady = false;
      state.cardDeck = [];
    },
  },
  extraReducers: {
    [fetchCards.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.cardDeck.push(action.payload);
    },
    [fetchCards.rejected]: (state, action) => {
      state.loading = false;
    },
    [clearCards.pending]: (state, action) => {
      state.loading = true;
    },
    [clearCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.cardDeck = [];
    },
    [clearCards.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const cardsActions = cardSlice.actions;

export default cardSlice;
