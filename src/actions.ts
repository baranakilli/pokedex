import { getData } from "./utils/data.utils";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_POKEMONS_PENDING,
  REQUEST_POKEMONS_SUCCESS,
  REQUEST_POKEMONS_FAILED,
} from "./constants";

export type Pokemon = {
  name: string;
  url: string;
};

export const setSearchField = (text: string) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestPokemons = () => (dispatch: any) => {
  dispatch({ type: REQUEST_POKEMONS_PENDING });
  return getData<Pokemon[]>("https://pokeapi.co/api/v2/pokemon/?limit=42")
    .then((data) => dispatch({ type: REQUEST_POKEMONS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_POKEMONS_FAILED, payload: error })
    );
};
