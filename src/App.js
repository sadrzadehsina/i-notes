import { Grid, Row, Text, Divider, Card } from '@geist-ui/react';

const App = () => {

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={22}>
        <Text h1>iNotes</Text>
        <Text h5>where I keep track all my notes</Text>
        <Divider />
        <Card>This note details something important.</Card>
      </Grid>
    </Grid.Container>
  );

};

export default App;
