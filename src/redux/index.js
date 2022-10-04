import {createStore, combineReducers} from 'redux';
import {applyMiddleware} from 'redux';
import reduxthunk from 'redux-thunk';
import reducerFilms from './reducers/reducerFilms';
import reducerPeople from './reducers/reducerPeople';

const rootReducer = combineReducers({
  reducerFilms: reducerFilms,
  reducerPeople: reducerPeople,
});

export const store = createStore(rootReducer, applyMiddleware(reduxthunk));
