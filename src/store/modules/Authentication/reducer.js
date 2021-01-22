const initialState = {
  buttonClick: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_CLICK': {
      const newState = { ...state };
      newState.buttonClick = !newState.buttonClick;
      return newState;
    }

    default: {
      return state;
    }
  }
}
