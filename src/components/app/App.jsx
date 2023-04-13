import React from "react";
import "./app.css";
import withBookstoreService from "../hoc/with-bookstore-service.js";

function App({ BookstoreService }) {
  console.log(BookstoreService.getBooks());
  return <div>App</div>;
}

export default withBookstoreService()(App);
