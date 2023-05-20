// import React from "react";
// import { render } from "@testing-library/react";
// import App from "./App";

// it("renders without crashing", function () {
//   render(<App />);
// });
// Placeholder
test.skip("blank test", () => {
  expect(gameSlice.reducer(undefined, { type: undefined })).toEqual({
    players: [],
    currentPlayer: [],
    winner: [],
  });
});
