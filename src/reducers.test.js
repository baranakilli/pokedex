import * as reducers from './reducers';
import * as types from './constants';

const initialStateSearch = {
  searchField: '',
};

describe('searchRobots reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: types.CHANGE_SEARCH_FIELD,
        payload: 'abc',
      })
    ).toEqual({ searchField: 'abc' });
  });
});

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
};

describe('requestRobotsReducer reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.requestRobotsReducer(undefined, {})).toEqual({
      isPending: false,
      robots: [],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: types.REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      isPending: true,
      robots: [],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: [{
          id: 123,
          name: 'Peter',
          email: 'peter.spidey@gmail.com',
        }],
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 123,
          name: 'Peter',
          email: 'peter.spidey@gmail.com',
        },
      ],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: 'IMPOOOSSIBLEEE!!',
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'IMPOOOSSIBLEEE!!',
    });
  });
});
