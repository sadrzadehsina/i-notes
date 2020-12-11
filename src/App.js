import { Grid, Row, Text, Divider, Card } from '@geist-ui/react';

import { Notes } from './components';

const App = () => {

  const notes = [
    { 
      id: '1', 
      title: 'Test Note', 
      body: 'Here is my first test note that I am going to view every single day', 
      onEdit: () => {},
      onDelete: () => {}, 
    },
  ];

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={22}>
        <Text h1>iNotes</Text>
        <Text h5>where I keep track all my notes</Text>
        <Divider />
        <Notes notes={notes} />
      </Grid>
    </Grid.Container>
  );

};

export default App;
