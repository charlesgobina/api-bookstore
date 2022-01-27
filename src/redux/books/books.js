const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];
let newState;
let filterState;

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      newState = [...state, action.payload];
      return newState;
    case REMOVE_BOOK:
      filterState = state.filter((stut) => stut.id !== action.payload);
      return filterState;
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
