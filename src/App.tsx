import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: 'Iransans, sans-serif',
    },
  });
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
