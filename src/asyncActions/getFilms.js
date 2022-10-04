import axios from 'axios';
import {addFilms} from '../redux/actions';

export const getFilms = page => {
  return dispatch => {
    let url =
      page === undefined
        ? 'https://swapi.dev/api/films/'
        : `https://swapi.dev/api/films/?page=${page}`;
    axios
      .get(url)
      .then(response => dispatch(addFilms(response.data)))
      .catch(error => console.error(error));
  };
};
