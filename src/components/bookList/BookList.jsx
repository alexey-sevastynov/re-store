import React from "react";

import "./BookList.css";

import BookListItem from "../bookListItem/BookListItem";

import { connect } from "react-redux";

class BookList extends React.Component {
  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProp)(BookList);
