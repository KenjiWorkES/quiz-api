import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '@/themes';
import { Box } from '@chakra-ui/react';
import { Dashboard } from './components/pages';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Dashboard />
    </ChakraProvider>
  );
};

export default App;
