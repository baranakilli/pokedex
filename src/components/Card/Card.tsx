import { useEffect, useState } from "react";
import { Pokemon } from "../../actions";

interface PokemonData {
  weight: number;
  height: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

const Card = (props: Pokemon) => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { name, url } = props;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: PokemonData) => {
        setPokemon(data);
        setImageUrl(data.sprites.other["official-artwork"].front_default);
      });
  }, [url]);

  return (
    <div className="bg-washed-yellow  br3 ma2 ba bw2 b--red shadow-5 inline-flex flex-column items-center">
      <img
        alt={`pokemon ${name}`}
        width={"200px"}
        height={"200px"}
        className="pv3"
        src={imageUrl}
      />
      <div style={{ width: "250px" }}>
        <h2 className="pokemon-title ttc white ma0 pb3 bg-red h-100">{name}</h2>
        <div className="line">
          <div className="circle">
            <div className="inner-circle"></div>
          </div>
        </div>
        <p className="black pb2 pt3 fw6 mt0 mb2 bg-white">
          Weight: {pokemon?.weight}
          <br />
          Height: {pokemon?.height}
        </p>
      </div>
    </div>
  );
};

export default Card;
