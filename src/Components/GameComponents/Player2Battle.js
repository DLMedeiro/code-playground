import React from "react";
import { useSelector } from "react-redux";

function Player2Battle({ battleStartingIndex }) {
  const player2War = useSelector((state) => state.player2.war);
  const player2Battle = useSelector((state) => state.player2.battle);

  return (
    <div className="column-bottom">
      {/* Player 2 Portion */}
      <div>
        {player2Battle.length >= battleStartingIndex + 1 ? (
          <div
            className="playerCard card-1-right inlineBlock-battle"
            style={{
              backgroundImage: `url(${player2Battle[battleStartingIndex].image_url})`,
            }}
          ></div>
        ) : (
          <div className="card-placeholder-1 inlineBlock-battle"> </div>
        )}

        {player2Battle.length >= battleStartingIndex + 2 ? (
          <div
            className="playerCard card-2-right inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player2Battle[battleStartingIndex + 1].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className="card-placeholder-2 inlineBlock-battle"></div>
        )}
        {player2Battle.length >= battleStartingIndex + 3 ? (
          <div
            className="playerCard card-3-right inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player2Battle[battleStartingIndex + 2].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className="card-placeholder-3 inlineBlock-battle"></div>
        )}
        {player2War.length > 1 && player2Battle.length >= 3 ? (
          <div
            className="playerCard card-4-right inlineBlock-battle"
            style={{
              backgroundImage: `url(${player2War[1].image_url})`,
            }}
          ></div>
        ) : (
          <div className="card-placeholder-4 inlineBlock-battle"> </div>
        )}

        {player2Battle.length >= battleStartingIndex + 4 ? (
          <div
            className="playerCard card-1-right inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player2Battle[battleStartingIndex + 3].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-1 inlineBlock-battle"></div>
        )}
        {player2Battle.length >= battleStartingIndex + 5 ? (
          <div
            className="playerCard card-2-right inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player2Battle[battleStartingIndex + 4].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-2 inlineBlock-battle"></div>
        )}
        {player2Battle.length >= battleStartingIndex + 6 ? (
          <div
            className="playerCard card-3-right inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player2Battle[battleStartingIndex + 5].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-3 inlineBlock-battle"></div>
        )}
        {player2War.length > 2 && player2Battle.length >= 6 ? (
          <div
            className="playerCard card-4-right inlineBlock-battle"
            style={{
              backgroundImage: `url(${player2War[2].image_url})`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-4 inlineBlock-battle"></div>
        )}
      </div>
    </div>
  );
}

export default Player2Battle;
