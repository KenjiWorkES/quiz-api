import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from "@/themes";
import { Box } from "@chakra-ui/react";
import { Dashboard } from "./components/pages";
import Login from "./components/pages/Login/test";
import Signup from "./components/pages/Signup";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Box bg="brand.black" color="brand.white">
        <Signup />
      </Box>
    </ChakraProvider>
  );
};

export default App;
