import React from 'react';
import { Card, Divider, Text, ButtonGroup, Button } from '@geist-ui/react';
import Edit from '@geist-ui/react-icons/edit';
import Delete from '@geist-ui/react-icons/delete';

export const Note = ({ id, title, body, onEdit, onDelete }) => {

	return (
		<Card>
			<Card.Content>
				<Text b>{title}</Text>
			</Card.Content>
			<Divider y={0} />
			<Card.Content>{body}</Card.Content>
			<Card.Footer>
				<ButtonGroup>
					<Button icon={<Edit />} size="small" onClick={() => onEdit({ id, title, body })} />
					<Button icon={<Delete />} size="small" onClick={() => onDelete({ id })} />
				</ButtonGroup>
			</Card.Footer>
		</Card>
	)

};