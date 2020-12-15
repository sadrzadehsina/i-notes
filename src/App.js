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

import { Notes, AddEditNote } from './components';
import { useNotes, useStorage } from './hooks';

import {
  combineReducers,
  addToStart,
  noDelete,
  noEdit,
} from './reducers';

const App = () => {

  const [themeType, setThemeType] = useState('dark');

  const [storedNotes, storeNotes] = useStorage('notes', []);

  const { visible, setVisible, bindings } = useModal(false);
  const [initialState, setInitialState] = useState({});

  const title = useInput();

  const body = useInput();

  const reducer = combineReducers(
    addToStart,
    noDelete,
    noEdit,
  );

  const notes = useNotes({ reducer, initialState: storedNotes });

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

  const openEditModal = ({ id, title, body }) => {
    setVisible(true);
    setInitialState({ id, title, body });
  };

  // Syncing with local storage
  useEffect(() => {
    storeNotes(notes.items);
  }, [notes.items]);

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
            <Notes 
              notes={notes.items} 
              onEdit={openEditModal}
              onDelete={deleteNote}
            />
          </Grid.Container>
        </Page.Content>
      </Page>
      <AddEditNote 
        addNote={addNote} 
        editNote={editNote}
        initialState={initialState}
        {...bindings}
      />
    </GeistProvider>
  );

};

export default App;
