export const noEdit = (state, action) => {

  if (action.type === 'edit_note') {
    throw new Error('edit is not allowed!');
  }

};