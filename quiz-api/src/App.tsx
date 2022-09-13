import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '@/themes';
import { Box } from '@chakra-ui/react';
import { Dashboard } from './components/pages';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Box bg="brand.black" color="brand.white">
        <Dashboard />
      </Box>
    </ChakraProvider>
  );
};

export default App;
