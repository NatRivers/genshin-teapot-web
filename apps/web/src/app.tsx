import { ThemeProvider } from './providers';
import Home from './pages/home';

export function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
