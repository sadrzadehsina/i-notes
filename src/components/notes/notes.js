import React from 'react';
import { Grid } from '@geist-ui/react';
import { Note } from '../note';

export const Notes = ({ notes, onEdit, onDelete }) => {

	const renderNote = note => (
		<Grid xs={24} md={8} key={note.id}>
			<Note 
				id={note.id}
				title={note.title} 
				body={note.body} 
				onEdit={onEdit} 
				onDelete={onDelete}
			/>
		</Grid>
	);

	return notes.map(renderNote);

};