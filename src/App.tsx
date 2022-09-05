import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppRoutes } from 'routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
