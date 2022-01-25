const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === ADD_BOOK) {
    const newState = [...state, action.payload];
    return newState;
  }
  if (action.type === REMOVE_BOOK) {
    const uState = state.filter((stut) => stut.id !== action.payload);
    return uState;
  }
  return state;
};

export default reducer;
