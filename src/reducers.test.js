import * as reducers from "./reducers";
import * as types from "./constants";

const initialStateSearch = {
  searchField: "",
};

describe("searchPokemons reducer", () => {
  it("should return the initial state", () => {
    expect(reducers.searchPokemons(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchPokemons(initialStateSearch, {
        type: types.CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

const initialStatePokemons = {
  isPending: false,
  pokemons: [],
  error: "",
};

describe("requestPokemonsReducer reducer", () => {
  it("should return the initial state", () => {
    expect(reducers.requestPokemonsReducer(undefined, {})).toEqual({
      isPending: false,
      pokemons: [],
      error: "",
    });
  });

  it("should handle REQUEST_POKEMONS_PENDING action", () => {
    expect(
      reducers.requestPokemonsReducer(initialStatePokemons, {
        type: types.REQUEST_POKEMONS_PENDING,
      })
    ).toEqual({
      isPending: true,
      pokemons: [],
      error: "",
    });
  });

  it("should handle REQUEST_POKEMONS_SUCCESS action", () => {
    expect(
      reducers.requestPokemonsReducer(initialStatePokemons, {
        type: types.REQUEST_POKEMONS_SUCCESS,
        payload: {"results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        }]}
      })
    ).toEqual({
      isPending: false,
      pokemons: [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        }],
      error: "",
    });
  });

  it("should handle REQUEST_POKEMONS_FAILED action", () => {
    expect(
      reducers.requestPokemonsReducer(initialStatePokemons, {
        type: types.REQUEST_POKEMONS_FAILED,
        payload: "IMPOOOSSIBLEEE!!",
      })
    ).toEqual({
      isPending: false,
      pokemons: [],
      error: "IMPOOOSSIBLEEE!!",
    });
  });
});
