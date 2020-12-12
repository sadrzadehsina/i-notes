export { addToStart } from './add-to-start';
export { addToEnd } from './add-to-end';
export { noDelete } from './no-delete';
export { noEdit } from './no-edit';

export const combineReducers = (...reducers) => {

	return (state, action) => {
		for (const reducer of reducers) {
			const result = reducer(state, action);
			if (result) return result;
		}
	}

};
