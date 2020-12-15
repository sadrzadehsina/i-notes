import { useEffect } from 'react';

import {
	useModal,
	Modal,
	useInput,
	Input,
	Textarea,
	Spacer,
} from '@geist-ui/react';

const isEmptyObject = obj => Object.keys(obj).length === 0;

const modalTitle = isEdit => isEdit ? 'Edit note' : 'Add a new note';

const submitLabel = isEdit => isEdit ? 'Edit' : 'Add';

export const AddEditNote = ({ 
	open, 
	onClose, 
	addNote,
	editNote,
	initialState = {},
}) => {

	const { id } = initialState;

	const isEdit = initialState => !isEmptyObject(initialState);

	const title = useInput(initialState.title);

	const body = useInput(initialState.body);

	const submitFn = isEdit => isEdit ? edit : add;

	const add = ({ title, body }) => addNote({ title, body });

	const edit = ({ id, title, body }) => editNote({ id, title, body });

	useEffect(() => {

		if (isEmptyObject(initialState)) return;

		title.setState(initialState.title);
		body.setState(initialState.body);

	}, [initialState]);

	return (
		<Modal width="50rem" open={open} onClose={onClose}>
			<Modal.Title>{modalTitle(isEdit(initialState))}</Modal.Title>
			<Modal.Content>
				<Input width="100%" {...title.bindings}>Note Title</Input>
				<Spacer y={.5} />
				<Textarea width="100%" placeholder="Note Body" {...body.bindings}></Textarea>
			</Modal.Content>
			<Modal.Action passive onClick={onClose}>Cancel</Modal.Action>
			<Modal.Action 
				onClick={() => submitFn(isEdit(initialState))({ id, title: title.state, body: body.state })}
			>
				{submitLabel(isEdit(initialState))}
			</Modal.Action>
		</Modal>
	);

};