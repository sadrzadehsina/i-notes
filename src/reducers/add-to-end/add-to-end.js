export const addToEnd = (state, action) => {

  if (action.type === 'add_note') {
    return [
      ...state,
      action.payload.note,
    ];
  }

};