import React from "react";
import { useSelector } from "react-redux";

function War({ player }) {
  const player1War = useSelector((state) => state.player1.war);

  const player2War = useSelector((state) => state.player2.war);

  return (
    <div className="inlineBlock">
      {player === "Player1" ? (
        <div>
          {player1War.length > 0 ? (
            <div
              className="playerCard"
              style={{
                backgroundImage: `url(${player1War[0].image_url})`,
              }}
            ></div>
          ) : (
            <div className="playerCard card-placeholder "></div>
          )}
        </div>
      ) : (
        <div>
          {player2War.length > 0 ? (
            <div
              className="playerCard"
              style={{
                backgroundImage: `url(${player2War[0].image_url})`,
              }}
            ></div>
          ) : (
            <div className="playerCard card-placeholder "></div>
          )}
        </div>
      )}
    </div>
  );
}

export default War;
