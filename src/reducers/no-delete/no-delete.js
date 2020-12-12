export const noDelete = (state, action) => {

  if (action.type === 'delete_note') {
    throw new Error('delete is not allowed!');
  }

};