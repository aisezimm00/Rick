import React, { useEffect, useState } from 'react';
import './App.css';

function Rick() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <div className="card-container">
        {characters.map((character) => (
          <div className="card" key={character.id}>
            <img src={character.image} alt={character.name} className="card-image" />
            <div className="card-content">
              <h2>{character.name}</h2>
              <p><strong>Status:</strong> {character.status} - {character.species}</p>
              <p><strong>Last location:</strong> {character.location.name}</p>
              <p><strong>First seen in:</strong> {character.origin.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rick;