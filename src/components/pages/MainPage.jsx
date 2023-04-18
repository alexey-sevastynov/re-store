import React from "react";
import BookList from "../bookList/BookList";

export default function MainPage() {
  const books = [
    {
      id: 1,
      title: "Robinson Crusoe",
      author: "Daniel Defoe",
    },
    {
      id: 2,
      title: "The Pilgrim’s Progress",
      author: "John Bunyan",
    },
    {
      id: 3,
      title: " Gulliver’s Travels",
      author: "Jonathan Swift",
    },
  ];

  return (
    <>
      <BookList books={books} />
    </>
  );
}
