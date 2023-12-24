import { ChangeEvent, Component } from 'react';
import Header from '../Header';
import SearchBox from '../SearchBox';
import CounterButton from '../CounterButton/CounterButton';
import Scroll from '../Scroll';
import ErrorBoundry from '../ErrorBoundry';
import CardList from '../CardList/CardList';
import './MainPage.css';

import { Robot } from '../../actions';

interface MainPageProps {
  onRequestRobots: () => void;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  robots: Robot[];
  searchField: string;
  isPending: boolean;
  error?: string | Error;
}

class MainPage extends Component<MainPageProps> {
  
  componentDidMount() {
    this.props.onRequestRobots();
  }
  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending, error } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <CounterButton />
        <Scroll>
          <ErrorBoundry>
            {isPending ? (
              <h1 className="tc f1">LOADING..</h1>
            ) : error ? (
              <h1 className="tc dark-red">ERROR</h1>
            ) : (
              <CardList robots={this.filterRobots()} />
            )}
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
