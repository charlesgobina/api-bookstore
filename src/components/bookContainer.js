import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './books';
import AddBook from './addBook';
import { fetchBooks } from '../redux/books/thunks';

const BookContainer = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      { books.length === 0 ? <p className="no-books">No books . . . .</p>
        : books.map((book) => <Books data={book} key={book.id} />)}
      <AddBook />
    </>
  );
};

export default BookContainer;
