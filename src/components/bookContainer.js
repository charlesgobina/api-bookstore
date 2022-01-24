import React from 'react';
import Books from './books';
import AddBook from './addBook';

const BookContainer = () => {
  const books = [
    {
      id: 1,
      title: 'Him',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Doctor Strange',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'The Four hour Work week',
      category: 'Productivity',
    },
  ];

  console.log(books[0]);

  return (
    <>
      { books.map((book) => <Books data={book} key={book.id} />)}
      <AddBook />
    </>
  );
};

export default BookContainer;
