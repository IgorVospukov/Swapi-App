import {SWAPI_FILMS} from '../../types/types';

const INITIAL_STATE = {mydata: []};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWAPI_FILMS:
      return {
        ...state,
        mydata: [...new Set(state.mydata), ...new Set(action.payload.results)],
      };
    default:
      return state;
  }
};
