import React from 'react';
import { Grid } from '@geist-ui/react';
import { Note } from '../note';

export const Notes = ({ notes }) => {

	const renderNote = note => (
		<Grid xs={4} key={note.id}>
			<Note 
				id={note.id}
				title={note.title} 
				body={note.body} 
				onEdit={note.onEdit} 
				onDelete={note.onDelete}
			/>
		</Grid>
	);

	return notes.map(renderNote);

};