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
} from "@chakra-ui/react";

const Login: React.FC = () => {
  return (
    <Center w="100vw" h="100vh" bg="red">
      <Flex
        direction="column"
        gap={2}
        bg="blue"
        w="100%"
        maxW={{ base: "70vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
        minH="70%"
        align="center"
        pt={4}
        pb={4}
      >
        <Heading>Login</Heading>
        <Text>Email</Text>
        <Input maxW="85%" />
        <Spacer />
        <Text>Password</Text>
        <Input maxW="85%" />
        <Spacer />
        <Button color="blackAlpha.900" bg="gray.300">
          Sign up
        </Button>
        <Spacer />
        <Text alignSelf="end" pr={10}>
          Forgot your credentials?
        </Text>
      </Flex>
    </Center>
  );
};
export default Login;
