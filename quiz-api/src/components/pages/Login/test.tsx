import React from 'react';
import {
  Center,
  Flex,
  Input,
  Spacer,
  Button,
  Text,
  Box,
  Heading,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Link,
} from '@chakra-ui/react';

const Login: React.FC = () => {
  return (
    <Center
      w="100vw"
      h="100vh"
      backgroundImage="url(/assets/img/login-bg.jpeg)"
      backgroundSize="cover"
      backgroundPosition="top"
    >
      <VStack
        bg="white"
        color="black"
        minH="70%"
        spacing={12}
        borderRadius="2xl"
        boxShadow="md"
      >
        <Heading mt={6}>Login</Heading>

        <FormControl>
          <Flex direction="column" rowGap={6} p={4}>
            <Box>
              <FormLabel>Email</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </Box>
            <Button color="blackAlpha.900" bg="gray.300" fontSize="smaller">
              Submit
            </Button>
          </Flex>
        </FormControl>

        <Link fontSize={12}>Forgot your credentials?</Link>
      </VStack>
    </Center>
  );
};
export default Login;
