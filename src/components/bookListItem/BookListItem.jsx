import React from "react";
import "./BookItemList.css";

export default function BookListItem({ book }) {
  const { title, author } = book;

  return (
    <>
      <span>{title}</span>
      <span>{author}</span>
    </>
  );
}
