const initState = {
  isAuth: localStorage.getItem("isLogged") === "true" || false,
};

export const actionTypes = {
  setTrue: "SET_TRUE",
  setFalse: "SET_FALSE",
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.setTrue:
      const newStateTrue = { ...state, isLogged: true };
      localStorage.setItem("isLogged", newStateTrue.isLogged);
      return newStateTrue;

    case actionTypes.setFalse:
      const newStateFalse = { ...state, isLogged: false };
      localStorage.setItem("isLogged", newStateFalse.isLogged);
      return newStateFalse;

    default:
      return state;
  }
};
