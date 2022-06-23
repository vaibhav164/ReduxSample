const initialState = {
  addItem: null,
  removeItem: null,
  inviteUserSucess: null,
  inviteUserLoading: null,
};

export function reducer(state = initialState, action) {
  if (action.type === 'ITEM_ADDED') return {...state, addItem: action.payload};
  else if (action.type === 'ITEM_REMOVED')
    return {...state, removeItem: action.payload};
  else if (action.type === 'NO_OF_ITEM_ADDED') return {...state};
  else if (action.type === 'NO_OF_ITEM_REMOVED') return {...state};
  return state;
}
