import { Cards, Title } from "../Component/Other";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export const Location = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchResult = async (id) => {
    const response = await fetch (
      `https://pokeapi.co/api/v2/location-area/${id}`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    try {
        fetchResult(id);
    } catch (error) {
        console.log(error)
    }
  }, [id]);

//   console.log(data);
//   console.log(data.pokemon_encounters)

  if (data.length <= 0) {
    return <h1>Loading..</h1>
  }
  return (
    <>
      <Cards>
        <Title name={data.name} />
        <button className="rounded bg-indigo-500 text-white p-4 w-full">
          location
        </button>
      </Cards>
      <div>
      {data.pokemon_encounters.map((location) => {
        return (
          <Cards>
            <Title name={location.pokemon.name} />
            <Link to={`./location/${location.id}`}></Link>
            <button className="rounded bg-indigo-500 text-white p-4 w-full">
              location
            </button>

          </Cards>
        );
      })}
      </div>
      
    </>
  );
};
