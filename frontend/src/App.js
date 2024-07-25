import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Business Card Reader
      </Typography>
      <ImageUpload />
    </Container>
  );
}

export default App;
