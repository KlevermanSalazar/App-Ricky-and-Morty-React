import React, { useState, useEffect } from "react";
import { Card } from "../../UI/Card/Card";
import { SearchEngine } from "../../UI/SearchEngine/SearchEngine";
import './Main.css';

export const Main = () => {
  const [characters, setcharacters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getcharacters = () => {
      const url = "https://rickandmortyapi.com/api/character";
      fetch(url)
        .then((response) => response.json())
        .then((data) => setcharacters(data.results))
        .catch((error) => console.log(error));
    };
    getcharacters();
  }, []);

  const charactersFiltrers = characters.filter((character) =>
    character.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className="main">
      <SearchEngine filter={filter} setFilter={setFilter} />

      <section className="main__cards">
        {
          charactersFiltrers.length > 0 ? (
            charactersFiltrers.map((character) => (
              <Card key={character.id} character={character} />
            ))
          ) : 
          (
            <p>Character not found: "{filter}".
            </p>
          )
        }
      </section>
    </div>
  );
};