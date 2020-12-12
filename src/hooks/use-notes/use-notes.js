import { useReducer } from 'react';

export const useNotes = ({ reducer, initialState }) => {

	const [items, dispatch] = useReducer(reducer, initialState);

	return {
		items,
		add: payload => dispatch({ type: 'add_note', payload }),
		edit: payload => dispatch({ type: 'edit_note', payload }),
		delete: payload => dispatch({ type: 'delete_note', payload }),
	};

};