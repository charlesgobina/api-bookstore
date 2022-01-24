import React from 'react';

const AddBook = () => (
  <div>
    <h2>Add a book</h2>
    <form>
      <input type="text" placeholder="Add a Book" />
      <input type="text" placeholder="Add a Category" />
      <button type="button">Add</button>
    </form>
  </div>
);

export default AddBook;
