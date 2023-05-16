import React, { useEffect, useState } from 'react';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState({});
  const [search, setSearch] = useState('');

  //DIDMount
  // useEffect(() => {
  //   setIsLoading(true);
  //   // aqui hago la peticion
  //   fetch(`${baseUrl}/${search}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCharacter({
  //         name: data.name,
  //         img: data.sprites.front_default,
  //       });
  //       setIsLoading(false);
  //     });
  // }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const findPokemon = () => {
    fetch(`${baseUrl}/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter({
          name: data.name,
          img: data.sprites.front_default,
        });
      });
  };
  console.log(character);

  return (
    <>
      <input onChange={handleSearch}></input>
      <button onClick={() => findPokemon()}>Search</button>
      <h1>{character.name}</h1>
      <img src={character.img} alt="" />
    </>
  );
}
