import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'assets/styles/theme';
import { AppRoutes } from 'routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
