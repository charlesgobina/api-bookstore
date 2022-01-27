import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { bookAdd } from '../redux/books/thunks';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [emptyFields, setEmptyFields] = useState(false);

  const setToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
      const booky = {
        id: uuidv4(),
        title,
        category,
      };

      dispatch(bookAdd(booky));
      setTitle('');
      setCategory('');
    }
  };

  return (
    <div>
      <h2>Add a book</h2>
      <form>
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a Book"
        />
        <input
          value={category}
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Add a Category"
        />
        <button
          onClick={(e) => setToStore(e)}
          type="submit"
        >
          Add
        </button>
      </form>
      { emptyFields ? <small>Please fill in all required fields</small> : '' }
    </div>
  );
};

export default AddBook;
