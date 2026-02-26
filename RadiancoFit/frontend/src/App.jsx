import React from 'react';
import SetupWizard from './components/SetupWizard';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <SetupWizard />
      </Container>
    </>
  );
}

export default App;
