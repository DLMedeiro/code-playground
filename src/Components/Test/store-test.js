import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store-test/user-slice";
import gameSlice from "./store-test/game-slice";
import cardSlice from "./store-test/cards-slice";
import player1Slice from "./store-test/player1-slice";
import player2Slice from "./store-test/player2-slice";

const storeTest = configureStore({
  reducer: {
    user: userSlice.reducer,
    game: gameSlice.reducer,
    cardDeck: cardSlice.reducer,
    player1: player1Slice.reducer,
    player2: player2Slice.reducer,
  },
});

export default storeTest;
