import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRemove } from '../redux/books/thunks';

const Remove = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const removeFromStore = () => {
    dispatch(bookRemove(id));
  };
  return (
    <button className="bk-action" type="button" onClick={removeFromStore}>Remove</button>
  );
};

Remove.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Remove;
