const initialState = {
  users: [],
  comments: [],
  isLoading: false,
  inputData: "",
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SET_COMMENTS":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_INPUT":
      return {
        ...state,
        inputData: action.payload,
      };
    default:
      return state;
  }
}
