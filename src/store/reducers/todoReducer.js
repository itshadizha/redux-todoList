const initState = {
  todos: [],
};

export const actionTypesTodo = {
  add: "ADD_TODO",
  delete: "DELETE_TODO",
  edit: "EDIT_TODO",
  complete: "COMPLETE_TODO",
  deleteAll: "DELETE_ALL",
  isEditing: "IS_EDITING", // Corrected typo here
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypesTodo.add:
      return { ...state, todos: [...state.todos, action.payload] };

    case actionTypesTodo.delete:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case actionTypesTodo.complete:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };

    case actionTypesTodo.edit:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };

    case actionTypesTodo.isEditing:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isEditing: !todo.isEditing }
            : todo
        ),
      };

    case actionTypesTodo.deleteAll:
      return { ...state, todos: [] };
    default:
      return state;
  }
};
