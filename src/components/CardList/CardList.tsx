import Card from "../Card/Card";
import { Pokemon } from "../../actions";

type CardListProps = {
  pokemons: Pokemon[];
};

const CardList = ({ pokemons }: CardListProps) => {
  return (
    <>
      {pokemons.map((pokemon, index) => {
        return <Card key={index} name={pokemon.name} url={pokemon.url} />;
      })}
    </>
  );
};

export default CardList;
