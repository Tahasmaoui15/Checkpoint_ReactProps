import React from "react";
import Player from "./Player";
import players from "./Players";

const PlayersList = () => {
  return (
    // Inline styling
    <div style={{ display: "flex", justifyContent:"center", backgroundColor: "whiteSmoke", margin: "2rem" }}>
          {/* Mapping through players */}
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
    </div>
  );
};

export default PlayersList;
