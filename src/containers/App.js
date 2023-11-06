import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundy';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobotsReducer.isPending,
    robots: state.requestRobotsReducer.robots,
    error: state.requestRobotsReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

function App(props) {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const { searchField, onSearchChange, isPending, robots, error } = props;
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1 className="tc">LOADING..</h1>
  ) : error ? (
    <div>
      <h1 className="tc dark-red f-headline">ERROR</h1>
    </div>
  ) : (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
