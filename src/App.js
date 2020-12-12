import { useEffect } from 'react';

import { Grid, Text, Divider } from '@geist-ui/react';

import { Notes } from './components';
import { useNotes } from './hooks';

import {
  combineReducers,
  addToStart,
  noDelete,
  noEdit,
} from './reducers';

const initialState = [
  { 
    id: '1', 
    title: 'Test Note', 
    body: 'Here is my first test note that I am going to view every single day',
  },
];

const App = () => {

  const reducer = combineReducers(
    addToStart,
    noDelete,
    noEdit,
  );

  const notes = useNotes({ reducer, initialState });

  const addNote = ({ title, body }) => notes.add({ id: '3', title, body });

  const editNote = ({ id, title, body }) => notes.edit({ id, title, body });

  const deleteNote = id => notes.delete({ id });

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={22}>
        <Text h1>iNotes</Text>
        <Text h5>where I keep track all my notes</Text>
        <Divider />
      </Grid>
      <Notes notes={notes.items} />
    </Grid.Container>
  );

};

export default App;
