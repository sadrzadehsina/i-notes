import React from 'react';
import { 
	Card, 
	Divider, 
	Text, 
	ButtonGroup, 
	Button,
	Row,
	Col,
	Fieldset,
} from '@geist-ui/react';
import Edit from '@geist-ui/react-icons/edit';
import Delete from '@geist-ui/react-icons/delete';

export const Note = ({ id, title, body, onEdit, onDelete }) => {

	return (
		<Fieldset>
			<Fieldset.Content>
				<Fieldset.Title><Text b>{title}</Text></Fieldset.Title>
			</Fieldset.Content>
			<Divider y={0} />
			<Fieldset.Content>
				{body}
			</Fieldset.Content>
			<Fieldset.Footer>
				<Fieldset.Footer.Status>
					<Text type="error"></Text>
				</Fieldset.Footer.Status>
				<Fieldset.Footer.Actions>
					<ButtonGroup size="mini">
						<Button 
							auto
							size="mini" 
							onClick={() => onEdit({ id, title, body })} 
						>Edit</Button>
						<Button 
							auto
							size="mini" 
							onClick={() => onDelete({ id })} 
						>Delete</Button>
					</ButtonGroup>
				</Fieldset.Footer.Actions>
			</Fieldset.Footer>
		</Fieldset>
	)

};