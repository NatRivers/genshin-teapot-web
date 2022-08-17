import { Routes, Route, Navigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';

import { ThemeProvider } from './providers';
import Home from './pages/Home';

// FIXME: delete once we actually have a pages
const ExamplePage = () => (
  <Container data-testid="example-page">
    <Typography variant="h2" align="center" p={2}>
      Example Page
    </Typography>
  </Container>
);

export function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
