import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Center h="100vh" w="100vw">
      <Flex minH="70%" align="center" justify="space-evenly" direction="column">
        <Heading>Sign-up</Heading>
        <FormControl h="100%" gap={10}>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="First Name" />
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Last Name" />
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" />
          <FormLabel>Password</FormLabel>
          <Input placeholder="Password" type="password" />
          <FormLabel>Confirm Password</FormLabel>
          <Input placeholder="Confirm Password" type="password" />
          <Button w="100%" mt={6} color="blackAlpha.900">
            Sign-up
          </Button>
        </FormControl>
      </Flex>
    </Center>
  );
};
export default Signup;
