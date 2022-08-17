import { ThemeProvider } from './providers';
import Home from './pages/Home';

export function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
