//The initial Global State values
export const initialState = {
  product: "Computers",
  file: null,
};

//The function that manipulates & returns state according to the action specified.
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT":
      return {
        ...state,
        product: action.product,
      };

    case "SET_FILE":
      return {
        ...state,
        file: action.file,
      };

    default:
      return state;
  }
};

export default reducer;
