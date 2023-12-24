import { getData } from './utils/data.utils';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export type Robot = {
  id: string;
  name: string;
  email: string;

}

export const setSearchField = (text: string) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch: any) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return getData<Robot[]>('https://jsonplaceholder.typicode.com/users')
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
