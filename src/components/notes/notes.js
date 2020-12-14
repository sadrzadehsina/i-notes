import React from 'react';
import { Grid } from '@geist-ui/react';
import { Note } from '../note';

export const Notes = ({ notes, onEdit }) => {

	const renderNote = note => (
		<Grid xs={6} key={note.id}>
			<Note 
				id={note.id}
				title={note.title} 
				body={note.body} 
				onEdit={() => onEdit({ id: note.id, title: note.title, body: note.body })} 
				onDelete={note.onDelete}
			/>
		</Grid>
	);

	return notes.map(renderNote);

};