import { connect } from "react-redux";
import { setSearchField, requestPokemons } from "../actions";
import MainPage from "../components/MainPage/MainPage";
import { Pokemon } from "../actions";
import { ChangeEvent } from "react";

interface IRootState {
  searchPokemons: {
    searchField: string;
  };
  requestPokemonsReducer: {
    isPending: boolean;
    pokemons: Pokemon[];
    error?: string | Error;
  };
}

interface IAppProps {
  searchField: string;
  isPending: boolean;
  pokemons: Pokemon[];
  error?: string | Error;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => any;
  onRequestPokemons: () => any;
}

const mapStateToProps = (state: IRootState) => {
  return {
    searchField: state.searchPokemons.searchField,
    isPending: state.requestPokemonsReducer.isPending,
    pokemons: state.requestPokemonsReducer.pokemons,
    error: state.requestPokemonsReducer.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.target.value)),
    onRequestPokemons: () => dispatch(requestPokemons()),
  };
};

function App(props: IAppProps) {
  return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
