import React from 'react';
import PropTypes from 'prop-types';
import Remove from './button';

const Books = (props) => {
  const { data: { title, category } } = props;

  return (
    <div className="book-list">
      <ul>
        <li>
          <span className="title">{ title }</span>
          <span> - </span>
          <span className="title">{ category }</span>
          <Remove />
        </li>
      </ul>
    </div>
  );
};

Books.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Books;
