import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '@/themes';
import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Box bg="brand.black" color="brand.white">
        Test
      </Box>
    </ChakraProvider>
  );
};

export default App;
