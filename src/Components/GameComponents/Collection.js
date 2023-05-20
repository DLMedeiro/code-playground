import React from "react";
import { useSelector } from "react-redux";

function Collection({ player }) {
  const player1Collection = useSelector((state) => state.player1.collection);
  const player2Collection = useSelector((state) => state.player2.collection);

  return (
    <div>
      {player === "Player1" ? (
        <div className="inner-container">
          {player1Collection.length > 0 ? (
            <div
              className="playerCard"
              style={{
                backgroundImage: `url(${
                  player1Collection[player1Collection.length - 1].image_url
                })`,
              }}
            ></div>
          ) : (
            <div className="playerCard card-placeholder"></div>
          )}
        </div>
      ) : (
        <div className="inner-container">
          {player2Collection.length > 0 ? (
            <div
              className="playerCard"
              style={{
                backgroundImage: `url(${
                  player2Collection[player2Collection.length - 1].image_url
                })`,
              }}
            ></div>
          ) : (
            <div className="playerCard card-placeholder"></div>
          )}
        </div>
      )}
    </div>
  );
}

export default Collection;
