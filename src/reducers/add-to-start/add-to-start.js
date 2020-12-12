export const addToStart = (state, action) => {

  if (action.type === 'add_note') {
    return [
      action.payload.note,
      ...state,
    ];
  }

};