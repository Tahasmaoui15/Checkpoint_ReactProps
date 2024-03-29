import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const handleClick= () => alert (`Information about ${name} will be added soon.`)
  return (
    // Inline styling
    <Card style={{display: "flex", flexWrap: "wrap", width: "18rem", margin: "10px", border: "2px solid", borderRadius: "8px", cursor:"pointer" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </Card.Text>
        {/* Adding a button to the Cards from ReactBootstrap */}
        <Button onClick={handleClick}> More </Button>
      </Card.Body>
    </Card>
  );
};

export default Player;
