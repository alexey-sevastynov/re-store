const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOLS_LOADED":
      return {
        books: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
