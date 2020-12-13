import {
	useModal,
	Modal,
	useInput,
	Input,
	Textarea,
	Spacer,
} from '@geist-ui/react';

export const AddNote = ({ open, onClose, addNote }) => {

	const title = useInput();

	const body = useInput();

	return (
		<Modal width="50rem" open={open} onClose={onClose}>
			<Modal.Title>Add a new note</Modal.Title>
			<Modal.Content>
				<Input width="100%" {...title.bindings}>Note Title</Input>
				<Spacer y={.5} />
				<Textarea width="100%" placeholder="Note Body" {...body.bindings}></Textarea>
			</Modal.Content>
			<Modal.Action passive onClick={onClose}>Cancel</Modal.Action>
			<Modal.Action onClick={() => addNote({ title: title.state, body: body.state })}>Add</Modal.Action>
		</Modal>
	);

};