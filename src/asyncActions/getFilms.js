import axios from 'axios';
import {addFilms} from '../redux/actions';

export const getFilms = page => {
  return dispatch => {
    axios
      .get('https://swapi.dev/api/films/')
      .then(response => dispatch(addFilms(response.data)))
      .catch(error => console.error(error));
  };
};
