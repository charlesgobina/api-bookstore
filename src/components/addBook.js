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
    <div className="add-wrapper">
      <h2 className="add-title">Add new book</h2>
      <form className="add-form d-flex">
        <input
          required
          type="text"
          className="input-title"
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          required
          className="input-category"
          type="text"
          placeholder="Add category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          className="input-button"
          onClick={(e) => setToStore(e)}
        >
          Add
        </button>
      </form>
      { emptyFields ? <small>Please fill in all fields</small>
        : '' }
    </div>
  );
};

export default AddBook;
