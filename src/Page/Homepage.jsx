import { Chosen } from "../Component/Chosen";
import { PokemonList } from "../Component/PokemonList";
import { Pokemon } from "../Data/Pokemon";
import {
  Cards,
  Title,
  Image,
  ChosenChildren,
} from "../Component/Other";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
const Page = () => {
  console.log(Pokemon);

  const [data, setData] = useState([]);
  const [image, setImage] = useState(Pokemon[0].sprites.other.dream_world.front_default);
  const [title, setTitle] = useState(Pokemon[0].name);
  const url = "https://pokeapi.co/api/v2/pokemon";

  const pokeFetch = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const newdata = data.results.map((ele) => ele);
    const pokedataurl = newdata.map((ele) => ele.url);
    const pokemondata = pokedataurl.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    });
    const Datapokemon = await Promise.all(pokemondata);
    setData(Datapokemon);
  };
useEffect(() => {
    pokeFetch(url);
  }, []);
   



  return (
    <>
      <Chosen>
        <ChosenChildren>
            <Image url={image}/>
            <Title name={title}/>
        </ChosenChildren>
      </Chosen>
      <PokemonList>
        {data.map((pokemons) => {
            const handleClick = () => {
                setImage(pokemons.sprites.other.dream_world.front_default)
                setTitle(pokemons.name)
            }

          return (
            <Cards key={pokemons.name}>
              <Title name={pokemons.name} />
              <Image url={pokemons.sprites.other.dream_world.front_default} />
              <button className="rounded bg-indigo-500 text-white p-4 w-full" onClick={handleClick}>
                Pilih pokemon
              </button>
              <Link className="rounded bg-indigo-500 text-white p-4 w-full mt-5" to={`/location/${pokemons.id}`}>Pokemon Location</Link>
            </Cards>
          );
        })}
      </PokemonList>
    </>
  );
};

export default Page;
