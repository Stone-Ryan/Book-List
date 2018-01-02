import { combineReducers } from 'redux';
import BooksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
});

export default rootReducer;
