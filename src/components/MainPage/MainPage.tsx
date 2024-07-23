import { ChangeEvent, Component } from "react";
import Header from "../Header";
import SearchBox from "../SearchBox";
import Scroll from "../Scroll";
import ErrorBoundry from "../ErrorBoundry";
import CardList from "../CardList/CardList";
import "./MainPage.css";

import { Pokemon } from "../../actions";

interface MainPageProps {
  onRequestPokemons: () => void;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  pokemons: Pokemon[];
  searchField: string;
  isPending: boolean;
  error?: string | Error;
}

class MainPage extends Component<MainPageProps> {
  componentDidMount() {
    this.props.onRequestPokemons();
  }

  filterPokemons = () => {
    const { pokemons, searchField } = this.props;
    return pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending, error } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            {isPending ? (
              <h1 className="tc f1">LOADING..</h1>
            ) : error ? (
              <h1 className="tc dark-red">ERROR</h1>
            ) : (
              <CardList pokemons={this.filterPokemons()} />
            )}
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
