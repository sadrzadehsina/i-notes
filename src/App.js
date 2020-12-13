import { useEffect, useState, Fragment } from 'react';

import { 
  CssBaseline,
  GeistProvider,
  Button, 
  Text, 
  Divider, 
  Page,
  useModal,
  Modal,
  useInput,
  Input,
  Textarea,
  Spacer,
  Grid,
} from '@geist-ui/react';

import { Notes, AddNote } from './components';
import { useNotes } from './hooks';

import {
  combineReducers,
  addToStart,
  noDelete,
  noEdit,
} from './reducers';

const initialState = [
  { 
    id: 2, 
    title: 'Test Note', 
    body: 'Here is my first test note that I am going to view every single day',
  },
];

const App = () => {

  const [themeType, setThemeType] = useState('dark');

  const { visible, setVisible, bindings } = useModal(false);

  const title = useInput();

  const body = useInput();

  const reducer = combineReducers(
    addToStart,
    noDelete,
    noEdit,
  );

  const notes = useNotes({ reducer, initialState });

  const addNote = ({ title, body }) => {
    const note = { id: 2, title, body };
    notes.add({ note });
    setVisible(false);
  };

  const editNote = ({ id, title, body }) => {
    const note = { id, title, body };
    notes.edit({ note });
    setVisible(false);
  };

  const deleteNote = id => notes.delete({ id });

  const openAddModal = () => setVisible(true);

  return (
    <GeistProvider theme={{ type: themeType }}>
      <CssBaseline />
      <Page size="large">
        <Page.Header>
          <Text h1>iNotes</Text>
          <Text h5>where I keep all my notes!</Text>
          <Button onClick={openAddModal}>Add a new note</Button>
          <Divider />
        </Page.Header>
        <Page.Content>
          <Grid.Container gap={2}>
            <Notes notes={notes.items} />
          </Grid.Container>
        </Page.Content>
      </Page>
      <AddNote addNote={addNote} {...bindings} />
    </GeistProvider>
  );

};

export default App;
