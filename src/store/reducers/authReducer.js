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
      const newStateTrue = { ...state, isAuth: true };
      localStorage.setItem("isLogged", newStateTrue.isAuth);
      return newStateTrue;

    case actionTypes.setFalse:
      const newStateFalse = { ...state, isAuth: false };
      localStorage.setItem("isLogged", newStateFalse.isAuth);
      return newStateFalse;

    default:
      return state;
  }
};
