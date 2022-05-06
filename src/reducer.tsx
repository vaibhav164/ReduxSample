const initialState = {
  addItem: null,
  driverContactLoading: null,
  inviteUserSucess: null,
  inviteUserLoading: null,
};

export function reducer(state = [], action) {
  if (action.type === 'ITEM_ADDED') return {...state, addItem: action.payload};
  else if (action.type === 'ITEM_REMOVED')
    return state.filter(item => item.name != action.payload.name);
  else if (action.type === 'NO_OF_ITEM_ADDED') return [...state];
  else if (action.type === 'NO_OF_ITEM_REMOVED') return [...state];
  return state;
}
