import React from 'react';
import { useSelector } from 'react-redux';
import Books from './books';
import AddBook from './addBook';

const BookContainer = () => {
  const books = useSelector((state) => state.bookReducer);

  return (
    <>
      { books.map((book) => <Books data={book} key={book.id} />)}
      <AddBook />
    </>
  );
};

export default BookContainer;
