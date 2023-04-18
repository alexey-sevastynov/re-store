const initialState = {
  books: [
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
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
