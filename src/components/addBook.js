import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [emptyFields, setEmptyFields] = useState(false);

  const setToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
      const booky = {
        id: uuidv4(),
        title,
        author,
      };

      dispatch(addBook(booky));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <h2>Add a book</h2>
      <form>
        <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Add a Book" />
        <input value={author} type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="Add an Authur" />
        <button onClick={(e) => setToStore(e)} type="submit">Add</button>
      </form>
      { emptyFields ? <small>Please fill in all required fields</small> : '' }
    </div>
  );
};

export default AddBook;
