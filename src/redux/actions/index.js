import {SWAPI_FILMS, SWAPI_PEOPLE} from '../../types/types';

export const addFilms = payload => ({
  type: SWAPI_FILMS,
  payload,
});

export const addPeople = payload => ({
  type: SWAPI_PEOPLE,
  payload,
});
