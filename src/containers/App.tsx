import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage/MainPage';
import { Robot } from '../actions';
import { ChangeEvent } from 'react';

interface IRootState {
  searchRobots: {
    searchField: string;
  };
  requestRobotsReducer: {
    isPending: boolean;
    robots: Robot[];
    error?: string | Error;
  };
}

interface IAppProps {
  searchField: string;
  isPending: boolean;
  robots: Robot[];
  error?: string | Error;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => any;
  onRequestRobots: () => any;
}

const mapStateToProps = (state:  IRootState) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobotsReducer.isPending,
    robots: state.requestRobotsReducer.robots,
    error: state.requestRobotsReducer.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

function App(props: IAppProps) {
  return <MainPage {...props}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
