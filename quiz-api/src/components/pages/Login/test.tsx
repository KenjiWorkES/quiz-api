import React from "react";
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
} from "@chakra-ui/react";

const Login: React.FC = () => {
  return (
    <Center w="100vw" h="100vh">
      <VStack>
        <Heading>Login</Heading>
        <Text>Email</Text>
        <Input maxW="85%" />
        <Spacer />
        <Text>Password</Text>
        <Input maxW="85%" type="password" />
        <Spacer />
        <Button color="blackAlpha.900" bg="gray.300">
          Sign up
        </Button>
        <Spacer />
        <Text>Forgot your credentials?</Text>
      </VStack>
    </Center>
  );
};
export default Login;
