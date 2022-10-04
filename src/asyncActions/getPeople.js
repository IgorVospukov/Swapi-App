import axios from 'axios';
import {addPeople} from '../redux/actions';

export const getPeople = page => {
  return dispatch => {
    let url =
      page === undefined || null
        ? 'https://swapi.dev/api/people/'
        : `https://swapi.dev/api/people/?page=${page}`;
    axios
      .get(url)
      .then(response => dispatch(addPeople(response.data)))
      .catch(error => console.error(error));
  };
};
