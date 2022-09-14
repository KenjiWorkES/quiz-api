import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '@/themes';
import { Box } from '@chakra-ui/react';
import { Dashboard } from './components/pages';
import Login from './components/pages/Login/test';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Box bg="brand.white" color="brand.black">
        <Login />
      </Box>
    </ChakraProvider>
  );
};

export default App;
