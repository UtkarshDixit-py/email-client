const initialState = {
  List: [],
  filteredList: [],
  displayBody: false,
  itemId: 0,
  showFav: false,
  isFav: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAILS":
      return {
        ...state,
        List: action.payload,
      };
    case "DISPLAY_BODY":
      return {
        ...state,
        displayBody: true,
        itemId: action.payload,
      };
    case "ADD_TO_FAV":
      return {
        ...state,
        filteredList: [...state.filteredList, action.payload],
        isFav: true,
      };

    case "SHOW_FAV":
      return {
        ...state,
        showFav: true,
      };

    case "SHOW_OTHERS":
      return {
        ...state,
        showFav: false,
      };

    case "SET_FAV_FALSE":
      return {
        ...state,
        isFav: false,
      };
    default:
      return state;
  }
};
