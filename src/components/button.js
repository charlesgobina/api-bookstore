import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Remove = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const removeFromStore = () => {
    dispatch(removeBook(id));
  };
  return (
    <button type="button" onClick={removeFromStore}>Remove</button>
  );
};

Remove.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Remove;
