import React from 'react';
import PropTypes from 'prop-types';
import Remove from './button';

const Books = (props) => {
  const { data: { id, title, author } } = props;

  return (
    <div className="book-list">
      <ul>
        <li>
          <span className="title">{ title }</span>
          <span> - </span>
          <span className="title">{ author }</span>
          <Remove id={id} />
        </li>
      </ul>
    </div>
  );
};

Books.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Books;
