import React from "react";
import { useSelector } from "react-redux";

function Player1Battle({ battleStartingIndex }) {
  const player1War = useSelector((state) => state.player1.war);
  const player1Battle = useSelector((state) => state.player1.battle);

  return (
    <div className="column-bottom">
      <div>
        {player1Battle.length >= battleStartingIndex + 1 ? (
          <div
            className="playerCard card-1 inlineBlock-battle"
            style={{
              backgroundImage: `url(${player1Battle[battleStartingIndex].image_url})`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-1 inlineBlock-battle"></div>
        )}

        {player1Battle.length >= battleStartingIndex + 2 ? (
          <div
            className="playerCard card-2 inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player1Battle[battleStartingIndex + 1].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-2 inlineBlock-battle"></div>
        )}

        {player1Battle.length >= battleStartingIndex + 3 ? (
          <div
            className="playerCard card-3 inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player1Battle[battleStartingIndex + 2].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-3 inlineBlock-battle"></div>
        )}

        {player1War.length > 1 && player1Battle.length >= 3 ? (
          <div
            className="playerCard card-4 inlineBlock-battle"
            style={{
              backgroundImage: `url(${player1War[1].image_url})`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-4 inlineBlock-battle"></div>
        )}

        {player1Battle.length >= battleStartingIndex + 4 ? (
          <div
            className="playerCard card-1 inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player1Battle[battleStartingIndex + 3].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-1 inlineBlock-battle"></div>
        )}
        {player1Battle.length >= battleStartingIndex + 5 ? (
          <div
            className="playerCard card-2 inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player1Battle[battleStartingIndex + 4].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-2 inlineBlock-battle"></div>
        )}
        {player1Battle.length >= battleStartingIndex + 6 ? (
          <div
            className="playerCard card-3 inlineBlock-battle"
            style={{
              backgroundImage: `url(${
                player1Battle[battleStartingIndex + 5].image_url
              })`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-3 inlineBlock-battle"></div>
        )}
        {player1War.length > 2 && player1Battle.length >= 6 ? (
          <div
            className="playerCard card-4 inlineBlock-battle"
            style={{
              backgroundImage: `url(${player1War[2].image_url})`,
            }}
          ></div>
        ) : (
          <div className=" card-placeholder-4 inlineBlock-battle"></div>
        )}
      </div>
    </div>
  );
}

export default Player1Battle;
